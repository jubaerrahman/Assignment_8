"use client"

import {useState} from "react"
import {courses} from "@/data/courses"
import CourseCard from "@/components/CourseCard"

export default function Courses(){

const[search,setSearch]=useState("")

const filtered=courses.filter(c=>c.title.toLowerCase().includes(search.toLowerCase()))

return(
<div className="space-y-6">

<h1 className="text-2xl sm:text-3xl font-bold">All Courses</h1>

<input type="text" placeholder="Search courses..." value={search} onChange={(e)=>setSearch(e.target.value)} className="w-full sm:w-2/3 md:w-1/2 border px-4 py-2 rounded"/>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
{
filtered.length>0?
filtered.map(c=><CourseCard key={c.id} course={c}/>)
:
<p className="text-gray-500 col-span-full text-center">No courses found</p>
}
</div>

</div>
)
}