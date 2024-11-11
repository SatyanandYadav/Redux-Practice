import { combineReducers } from 'redux'
import counterReducer from '.'
import { multiplyReducer } from './multiply'
import { userReducer } from './user'


export const rootReducers = combineReducers({
    count: counterReducer,
    multi: multiplyReducer,
    user: userReducer,
})