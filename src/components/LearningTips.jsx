export default function LearningTips(){
return(
<div className="max-w-6xl mx-auto px-4 py-10">

<h2 className="text-2xl font-bold mb-4">Learning Tips</h2>

<div className="grid md:grid-cols-3 gap-4">

<div className="bg-white p-4 shadow rounded">
<h3 className="font-semibold">Study Techniques</h3>
<p className="text-sm text-gray-600">Break topics into smaller chunks and revise regularly.</p>
</div>

<div className="bg-white p-4 shadow rounded">
<h3 className="font-semibold">Time Management</h3>
<p className="text-sm text-gray-600">Use Pomodoro technique and track your progress.</p>
</div>

<div className="bg-white p-4 shadow rounded">
<h3 className="font-semibold">Consistency</h3>
<p className="text-sm text-gray-600">Practice daily to build strong fundamentals.</p>
</div>

</div>
</div>
)
}