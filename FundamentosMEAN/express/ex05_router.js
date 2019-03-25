const express = require('express')
const router = express.Router()

/**
 *O ROUTER permite mapear URL e parametros
 agrupando as funcionalidades específicas
 para cada Router. Coloco tudo dentro do router
 e depois passo para o Express.
 É uma mini aplicação que possui todos os
 mapeamentos.
 */
router.use((req, res, next) => {
    const init = Date.now()
    next()
    console.log(`Tempo = ${Date.now() - init} ms.`)
})

router.get('/produtos/:id', (req, res) => {
    res.json({id: req.params.id, name: 'Caneta'})
})

router.get('/clientes/:id/:name', (req, res) => {
    res.json({id: req.params.id, name: req.params.name})
})

module.exports = router