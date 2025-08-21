"use client"

import Image from "next/image"
import { Film, Award, Users, PlayCircle, Globe, BookOpen, Theatre } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { stage } from "@/data/stage"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog.jsx"
import { ExternalLink, X } from "lucide-react"

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
    title: "English Play",
    type: "International Project",
    year: "2025"
  },
  {
    title: "Hindi Play",
    type: "National Project",
    year: "2026"
  },
  {
    title: "Play",
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
  const [searchTerm, setSearchTerm] = useState("")
  const [filterLanguage, setFilterLanguage] = useState("")
  const [filterYear, setFilterYear] = useState("")

  const languages = [...new Set(stage.map(work => work.language))].sort()
  const years = [...new Set(stage.map(work => work.year))].sort()

  const filteredExperience = stage.filter(work => {
    const matchesSearch = searchTerm === "" || 
      work.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      work.playwright.toLowerCase().includes(searchTerm.toLowerCase()) ||
      work.character.toLowerCase().includes(searchTerm.toLowerCase()) ||
      work.organization.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesLanguage = filterLanguage === "" || work.language === filterLanguage
    const matchesYear = filterYear === "" || work.year === filterYear

    return matchesSearch && matchesLanguage && matchesYear
  })

  const totalShows = stage.length
  const uniqueLanguages = new Set(stage.map(work => work.language)).size
  const uniqueOrganizations = new Set(stage.map(work => work.organization)).size
  const directedShows = stage.filter(work => work.character === "Direction").length
  const actedShows = stage.filter(work => work.character !== "Direction").length

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/113.JPG" alt="Director at work" fill className="object-cover" />
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
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-800">International Productions</h2>
            <Dialog className="mt-50">
              <DialogTrigger asChild>
                <button 
                  type="button"
                  className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium text-sm transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Directorial Works
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[85vw] w-full max-h-[85vh] p-6 overflow-hidden bg-white mt-11">
                <DialogHeader className="mb-6 sticky top-0 bg-white z-50 pb-4 border-b">
                  <DialogTitle className="text-2xl font-bold text-gray-900">Complete Stage Performance History</DialogTitle>
                  <DialogClose className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                </DialogHeader>
                
                <div className="overflow-y-auto max-h-[calc(85vh-10rem)]">
                  {/* Statistics Summary */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-green-600">{totalShows}</div>
                      <div className="text-sm text-gray-600 mt-1">Total Shows</div>
                    </div>
                    
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-green-600">{uniqueOrganizations}</div>
                      <div className="text-sm text-gray-600 mt-1">Organizations</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-green-600">{directedShows}</div>
                      <div className="text-sm text-gray-600 mt-1">Shows Directed</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-green-600">{actedShows}</div>
                      <div className="text-sm text-gray-600 mt-1">Shows Acted</div>
                    </div>
                  </div>

                  {/* Filters */}
                  <div className="flex flex-col md:flex-row gap-3 mb-6 p-4 bg-white border rounded-xl shadow-sm">
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-gray-700 mb-1">Search</label>
                      <input
                        type="text"
                        placeholder="Search shows, playwrights, characters..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Year</label>
                      <select
                        value={filterYear}
                        onChange={(e) => setFilterYear(e.target.value)}
                        className="w-full md:w-48 px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                      >
                        <option value="">All Years</option>
                        {years.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="relative rounded-xl border shadow-sm">
                    <div className="overflow-x-auto -mx-6 md:mx-0">
                      <div className="inline-block min-w-full align-middle">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">S.No.</th>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Name of Play/Show</th>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Language</th>
                              <th scope="col" className="hidden md:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Playwright/Story</th>
                              <th scope="col" className="hidden md:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Character</th>
                              <th scope="col" className="hidden md:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Direction</th>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Year</th>
                              <th scope="col" className="hidden md:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Organisation/Place</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {filteredExperience.map((work, index) => (
                              <tr key={work.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{work.id}</td>
                                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                  <div className="flex flex-col">
                                    <span className="whitespace-nowrap">{work.name}</span>
                                    <span className="md:hidden text-xs text-gray-500 mt-1">{work.playwright}</span>
                                    <span className="md:hidden text-xs text-gray-500">{work.character}</span>
                                    <span className="md:hidden text-xs text-gray-500">{work.organization}</span>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{work.language}</td>
                                <td className="hidden md:table-cell px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{work.playwright}</td>
                                <td className="hidden md:table-cell px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{work.character}</td>
                                <td className="hidden md:table-cell px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{work.direction}</td>
                                <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{work.year}</td>
                                <td className="hidden md:table-cell px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{work.organization}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
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
