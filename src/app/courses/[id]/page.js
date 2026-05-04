export const dynamic = "force-dynamic"

import {courses} from "@/data/courses"
import DetailsClient from "./DetailsClient"
import { notFound } from "next/navigation"

export default async function Page({ params }) {

const { id } = await params

const course = courses.find(c => Number(c.id) === Number(id))

if(!course){
  notFound()   // ✅ SERVER SAFE
}

return <DetailsClient id={id} />
}