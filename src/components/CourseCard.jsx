"use client"
import Link from "next/link"

export default function CourseCard({course}){

return(
<div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-200 overflow-hidden">

<div className="h-40 sm:h-44 w-full overflow-hidden bg-gray-100">
<img src={course.image} className="w-full h-full object-cover"/>
</div>

<div className="p-4 space-y-2">

<h2 className="font-semibold text-base sm:text-lg">{course.title}</h2>

<p className="text-xs sm:text-sm text-gray-500">{course.instructor}</p>

<div className="flex justify-between text-xs sm:text-sm">
<span>⭐ {course.rating}</span>
<span>{course.level}</span>
</div>

<Link href={`/courses/${course.id}`}>
<button className="w-full bg-blue-600 text-white py-2 rounded-md mt-2 text-sm sm:text-base">View Details</button>
</Link>

</div>

</div>
)
}