import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer';

// é necessario adicionar na minha lista de reducers o reducer criado
const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer