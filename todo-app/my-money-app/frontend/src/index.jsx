import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'

import promise from 'redux-promise'

import App from './main/app'
import reducers from './main/reducers'

<<<<<<< HEAD
const store = applyMiddleware(promise)(createStore)(reducers)
=======
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
&& window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise)(createStore)(reducers, devTools)
>>>>>>> e1d54dcf7f083674253b145fb8333bd6d8ec0ff1
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))