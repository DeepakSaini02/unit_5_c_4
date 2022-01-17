import { REGIS_ERROR, REGIS_LOADING, REGIS_SUCCESS } from "./actionTypes"

export const regisLoading=()=>{
    return {
        type:REGIS_LOADING
    }
}

export const regisSuccess=(payload)=>{
    return {
        type:REGIS_SUCCESS,
        payload
    }
}

export const regisError=(payload)=>{
    return {
        type:REGIS_ERROR,
        payload
    }
}