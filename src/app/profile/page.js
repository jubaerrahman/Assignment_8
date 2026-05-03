"use client"
import {useEffect,useState} from "react"
import {useRouter} from "next/navigation"
import {getUser} from "@/lib/auth"
import Link from "next/link"
import Loader from "@/components/Loader"

export default function Profile(){
const[user,setUser]=useState(null)
const router=useRouter()

useEffect(()=>{
const u=getUser()
if(!u){
router.push("/login?redirect=/profile")
}else{
setUser(u)
}
},[])

if(!user)return <Loader/>
return(
<div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow space-y-4 text-center">

<img src={user.image || "https://i.pravatar.cc/100"} className="w-20 h-20 rounded-full mx-auto"/>
<h1 className="text-xl font-bold">{user.name}</h1>
<p className="text-gray-600">{user.email}</p>

<Link href="/profile/update" className="block bg-blue-600 text-white py-2 rounded">
Update Info
</Link>

</div>
)
}