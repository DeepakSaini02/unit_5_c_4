import { regisReducer } from "./auth/reducer";
import {combineReducers, createStore} from 'redux'
import {postReducer} from './job_post/reducer'

const rootReducer=combineReducers({
    auth:regisReducer,
    post:postReducer
})

export const store=createStore(rootReducer)