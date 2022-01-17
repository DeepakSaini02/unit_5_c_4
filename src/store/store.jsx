import { regisReducer } from "./auth/reducer";
import {createStore} from 'redux'

export const store=createStore(regisReducer)