"use client"

import Image from "next/image"
import { Film, Award, Users, PlayCircle, Globe, BookOpen, Theater } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const notableDirections = [
  "Sita Ram",
  "Julius Caesar",
  "Ramleela",
  "As You Like It",
  "Dakshinayanam",
  "Bal Ramayanam",
  "King Lear",
  "Bhuvan Vijayam",
  "Vasudhaiva Kutumbakam",
  "The Merchant of Venice",
  "The Dark City",
  "Dakghar",
  "Next Generation",
  "Mandir",
  "Duvidha",
  "Doraemon's Hub",
  "Knotted Roots"
]

const pastProjects = [
  {
    title: "Patol Babu, Film Star",
    year: "2025",
    language: "Hindi"
  },
  {
    title: "Karma",
    year: "2025",
    language: "Kazakh"
  },
  {
    title: "As You Like It",
    year: "2025",
    language: "English"
  },
  {
    title: "The Blue Umbrella",
    year: "2025",
    language: "Punjabi & Hindi"
  }
]

const upcomingProjects = [
  {
    title: "Untitled English Play",
    type: "International Project",
    year: "2025"
  },
  {
    title: "Untitled Hindi Play",
    type: "National Project",
    year: "2026"
  },
  {
    title: "Untitled Play",
    type: "National Project",
    year: "2026"
  }
]

const languages = [
  "Hindi",
  "Maithili",
  "Telugu",
  "Punjabi",
  "English",
  "Kazakh",
  "Russian",
  "Mime"
]

export default function DirectorPortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/assets/banner.jpg" alt="Director at work" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">Directorial Projects</h1>
              <p className="text-2xl text-gray-200 mb-8">
                Kumar Sumitt: Two decades of artistic excellence in theatre direction and performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Kumar Sumitt, a specialist in acting, has devoted over two decades to performance on stage and screen. While acting remains his primary passion and area of expertise, he has also directed a wide range of theatre productions across India and internationally, reflecting his multifaceted artistic vision and strong leadership.
            </p>
            <p className="text-gray-700 mb-6">
              His directorial work spans multiple languages and styles, including Hindi, Maithili, Telugu, Punjabi, English, Kazakh, Russian, and Mime. These diverse projects not only showcase his creative versatility but also promote cross-cultural dialogue and artistic collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* International Productions Highlight */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">International Productions</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Sita Ram (2024)</h3>
              <p className="text-gray-700">
                Kumar Sumitt directed Ramayana, titled 'Sita Ram', in Kazakh and Russian at the Kazakh National Academy of Choreography, Astana, Kazakhstan. This ambitious international production served as a vibrant example of cultural exchange.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Karma (2025)</h3>
              <p className="text-gray-700">
                In March 2025, he visited the T.Z. Kazakh National Academy of Arts, Almaty, where he trained theatre students and directed 'Karma'—a powerful dramatic interpretation of the conversation between Krishna and Arjuna from the Indian epic Mahabharata, entirely performed in Kazakh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship & Vision */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Beyond the stage, Kumar Sumitt remains committed to mentoring the next generation of artists. His training and guidance extend to school students, university drama departments, and professional theatre groups across India and abroad. His mentorship is known for nurturing emerging talent and fostering transformative growth through the power of acting.
            </p>
            <p className="text-gray-700 mb-6">
              Through his global directorial ventures and deep commitment to acting, Kumar Sumitt continues to shape the future of theatre—positioning it as a powerful medium for storytelling, education, and cultural unity.
            </p>
          </div>
        </div>
      </section>

      {/* Notable Direction Projects */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Notable Direction Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {notableDirections.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-medium text-gray-800">{project}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent & Upcoming Projects */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Past Projects */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Past Directorial Projects</h2>
              <div className="space-y-4">
                {pastProjects.map((project, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.year} | {project.language}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Projects */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Upcoming Directorial Projects</h2>
              <div className="space-y-4">
                {upcomingProjects.map((project, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.type} | {project.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Directorial Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {languages.map((language, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <p className="text-lg font-medium text-gray-800">{language}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Recognition */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Institutional Recognition</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4">Indian Council for Cultural Relations (ICCR), Pune</h3>
              <p className="text-gray-600">Ministry of External Affairs, Government of India</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4">Swami Vivekananda Cultural Centre</h3>
              <p className="text-gray-600">Embassy of India, ICCR Astana, Kazakhstan</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
