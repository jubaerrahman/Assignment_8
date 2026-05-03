import Link from "next/link"

export default function Footer(){
return(
<footer className="bg-gray-900 text-gray-300 mt-10">

<div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

<div>
<h1 className="text-white text-xl font-bold mb-2">SkillSphere</h1>
<p className="text-sm">Learn new skills from industry experts.</p>
<p className="text-sm mt-2">Contact: skillsphere@gmail.com</p>
</div>

<div>
<h2 className="text-white font-semibold mb-2">Links</h2>
<ul className="space-y-1 text-sm">
<li><Link href="/">Home</Link></li>
<li><Link href="/courses">Courses</Link></li>
<li><Link href="/profile">My Profile</Link></li>
</ul>
</div>

<div>
<h2 className="text-white font-semibold mb-2">Legal</h2>
<ul className="space-y-1 text-sm">
<li><Link href="#">Privacy Policy</Link></li>
<li><Link href="#">Terms & Conditions</Link></li>
</ul>
</div>

<div>
<h2 className="text-white font-semibold mb-2">Follow Us</h2>

<div className="flex gap-4 text-xl">

<a href="https://facebook.com" target="_blank">🔵</a>
<a href="https://twitter.com" target="_blank">🐦</a>
<a href="https://linkedin.com" target="_blank">💼</a>
<a href="https://instagram.com" target="_blank">📸</a>

</div>

</div>

</div>

<div className="border-t border-gray-700 text-center py-4 text-sm">
© 2026 SkillSphere. All rights reserved.
</div>

</footer>
)
}