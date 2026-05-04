import DetailsClient from "./DetailsClient"
import {courses} from "@/data/courses"

export async function generateStaticParams(){
  return courses.map(c => ({
    id: String(c.id)
  }))
}

export default async function Page({ params }) {
  const { id } = await params
  return <DetailsClient id={id} />
}