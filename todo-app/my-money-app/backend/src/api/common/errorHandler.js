const _ = require('lodash')

//Crio um middleware exportando-o e passando os parametros necessários de req, resp e next.
module.exports = (req, res, next) => {
    const bundle = res.locals.bundle
    if(bundle.errors) {
        const errors = parseErrors(bundle.errors)
        //essa sintaxe é do ecmascript 2015
        res.status(500).json({errors})
    } else {
        //se nao tiver nenhum erro chamo um next, já que isso é um middleware.
        next()
    }
}
    
const parseErrors = (nodeRestfulErrors) => {
const errors = [];
_.forIn(nodeRestfulErrors, error => errors.push(error.message))
        return errors
}