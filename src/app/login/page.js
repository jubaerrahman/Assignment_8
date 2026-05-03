"use client"

import {useState} from "react"
import {useRouter,useSearchParams} from "next/navigation"
import {loginUser} from "@/lib/auth"
import Link from "next/link"
import toast from "react-hot-toast"

export default function Login(){

const[email,setEmail]=useState("")
const[pass,setPass]=useState("")
const router=useRouter()
const searchParams=useSearchParams()

const redirect=searchParams.get("redirect")||"/"

const handleLogin=()=>{
if(!email||!pass){
toast.error("fill all fields")
return
}

const temp=localStorage.getItem("tempUser")

let userData

if(temp){
userData=JSON.parse(temp)
}else{
userData={
email,
name:"User",
image:"https://i.pravatar.cc/40"
}
}

loginUser(userData)

localStorage.removeItem("tempUser")

toast.success("logged in")
window.location.href=redirect
}

return(
<div className="max-w-md mx-auto mt-10 space-y-4 bg-white p-6 rounded shadow">

<h1 className="text-2xl font-bold text-center">Login</h1>

<input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full border p-2"/>
<input type="password" placeholder="password" value={pass} onChange={e=>setPass(e.target.value)} className="w-full border p-2"/>

<button onClick={handleLogin} className="w-full bg-blue-600 text-white p-2">Login</button>

<button className="w-full border p-2" onClick={()=>toast("Google login simulated")}>
Login with Google
</button>

<p className="text-sm text-center">
Don’t have an account? <Link href="/register" className="text-blue-600">Register</Link>
</p>

</div>
)
}