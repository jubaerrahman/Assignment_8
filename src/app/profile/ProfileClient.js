"use client"

import {useEffect,useState} from "react"
import {useRouter} from "next/navigation"
import {authClient} from "@/lib/auth-client"
import Loader from "@/components/Loader"
import toast from "react-hot-toast"

export default function ProfileClient(){

const[user,setUser]=useState(null)
const[loading,setLoading]=useState(true)

const[name,setName]=useState("")
const[image,setImage]=useState("")

const router=useRouter()

useEffect(()=>{
authClient.getSession().then(res=>{
if(!res?.data?.user){
router.push("/login?redirect=/profile")
}else{
const u=res.data.user
setUser(u)
setName(u.name || "")
setImage(u.image || "")
setLoading(false)
}
})
},[])

if(loading) return <Loader/>

const handleUpdate=async()=>{
try{
await authClient.updateUser({
name,
image
})
toast.success("Profile updated")
}catch{
toast.error("Update failed")
}
}

return(
<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow space-y-4">

<h1 className="text-2xl font-bold text-center">My Profile</h1>

<img src={user.image || "https://i.pravatar.cc/100"} className="w-20 h-20 rounded-full mx-auto"/>

<p className="text-center font-medium">{user.email}</p>

<input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full border p-2"/>
<input value={image} onChange={e=>setImage(e.target.value)} placeholder="Image URL" className="w-full border p-2"/>

<button onClick={handleUpdate} className="w-full bg-blue-600 text-white py-2 rounded">
Update Profile
</button>

</div>
)
}