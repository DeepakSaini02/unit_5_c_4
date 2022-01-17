import { APPLY_JOB, GETJOB_ERROR, GETJOB_LOADING, GETJOB_SUCCESS } from "./actionTypes"

export const getjobLoading=()=>{
    return {
        type:GETJOB_LOADING
    }
}

export const getjobSuccess=(payload)=>{
    return {
        type:GETJOB_SUCCESS,
        payload
    }
}

export const getjobError=(payload)=>{
    return {
        type:GETJOB_ERROR,
        payload
    }
}

export const applyJob=(payload)=>{
    return {
        type:APPLY_JOB,
        payload
    }
}