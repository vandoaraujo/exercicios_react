module.exports = (req, res, next) => {

    /**
     * Compartilhamento de recursos de origens cruzadas (CORS) é um mecanismo que usa
     * cabeçalhos HTTP adicionais para garantir permissão de acesso a recursos de um
     * servidor diferente do da origem da página (domínio) correntemente em uso.
     */
    
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    //O next é necessário para continuar o fluxo, pois o middleware não trata a resposta.
    next()
}