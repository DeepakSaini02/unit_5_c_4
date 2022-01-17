import { useSelector } from "react-redux"

export const UserApply=()=>{

    const {apply}=useSelector((state)=>({apply:state.job.apply}))
console.log(apply)

    return <div>

    </div>
}