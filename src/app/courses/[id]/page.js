"use client"
import {useEffect,useState} from "react"
import {useRouter,useParams} from "next/navigation"
import {getUser} from "@/lib/auth"
import {courses} from "@/data/courses"
import Loader from "@/components/Loader"
import {notFound} from "next/navigation"

export default function Details(){

const[user,setUser]=useState(null)
const[loading,setLoading]=useState(true)

const router=useRouter()
const params=useParams()
const id=params?.id

useEffect(()=>{
if(!id) return

const u=getUser()

if(!u){
router.push(`/login?redirect=/courses/${id}`)
}else{
setUser(u)
setLoading(false)
}
},[id])

if(loading) return <Loader/>

const course = courses.find(c=>String(c.id)===String(id))

if(!course){
notFound()
}

return(
<div className="max-w-4xl mx-auto px-4 py-10 space-y-4">

<img src={course.image} className="w-full h-64 object-cover rounded"/>

<h1 className="text-2xl font-bold">{course.title}</h1>

<p className="text-gray-600">{course.description}</p>

<div className="flex gap-4 text-sm text-gray-500">
<span>Instructor: {course.instructor}</span>
<span>Duration: {course.duration}</span>
<span>⭐ {course.rating}</span>
</div>

<h2 className="text-xl font-semibold mt-4">Course Curriculum</h2>

<ul className="list-disc pl-5 space-y-1">
<li>Introduction to the course</li>
<li>Core concepts explained</li>
<li>Hands-on project building</li>
<li>Final review and practice</li>
</ul>

</div>
)
}