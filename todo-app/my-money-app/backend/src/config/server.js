const port = process.env.PORT ? process.env.PORT : 3003

const bodyparser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
//É um parser que é aplicado no fluxo de requisição e faz o cast de String para numérico das queryparams.
const queryParser = require('express-query-int')

server.use(bodyparser.urlencoded({ extended: true}))
server.use(bodyparser.json())   
server.use(allowCors)
server.use(queryParser())

server.listen(port , function(){
    console.log(`BackEnd is running on port ${port}.`);
})

module.exports = server