const express = require('express')
const server = express()
const router = require('./ex05_router')

//o router será uma função middleware.
server.use('/api', router)

//Escutando na porta 3000
server.listen(3000, () => console.log('Executando...'))