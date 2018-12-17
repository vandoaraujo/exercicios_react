const BillingCycle = require('./billingCycle.js')
const errorHandler = require('../common/errorHandler.js')

//Criação dos serviços Web através do Express
BillingCycle.methods(['get','post','put','delete'])
BillingCycle.updateOptions({new:true , runValidators: true}) //no NODERESTFUL, o update não obriga o preenchimento
//dos campos, então precisamos informar essa opção para obrigar a validação também no update. O new informa que o
// objeto atualizado em um put será retornado
BillingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
       },
       {
        $project: {_id: 0, credit: 1, debt: 1}
       },
    (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        }else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})

module.exports = BillingCycle