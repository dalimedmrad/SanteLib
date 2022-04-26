import {combineReducers} from 'redux'
import {userReducer} from './user'
import {rdvReducer } from './rdv'
import {recReducer} from "./rec"
export const rootReducer=combineReducers({userReducer,rdvReducer,recReducer})

