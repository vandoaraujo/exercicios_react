module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH,DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept')
    next()
 }
 /** Isso é um midleware bastante comum usando
  o padrão do express. O next é conhecido como CHAIN
  do chain of responsability, se ele vai pro proximo
  midleware ou se vai abortar... */