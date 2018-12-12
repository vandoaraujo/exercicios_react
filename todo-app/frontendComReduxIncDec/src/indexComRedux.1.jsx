import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
//import Field from './ex/field'
//import fieldReducer from './ex/fieldReducer'
import counterReducer from './ex/counterReducer'
import Counter from './ex/counter'

/**
 * O campo field é controlado pelo fieldReducer, quando uma ação foi chamado, o fieldReducer será executado.
 */
const reducers = combineReducers({
    //field: ()=> ({ value: 'Opa' })
    //field: fieldReducer
    counter : counterReducer
})

ReactDOM.render(
        <Provider store={createStore(reducers)}>
             <Counter />
        </Provider>
        , document.getElementById('app')
)