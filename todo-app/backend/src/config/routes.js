const express = require('express')

module.exports = function(server){
    //API
    const router = express.Router()
    //criando um middleware. Declarando o caminho das APis
    server.use('/api', router)

    //mapeando as rotas - TODO Routes. Ele vai encontrar
    //as rotas no arquivo todoService.js
    const todoService = require('../api/todo/todoService.js')
    //Registrando as rotas na URL /todos, serão encontrados
    //os serviços GET, POST...etc
    todoService.register(router, '/todos')
}