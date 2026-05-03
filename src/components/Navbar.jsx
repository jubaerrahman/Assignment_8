"use client"
import Link from "next/link"
import {useEffect,useState} from "react"
import {getUser,logoutUser} from "@/lib/auth"

export default function Navbar(){

const[user,setUser]=useState(null)
const[open,setOpen]=useState(false)

useEffect(()=>{
setUser(getUser())
},[])

return(
<div className="bg-white shadow">

<div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

<h1 className="text-xl font-bold text-blue-600">SkillSphere</h1>

<button onClick={()=>setOpen(!open)} className="md:hidden text-2xl">
☰
</button>

<div className="hidden md:flex gap-6 items-center">

<Link href="/">Home</Link>
<Link href="/courses">Courses</Link>
<Link href="/profile">My Profile</Link>

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

{
open && (
<div className="md:hidden px-4 pb-4 space-y-3">

<Link href="/" onClick={()=>setOpen(false)} className="block">Home</Link>
<Link href="/courses" onClick={()=>setOpen(false)} className="block">Courses</Link>
<Link href="/profile" onClick={()=>setOpen(false)} className="block">My Profile</Link>

{
user?(
<>
<img src={user.image||"https://i.pravatar.cc/40"} className="w-8 h-8 rounded-full"/>
<button onClick={()=>{logoutUser();window.location.href="/"}} className="block bg-red-500 text-white px-3 py-1 rounded">Logout</button>
</>
):(
<>
<Link href="/login" onClick={()=>setOpen(false)} className="block border px-3 py-1 rounded">Login</Link>
<Link href="/register" onClick={()=>setOpen(false)} className="block bg-blue-600 text-white px-3 py-1 rounded">Register</Link>
</>
)
}

</div>
)
}

</div>
)
}