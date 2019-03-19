function upper(text){
    return text.toUpperCase()
}

//ES5
module.exports = { upper }
//Es6 - não funciona no NODE, só usando BABEL...
//export default { upper }