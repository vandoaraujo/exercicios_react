var mongoose = require('mongoose')
mongoose.Promise = global.Promise //global é uma variavel do NODE, que está disponivel.
module.exports = mongoose.connect('mongodb://localhost/mymoney')

//faz o tratamento do retorno das msgs em portugês.
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório. "

mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}' ."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}' ."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}' ."