const express = require('express')
const server = express()
const router = require('./ex05_router')

server.use(router)

// //formas de mapear uma URL com o express
// //Mapeando o GET - retorna o HTML para a pagina
// server.get('/', function(req, res){
//     res.send('<h1>Index!</h1>')
// })

// //mapeando GET e post na URL /teste
// server.all('/teste', function(req, res){
//     res.send('<h1>Teste! </h1>')
// })

// server.get('/api/', function(req, res){
//     res.send('<h1>API!</h1>')
// })

//Escutando na porta 3000
server.listen(3000, () => console.log('Executando...'))