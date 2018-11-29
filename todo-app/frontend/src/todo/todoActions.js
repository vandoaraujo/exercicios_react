
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

/**
 * 
 * @param {Esses métodos sao ActionCreators e espera-se que esses metodos retornem objetos} event 
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
/* export const add = (description) => {
    //essa sintaxe abaixo já é do ECMA Script 2015
    //Vamos precisar usar o then para esperar a resposta, senão a lista pode ficar
    //desatualizada
    const request = axios.post(URL, {description})
    //a versao antiga era assim
    //const request = axios.post(URL, {description : description})

    /**
     *     const add = async description => {
     const request = await axios.post(URL, { description });
     return [{ type: "TODO_ADDED", payload: request }, await search()];
    };
       // Precisamos dos colchetes, para colocar elementos multiplos usando o middleware multi com os colchetes.
    // e virgulas entre eles.
    return [
        {type: 'TODO_ADDED', payload : request}, search()
    ]
} */

//Com o Redux Thunk vc nao retorna mais uma action, mas um método
export const add = (description) => {
    // o dispatch será responsavel por enviar suas Actions para os reducers,
    // então temos na mao quem é responsavel
    // por disparar os eventos para os reducers.
    return dispatch => {
        axios.post(URL, {description})
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
        .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
        .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
        .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }]
}

