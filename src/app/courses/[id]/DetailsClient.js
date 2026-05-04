"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { courses } from "@/data/courses";

export default function DetailsClient({ id }){

  const session = authClient.useSession();
  const user = session.data?.user;

  const router = useRouter();

  useEffect(()=>{
    if(session.isPending) return;

    if(!user){
      router.push(`/login?callbackURL=/courses/${id}`);
    }
  },[user, session.isPending]);

  if(session.isPending){
    return <div className="text-center py-20">Loading...</div>;
  }

  const course = courses.find(c => String(c.id) === String(id));

  if(!course){
    return <div className="text-center py-20">Course not found</div>;
  }

  return(
  <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">

    <img
      src={course.image}
      className="w-full h-72 object-cover rounded-lg"
    />

    <h1 className="text-3xl font-bold">{course.title}</h1>

    <p className="text-gray-600">{course.description}</p>

    <div className="flex gap-6 text-sm text-gray-500 border-t pt-4">

      <span>👨‍🏫 {course.instructor || "Unknown Instructor"}</span>
      <span>⏱ {course.duration || "3h"}</span>
      <span>⭐ {course.rating || "4.5"}</span>

    </div>

    <div>
      <h2 className="text-xl font-semibold mb-2">Course Curriculum</h2>

      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li>Introduction to the course</li>
        <li>Core concepts explained</li>
        <li>Hands-on project building</li>
        <li>Final review and practice</li>
      </ul>
    </div>

  </div>
)
}