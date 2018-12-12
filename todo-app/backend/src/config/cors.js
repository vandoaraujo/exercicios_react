module.exports = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}

 /** 
//se não tivesse o next esse midleware iria travar a aplicaçãoIsso é um midleware bastante comum usando
  o padrão do express. O next é conhecido como CHAIN
  do chain of responsability, se ele vai pro proximo
  midleware ou se vai abortar...
  Adicionamos um cabeçalho na resposta que será enviada
 para dizer que é permitido
  acessar o serviço... 
  Com isso a nossa API está aberta para ser consumida... */
