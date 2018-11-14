const INITIAL_VALUE = { step: 1, number: 0  }
/**
 * É necessário usar o spread. pode até não usar, mas
 * a diferença era que estaria fixando teu estado em ter
 * apenas number, no teu caso perderia a referencia do step.
 * Usando o spread você mantêm as demais e atualiza só as
 * que precisa.
*/
export default function(state = INITIAL_VALUE, number: 0){
    switch(action.type){
        case 'INC':
            return { ...state, number: state.number + state.step }
        case 'DEC':
            return { ...state, number: state.number - state.step }
        case 'STEP_CHANGED':
            return { ...state, step: action.payload }
        default:
            return state
    }
}