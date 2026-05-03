"use client"
import {useState,useEffect} from "react"
import {useRouter} from "next/navigation"
import {getUser,loginUser} from "@/lib/auth"
import toast from "react-hot-toast"

export default function Update(){
const[user,setUser]=useState(null)
const[name,setName]=useState("")
const[image,setImage]=useState("")
const router=useRouter()
useEffect(()=>{
const u=getUser()
if(!u){
router.push("/login")
}else{
setUser(u)
setName(u.name||"")
setImage(u.image||"")
}
},[])
const handleUpdate=()=>{
const updated={
...user,
name,
image
}

loginUser(updated)
toast.success("updated")
window.location.href="/profile"
}

if(!user)return <div>loading...</div>
return(
<div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow space-y-4">

<h1 className="text-xl font-bold text-center">Update Info</h1>

<input value={name} onChange={e=>setName(e.target.value)} placeholder="name" className="w-full border p-2"/>
<input value={image} onChange={e=>setImage(e.target.value)} placeholder="image url" className="w-full border p-2"/>
<button onClick={handleUpdate} className="w-full bg-blue-600 text-white p-2">
Update Information
</button>

</div>
)
}