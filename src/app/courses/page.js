import {courses} from "@/data/courses"
import CourseCard from "@/components/CourseCard"

export default function Courses(){

return(
<div className="max-w-6xl mx-auto px-4 py-10">

<h1 className="text-2xl font-bold mb-6">All Courses</h1>

<div className="grid md:grid-cols-3 gap-6">
{
courses.map(c=>(
<CourseCard key={c.id} course={c}/>
))
}
</div>

</div>
)
}