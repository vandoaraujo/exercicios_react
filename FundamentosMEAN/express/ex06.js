//Uso Singletons e instancias diferentes...

const express1 = require('express')
const express2 = require('express')
//retorna apenas uma unica instancia

console.log(express1 === express2)

const server1 = express1();
const server2 = express1();
//retorna instancias diferentes
console.log(server1 === server2)

const router1 = express1.Router()
const router2 = express1.Router()

//retorna instancias diferentes
console.log(router1 === router2)

//pra usarmos as mesmas, temos que passar por parametro ou exportar...