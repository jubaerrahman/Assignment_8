import {courses} from "@/data/courses"
import CourseCard from "@/components/CourseCard"

export default function Home(){

const topCourses=[...courses].sort((a,b)=>b.rating-a.rating).slice(0,3)
const trending=courses.slice(3,6)

return(
<div className="space-y-10">

<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Upgrade Your Skills 🚀</h1>

<div>
<h2 className="text-xl sm:text-2xl font-semibold mb-4">Popular Courses</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
{topCourses.map(c=><CourseCard key={c.id} course={c}/>)}
</div>
</div>

<div>
<h2 className="text-xl sm:text-2xl font-semibold mb-4">Trending Courses</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
{trending.map(c=><CourseCard key={c.id} course={c}/>)}
</div>
</div>

</div>
)
}