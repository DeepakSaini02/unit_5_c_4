import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { getjobError, getjobLoading, getjobSuccess } from "../store/get_job/action"
import './Dashboard.css'


export const Dashboard=()=>{

    const {status}=useSelector((state)=>({status:state.auth.status}))

    const [list,setList]=useState([])

const dispatch=useDispatch()

const {job}=useSelector((state)=>({job:state.job.job}))

    useEffect(()=>{
        dispatch(getjobLoading())
        fetch('http://localhost:3001/jobs').
        then(res=>res.json()).
        then(d=>{
            console.log('hl');
            dispatch(getjobSuccess(d))
        }
            ).catch(e=>{

                dispatch(getjobError(e))
            }
                )

        console.log(job)
    },[])

const salarySort=()=>{
    let p=job.sort((a,b)=>a.salary-b.salary)
    dispatch(getjobSuccess(p))
}

const loactionSort=()=>{
    let x=job.sort((a,b)=>{
        if(a.location<b.location)
        return -1
        if(a.location>b.location)
        return 1
        
        return 0
    })
    dispatch(getjobSuccess(x))
}


const applyList=(el)=>{
    setList([...list,el])
    console.log(list);
}

if(status=='logout')
return <Navigate to='/login' />

    return <div id="main">
    <button onClick={salarySort} >salary</button>
    <button onClick={loactionSort}>location</button>
<div id="outer">
{
            job.map((el)=>(
                <div id="inner">
                    <p>company name {el.cname}</p>
                    <p>job title {el.title}</p>
                    <p>job salary {el.salary}</p>
                    <p>job location {el.location}</p>
                    <p>job discription {el.dis}</p>
                    <button onClick={()=>applyList(el)}>Apply</button>
                </div>
            ))
        }
</div>
       
        
    </div>
}