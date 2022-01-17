import { useSelector } from "react-redux"
import './UserApply.css'
export const UserApply=()=>{

    const {apply}=useSelector((state)=>({apply:state.job.apply}))
console.log(apply)

    return <div>
<h1>apply loginStatus</h1>
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