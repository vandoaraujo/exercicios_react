const mongoose = require(mongoose)
mongoose.Promise = global.Promise //global é uma variavel do NODE, que está disponivel.
module.exports = mongoose.connect('mongodb://localhost/mymoney')