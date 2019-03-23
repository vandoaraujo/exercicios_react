const express = require('express')
const server = express()

//em JS podemos suprimir os parametros, se vc nao passar ele ignora
server.get('/', function (req, res, next){
    console.log('Inicio...')
    next()
    console.log('Fim...')
})

server.get('/', function(req, res){
    console.log('Resposta...')
    res.send('<h1> Ola Express!</h1>') 
})

//Escutando na porta 3000
server.listen(3000, () => console.log('Executando...'))