
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

/**
 * 
 * @param {Esses metodos sao ActionCreators e espera-se que esses metodos retornem objetos} event 
 */
export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

//Esse metodo retornará uma promise, logo o dado vindo do request não está preparaado ainda
//então precisaremos de um middleware. Os dados ainda não estarão 
export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload : request
    }
}

//Método add recebe como parametro a description 
//Faço um POST nA URL abaixo passando a descrição.
export const add = (description) => {
    //essa sintaxe abaixo já é do ECMA Script 2015
    //Vamos precisar usar o then para esperar a resposta, senão a lista pode ficar
    //desatualizada
    const request = axios.post(URL, {description})
    //a versao antiga era assim
    //const request = axios.post(URL, {description : description})

    // Precisamos dos colchetes, para colocar elementos multiplos usando o middleware multi com os colchetes.
    // e virgulas entre eles.
    return [
        {type: 'TODO_ADDED', payload : request}, search()
    ]
}