"use client"

import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProfilePage(){

  const session = authClient.useSession()
  const user = session.data?.user

  const router = useRouter()

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    if(session.isPending) return

    if(!user){
      setTimeout(()=>{
        router.push("/login")
      },0)
      return
    }

    setName(user.name || "")
    setImage(user.image || "")

  },[user, session.isPending])

  if(session.isPending){
    return <p className="text-center mt-10">Loading...</p>
  }

  if(!user){
    return <p className="text-center mt-10">Redirecting...</p>
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    setLoading(true)

    try{
      const res = await fetch("/api/auth/update-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          image
        })
      })

      const data = await res.json()

      setLoading(false)

      if(res.ok){
        alert("Profile updated successfully")
        window.location.reload()
      }else{
        console.log(data)
        alert("Update failed")
      }

    }catch(err){
      console.log(err)
      setLoading(false)
      alert("Something went wrong")
    }
  }

  return(
    <div className="max-w-md mx-auto mt-10 space-y-4 text-center">

      <img
        src={image || "https://i.pravatar.cc/100"}
        className="w-20 h-20 rounded-full mx-auto object-cover"
      />

      <form onSubmit={handleUpdate} className="space-y-3">

        <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="border w-full p-2 rounded"
          placeholder="Name"
        />

        <input
          value={image}
          onChange={(e)=>setImage(e.target.value)}
          className="border w-full p-2 rounded"
          placeholder="Image URL"
        />

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>

      </form>

    </div>
  )
}