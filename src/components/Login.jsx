import { useState } from "react"

export const Login=()=>{

const [form,setForm]=useState(null)

const handleChange=(e)=>{
    const {name,value}=e.target
    setForm({
        ...form,
        [name]:value
    })
}

const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(form)
}


    return <div>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="enter your email" name="email" onChange={handleChange} />
        <input type="text" placeholder="enter your password" name="password" onChange={handleChange} />
        <input type="submit" value='Submit' />

        </form>
    </div>
}