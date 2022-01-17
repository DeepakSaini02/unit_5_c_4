import { APPLY_JOB, GETJOB_ERROR, GETJOB_LOADING, GETJOB_SUCCESS } from "./actionTypes"


const init={loading:false,job:[],error:false,apply:[]}

export const getjobReducer=(state=init,{type,payload})=>{
    switch(type){
        case GETJOB_LOADING:return{
            ...state,
            loading:true
        }

        case GETJOB_SUCCESS:return{
            ...state,
            job:payload,
            loading:false
        }

        case GETJOB_ERROR:return{
            ...state,
            loading:false,
            error:true
        }

        case APPLY_JOB:return{
            ...state,
            apply:[...state.apply,payload]
        }

        default:return state


    }
}