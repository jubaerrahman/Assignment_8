export default function TopInstructors(){
return(
<div className="max-w-6xl mx-auto px-4 py-10">

<h2 className="text-2xl font-bold mb-4">Top Instructors</h2>

<div className="grid md:grid-cols-4 gap-4">

<div className="bg-white p-4 shadow rounded text-center">
<img src="https://i.pravatar.cc/100?img=1" className="mx-auto rounded-full"/>
<h3 className="font-semibold mt-2">John Doe</h3>
</div>

<div className="bg-white p-4 shadow rounded text-center">
<img src="https://i.pravatar.cc/100?img=2" className="mx-auto rounded-full"/>
<h3 className="font-semibold mt-2">Jane Smith</h3>
</div>

<div className="bg-white p-4 shadow rounded text-center">
<img src="https://i.pravatar.cc/100?img=3" className="mx-auto rounded-full"/>
<h3 className="font-semibold mt-2">Rahim Uddin</h3>
</div>

<div className="bg-white p-4 shadow rounded text-center">
<img src="https://i.pravatar.cc/100?img=4" className="mx-auto rounded-full"/>
<h3 className="font-semibold mt-2">Alex</h3>
</div>

</div>
</div>
)
}