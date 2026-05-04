import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "SkillSphere",
  description: "Online Learning Platform",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
      <body>

        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>
        <Footer/>

      </body>
    </html>
  )
}