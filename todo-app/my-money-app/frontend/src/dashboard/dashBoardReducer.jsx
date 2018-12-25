const INITIAL_STATE = {summary: {credit: 177, debt: 11}}

export default function(state = INITIAL_STATE, action) {
<<<<<<< HEAD
    switch(action.type){
        case 'BILLING_SUMARY_FETCHED':
            return { ...state, summary: action.payload.data}
    }
    return state
}   
=======
    switch (action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data }
        default:
            return state
        }
}
>>>>>>> e1d54dcf7f083674253b145fb8333bd6d8ec0ff1
