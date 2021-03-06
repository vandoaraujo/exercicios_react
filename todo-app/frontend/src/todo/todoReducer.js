const INITIAL_STATE = { description: '', list: [] }

/* const INITIAL_STATE = {
    description: 'Ler Livro 2',
    list: [{
        _id: 1,
        description: 'Pagar a fatura do cartão',
        done: true
    },
    {
        _id: 2,
        description: 'Reunião com a equipe às 10:00 ',
        done: false
    },
    {
        _id: 3,
        description: 'Consulta Médica nas terças depois do almoço',
        done: false
    }]
} */

//preciso criar a funcao que representa o reducers.
//Usamos uma aerofunction. a Funcao reducers recebe o estado atual e a nova action.
//O action.payload virá da action corrente que é a action do todoActions.js
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload}
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
        case 'TODO_ADDED':
            return { ...state, description: ''}
        case 'TODO_CLEAR':
            return { ...state, description: ''}
        default:
            return state
    }
}