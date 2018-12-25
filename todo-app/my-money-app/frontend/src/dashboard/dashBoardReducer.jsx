const INITIAL_STATE = {summary: {credit: 177, debt: 11}}

export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'BILLING_SUMARY_FETCHED':
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
    return state
}   