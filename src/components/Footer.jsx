import Link from "next/link"

export default function Footer(){
return(
<div className="bg-gray-900 text-gray-300 mt-10">
<div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 text-center md:text-left">

<div>
<h1 className="text-white font-bold text-lg">SkillSphere</h1>
<p>Contact: skillsphere@gmail.com</p>
</div>

<div className="space-y-2">
<Link href="#" className="block hover:text-white">Privacy Policy</Link>
<Link href="#" className="block hover:text-white">Terms & Conditions</Link>
</div>

<div className="flex justify-center md:justify-start gap-4">
<span>🌐</span>
<span>📘</span>
<span>🐦</span>
</div>

</div>
</div>
)
}