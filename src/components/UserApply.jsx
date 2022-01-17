import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import './UserApply.css'
export const UserApply=()=>{

    const {apply}=useSelector((state)=>({apply:state.job.apply}))
console.log(apply)

const {status}=useSelector((state)=>({status:state.auth.status}))

if(status=='logout')
return <Navigate to='/login' />
    return <div>
<h1>apply Status</h1>
<div id="outer">
{
            apply.map((el)=>(
                <div id="inner">
                    <p>company name {el.cname}</p>
                    <p>job title {el.title}</p>
                    <p>job salary {el.salary}</p>
                    <p>job location {el.location}</p>
                    <p>job discription {el.dis}</p>
                  
                </div>
            ))
        }
</div>


    </div>
}