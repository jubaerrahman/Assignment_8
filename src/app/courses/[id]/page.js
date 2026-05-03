"use client"

import {useEffect,useState} from "react"
import {useRouter} from "next/navigation"
import {authClient} from "@/lib/auth-client"
import {courses} from "@/data/courses"
import Loader from "@/components/Loader"

export default function Details({params}){

const[user,setUser]=useState(null)
const router=useRouter()

useEffect(()=>{
authClient.getSession().then(res=>{
if(!res?.user){
router.push(`/login?redirect=/courses/${params.id}`)
}else{
setUser(res.user)
}
})
},[])

if(!user)return <Loader/>

const course=courses.find(c=>c.id==params.id)

if(!course)return <div>not found</div>

return(
<div className="space-y-4">

<h1 className="text-2xl font-bold">{course.title}</h1>

<p className="text-gray-600">{course.description}</p>

<h2 className="text-xl font-semibold">Course Curriculum</h2>

<ul className="list-disc pl-5 space-y-1">
<li>Introduction</li>
<li>Core Concepts</li>
<li>Hands-on Project</li>
<li>Final Review</li>
</ul>

</div>
)
}