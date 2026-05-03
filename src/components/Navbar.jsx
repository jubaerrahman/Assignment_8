"use client"
import Link from "next/link"
import {useEffect,useState} from "react"
import {getUser,logoutUser} from "@/lib/auth"

export default function Navbar(){

const[user,setUser]=useState(null)

useEffect(()=>{
setUser(getUser())
},[])

return(
<div className="bg-white shadow">
<div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

<h1 className="text-xl font-bold text-blue-600">SkillSphere</h1>

<div className="flex gap-4">
<Link href="/">Home</Link>
<Link href="/courses">Courses</Link>
<Link href="/profile">My Profile</Link>
</div>

<div className="flex items-center gap-3">
{
user?(
<>
<img src={user.image||"https://i.pravatar.cc/40"} className="w-8 h-8 rounded-full"/>
<button onClick={()=>{logoutUser();window.location.href="/"}} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
</>
):(
<>
<Link href="/login" className="px-3 py-1 border rounded">Login</Link>
<Link href="/register" className="px-3 py-1 bg-blue-600 text-white rounded">Register</Link>
</>
)
}
</div>

</div>
</div>
)
}