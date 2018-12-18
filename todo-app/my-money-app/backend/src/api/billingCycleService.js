const BillingCycle = require('./billingCycle.js')
//FAÇO O IMPORT DO MIDDLEWARE DE TRATAMENTO DE ERRO
const errorHandler = require('./common/errorHandler.js')

//Criação dos serviços Web através do Express
BillingCycle.methods(['get','post','put','delete'])
BillingCycle.updateOptions({new:true , runValidators: true}) //no NODERESTFUL, o update não obriga o preenchimento
//dos campos, então precisamos informar essa opção para obrigar a validação também no update. O new informa que o
// objeto atualizado em um put será retornado

//Esse método permite interceptar a requisição depois do POST/PUT para aplicar o middleware de erro
// efetuando o tratamento correto·
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
/**
 * Para criar uma rota, usamos a seguinte API:
 * BillingCyle.route(nome da rota)
 * Os 3 parâmetros são o middleware (req, res, next)
 * Para fazer a função devemos perguntar.
 * O que é preciso exportar? Preciso exportar todos os creditos e todos os debitos
 * E para isso vamos projetar os valores dos creditos e dos debitos, somar os respectivos valores
 * E agrupar esses valores pelo credito e debito
 * 
 */
BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate({
        $project: {
            credit: {$sum: "$credits.value"},
            debt: {$sum: "$debts.value"}
        }
    }, {
        //agrupa os valores por base num criterio. A API do mongo exige que exista um id=null
        //A variavel $credit é o resultado da variavel credit de project acima,
        $group:{
            _id: null, // esse nul informa que a query retornará o resultado geral de tudo, se eu colocasse
            //ano por exemplo retornaria os valores agrupados por ano.
            credit: {$sum: "$credit"},
            debt: {$sum: "$debt"}
        }
       },
       {
        //Essa linha indica que do resultado da pipeline, queremos exibir apenas o credit e o debt.
        //O valor 0 indica que o id, não será exibido.
        $project: {_id: 0, credit: 1, debt: 1}
       },//Depois que a pipeline for executada, essa calback será chamada.
    (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        }else {
            // A resposta é um array, então eu passo o indice zero do result.
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})

module.exports = BillingCycle