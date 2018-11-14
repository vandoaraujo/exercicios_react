import React from 'react'
import ReactDOM from 'react-dom'
//faltam dois imports...verificar...
import counterReducer from './counterReducer'
import Counter from './counter'

const reducers = combineReducers ({
    counter: counterReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter/>
    </Provider>
   , document.getElementById('app'))
