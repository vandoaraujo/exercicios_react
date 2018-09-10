import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './ex/field'
import fieldReducer from './ex/fieldReducer'

const reducers = combineReducers({
    //field: ()=> ({ value: 'Opa' })
    field: fieldReducer
})

ReactDOM.render(
        <Provider store={createStore(reducers)}>
             <Field initialValue='Teste' />  
        </Provider>
        , document.getElementById('app')
)