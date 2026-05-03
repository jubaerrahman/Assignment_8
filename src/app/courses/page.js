"use client"

import {useState} from "react"
import {courses} from "@/data/courses"
import CourseCard from "@/components/CourseCard"

export default function Courses(){

const[search,setSearch]=useState("")

const filteredCourses=courses.filter(c=>
c.title.toLowerCase().includes(search.toLowerCase())
)

return(
    
<div className="max-w-6xl mx-auto px-4 py-10">
    

<h1 className="text-2xl font-bold mb-6">All Courses</h1>

<input
type="text"
placeholder="Search courses..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="w-full md:w-1/2 border p-2 rounded mb-6"
/>

<div className="grid md:grid-cols-3 gap-6">
{
filteredCourses.length>0?
filteredCourses.map(c=>(
<CourseCard key={c.id} course={c}/>
))
:
<p className="col-span-full text-center text-gray-500">
No courses found
</p>
}
</div>

</div>
)
}