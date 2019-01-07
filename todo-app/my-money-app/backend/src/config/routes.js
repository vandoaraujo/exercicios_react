const express = require('express')
const auth = require('./auth')


module.exports = function (server) {

    /*
     * Rotas protegidas por Token JWT
     */
    //Definir URL base para todas as rotas
    const protectedApi = express.Router()
    //Sempre que começar com /api, ele redireciona para router.
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    //Rotas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycleService')
    BillingCycle.register(protectedApi, '/billingCycles')

    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}