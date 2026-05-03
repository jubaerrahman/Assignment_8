"use client"

import { Suspense } from "react"
import LoginContent from "./LoginContent"

export default function Page(){
return(
<Suspense fallback={<div className="text-center py-10">Loading...</div>}>
<LoginContent/>
</Suspense>
)
}