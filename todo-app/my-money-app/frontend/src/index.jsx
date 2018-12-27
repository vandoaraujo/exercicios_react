import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import App from './main/app'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
&& window.__REDUX_DEVTOOLS_EXTENSION__()
//Quando crio essa store, ele adiciona os reducers,
// logo na store eu terei o dashboard, tag e o billingCycle
const store = applyMiddleware(promise)(createStore)(reducers, devTools)
console.log(store.getState())
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))