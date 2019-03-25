const express = require('express')
const server = express()

//em JS podemos suprimir os parametros, se vc nao passar ele ignora
/**
 * O use expande as URLS permitindo invocar URLs
 * secundárias a partir da principal.
 * Permite chamar todos os métodos HTTP.
 * Ex: /api/Teste -> funciona com o use
 * 
 * O Use permite também a supressão das URLs.
 * Ex: Sem o '/api'
 * 
 * server.use(function (req, res, next){
    console.log('Inicio...')
    next()
    console.log('Fim...')
})
 * 
 * Ex: Usando o **get** 
 * /api/Teste -> NÃO FUNCIONA, apenas funciona o /api
 */

server.use('/api', function (req, res, next){
    console.log('Inicio...')
    next()
    console.log('Fim...')
})

server.use('/api', function(req, res){
    console.log('Resposta...')
    res.send('<h1> API!</h1>') 
})

//Escutando na porta 3000
server.listen(3000, () => console.log('Executando...'))