import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Toaster } from "react-hot-toast"

export const metadata={title:"SkillSphere",description:"Online learning platform"}

export default function RootLayout({children}){
return(
<html lang="en">
<body className="min-h-screen flex flex-col bg-gray-50">

<Navbar/>
<Toaster/>

<main className="flex-1 max-w-6xl mx-auto w-full px-3 sm:px-4 md:px-6 py-6 md:py-8">
{children}
</main>

<Footer/>

</body>
</html>
)
}