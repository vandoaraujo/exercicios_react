const mongoose = require('mongoose')
/**A api de promise do Mongoose vai usar a Api de Promise do Mongoose. Gera um WArning se nao atribuir */
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')