"use client"
import {useState} from "react"
import Link from "next/link"
import toast from "react-hot-toast"
export default function Register(){

const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[photo,setPhoto]=useState("")
const[pass,setPass]=useState("")

const handleRegister=()=>{
if(!name||!email||!pass){
toast.error("fill all fields")
return
}

localStorage.setItem("tempUser",JSON.stringify({
name,
email,
image:photo || "https://i.pravatar.cc/40"
}))

toast.success("registered")
window.location.href="/login"
}

return(
<div className="max-w-md mx-auto mt-10 space-y-4 bg-white p-6 rounded shadow">

<h1 className="text-2xl font-bold text-center">Register</h1>

<input placeholder="name" value={name} onChange={e=>setName(e.target.value)} className="w-full border p-2"/>
<input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full border p-2"/>
<input placeholder="photo url" value={photo} onChange={e=>setPhoto(e.target.value)} className="w-full border p-2"/>
<input type="password" placeholder="password" value={pass} onChange={e=>setPass(e.target.value)} className="w-full border p-2"/>

<button onClick={handleRegister} className="w-full bg-blue-600 text-white p-2">Register</button>

<button className="w-full border p-2" onClick={()=>toast("Google register simulated")}>
Register with Google
</button>

<p className="text-sm text-center">
Already have an account? <Link href="/login" className="text-blue-600">Login</Link>
</p>

</div>
)
}