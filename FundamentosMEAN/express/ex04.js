const express = require('express')
const server = express()

/**
 * Forma interessante de mapear vários métodos para a mesma URL.
 * Mapeia um route e os vários métodos específicos
 */
server.route('/clientes')
    .get((req, res) => res.send('Lista de Clientes'))
    .post((req, res) => res.send('Cadastra novo cliente'))
    .put((req, res) => res.send('Altera cliente'))
    .delete((req, res) => res.send('Deleta novo cliente'))

//Escutando na porta 3000
server.listen(3000, () => console.log('Executando...'))