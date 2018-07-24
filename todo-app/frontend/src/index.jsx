import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import {combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './field'

const reducers = combineReducers({
    field: () => ({value: 'opa'})
})

ReactDOM.render(<App/>, document.getElementById('app'))