"use client"
import Link from "next/link"

export default function Navbar(){

const user=null

return(
<div className="bg-white shadow-md">
<div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3">

<div className="flex justify-between items-center">
<h1 className="text-xl md:text-2xl font-bold text-blue-600">SkillSphere</h1>
</div>

<div className="flex flex-wrap gap-4 md:gap-6 text-gray-700 font-medium text-sm md:text-base">
<Link href="/">Home</Link>
<Link href="/courses">Courses</Link>
<Link href="/profile">My Profile</Link>
</div>

<div className="flex gap-2 md:gap-3 items-center">
{
user?(
<>
<img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full"/>
<button className="bg-red-500 text-white px-3 py-1 rounded text-sm">Logout</button>
</>
):(
<>
<Link href="/login" className="px-3 py-1 border rounded text-sm">Login</Link>
<Link href="/register" className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Register</Link>
</>
)
}
</div>

</div>
</div>
)
}