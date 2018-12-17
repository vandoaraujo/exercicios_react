const express = require('express')

module.exports = function(server){

    //Definir URL base para todas as rotas
    const router = express.Router()
    //Sempre que começar com /api, ele redireciona para router.
    server.use('/api', router)

    //Rotas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}