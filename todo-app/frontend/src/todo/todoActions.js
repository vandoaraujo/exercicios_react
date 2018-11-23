
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
//então precisaremos de um middleware.
export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload : request
    }
}