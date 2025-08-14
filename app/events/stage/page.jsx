"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play, Calendar, MapPin, Clock, User, ExternalLink, Star, Trophy, Globe, X } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog.jsx"
import { stage } from "@/data/stage"

const genres = [
  "Realistic",
  "Classical", 
  "Farce",
  "Experimental",
  "Mime",
  "Dance Drama"
]

const notablePerformances = [
  {
    id: 1,
    title: "Court Martial",
    genre: "Drama",
    description: "A powerful courtroom drama exploring justice and moral dilemmas within military frameworks.",
    image: "/stage-court-martial.png",
  },
  {
    id: 2,
    title: "Mrichchhakatik",
    genre: "Classical",
    description: "A Sanskrit classic exploring themes of love, sacrifice, and social justice.",
    image: "/stage-mrichchhakatik.png",
  },
  {
    id: 3,
    title: "Dakghar",
    genre: "Drama",
    description: "Rabindranath Tagore's poignant tale of a young boy's yearning for freedom.",
    image: "/stage-dakghar.png",
  },
  {
    id: 4,
    title: "The Caucasian Chalk Circle",
    genre: "Classical",
    description: "Bertolt Brecht's epic drama about justice, motherhood, and moral choices.",
    image: "/stage-caucasian-chalk.png",
  },
  {
    id: 5,
    title: "Gabarghichor",
    genre: "Comedy",
    description: "A delightful comedy showcasing wit and humor in traditional storytelling.",
    image: "/stage-gabarghichor.png",
  },
  {
    id: 6,
    title: "Gonu Jha urf Gyan Jha",
    genre: "Folk Comedy",
    description: "A folk comedy celebrating the wit and wisdom of the legendary character Gonu Jha.",
    image: "/stage-gonu-jha.png",
  },
  {
    id: 7,
    title: "Rakt Kalyan",
    genre: "Drama",
    description: "An intense drama exploring themes of sacrifice and social transformation.",
    image: "/stage-rakt-kalyan.png",
  },
  {
    id: 8,
    title: "Janwasa",
    genre: "Social Drama",
    description: "A compelling narrative about community, belonging, and human connections.",
    image: "/stage-janwasa.png",
  },
  {
    id: 9,
    title: "Vaidiki Hinsa Hinsa Na Bhavati",
    genre: "Philosophical",
    description: "A thought-provoking exploration of violence, morality, and ancient wisdom.",
    image: "/stage-vaidiki-hinsa.png",
  },
  {
    id: 10,
    title: "Gadhe Ki Baraat",
    genre: "Satire",
    description: "A satirical comedy that holds up a mirror to society's absurdities.",
    image: "/stage-gadhe-baraat.png",
  },
  {
    id: 11,
    title: "Beyond the Sound",
    genre: "Experimental",
    description: "An innovative experimental piece pushing the boundaries of theatrical expression.",
    image: "/stage-beyond-sound.png",
  },
  {
    id: 12,
    title: "Andhvishvas",
    genre: "Social Drama",
    description: "A powerful drama challenging superstitions and promoting rational thinking.",
    image: "/stage-andhvishvas.png",
  },
  {
    id: 13,
    title: "Adbhut Saiyog",
    genre: "Drama",
    description: "A fascinating tale of extraordinary coincidences and human destiny.",
    image: "/stage-adbhut-saiyog.png",
  },
  {
    id: 14,
    title: "Supna Ka Sapna",
    genre: "Fantasy Drama",
    description: "A dreamlike journey through imagination and reality, blending fantasy with profound insights.",
    image: "/stage-supna-sapna.png",
  },
  {
    id: 15,
    title: "Ma Pravish",
    genre: "Drama",
    description: "An intimate drama exploring maternal relationships and emotional depths.",
    image: "/stage-ma-pravish.png",
  },
  {
    id: 16,
    title: "Kathak Lok",
    genre: "Dance Drama",
    description: "A mesmerizing blend of classical Kathak dance and dramatic storytelling.",
    image: "/stage-kathak-lok.png",
  },
  {
    id: 17,
    title: "Lodhanath",
    genre: "Historical Drama",
    description: "A historical drama bringing to life the tales of legendary characters.",
    image: "/stage-lodhanath.png",
  },
]

const workExperience = stage

const pastPerformances = [
  {
    id: 1,
    title: "Supna Ka Sapna",
    venue: "JNU Delhi",
    location: "New Delhi",
    type: "University Performance",
    description: "A captivating performance that mesmerized the academic audience with its innovative storytelling.",
    image: "/stage-supna-sapna-jnu.png",
  },
  {
    id: 2,
    title: "Mime Shows",
    venue: "Various Venues",
    location: "Patna",
    type: "Mime Performance",
    description: "Silent storytelling that spoke volumes, connecting with audiences through pure expression.",
    image: "/stage-mime-patna.png",
  },
  {
    id: 3,
    title: "Biniya",
    venue: "Cultural Centers",
    location: "Patna",
    type: "Maithili Drama",
    description: "A regional masterpiece performed in Maithili, celebrating local culture and traditions.",
    image: "/stage-biniya-maithili.png",
  },
]

const upcomingShows = [
  {
    show: "Mime Show",
    dates: "2024 - 2025",
    venue: "International Venues",
    city: "Global",
    status: "In Development",
  },
  {
    show: "Stage Play (Hindi & Maithili)",
    dates: "2024 - 2025",
    venue: "National Theaters",
    city: "Multiple Cities",
    status: "Pre-Production",
  },
  {
    show: "Solo Show (Multilingual)",
    dates: "2024 - 2025",
    venue: "Cultural Centers",
    city: "National Tour",
    status: "Conceptualization",
  },
]

const highlights = [
  {
    icon: <Star className="h-8 w-8" />,
    title: "Captivating Performances",
    description: "Each performance is crafted to engage and mesmerize audiences, leaving lasting impressions."
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: "Tradition & Innovation",
    description: "A unique blend of traditional theatrical techniques with modern innovative approaches."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Reach",
    description: "Mesmerizing audiences across different cultures and geographical boundaries."
  }
]

export default function StageShowsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterLanguage, setFilterLanguage] = useState("")
  const [filterYear, setFilterYear] = useState("")

  // Get unique languages and years for filters
  const languages = [...new Set(workExperience.map(work => work.language))].sort()
  const years = [...new Set(workExperience.map(work => work.year))].sort()

  // Filter work experience based on search and filters
  const filteredExperience = workExperience.filter(work => {
    const matchesSearch = searchTerm === "" || 
      work.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      work.playwright.toLowerCase().includes(searchTerm.toLowerCase()) ||
      work.character.toLowerCase().includes(searchTerm.toLowerCase()) ||
      work.organization.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesLanguage = filterLanguage === "" || work.language === filterLanguage
    const matchesYear = filterYear === "" || work.year === filterYear

    return matchesSearch && matchesLanguage && matchesYear
  })

  // Calculate statistics
  const totalShows = workExperience.length
  const uniqueLanguages = new Set(workExperience.map(work => work.language)).size
  const uniqueOrganizations = new Set(workExperience.map(work => work.organization)).size
  const directedShows = workExperience.filter(work => work.character === "Direction").length
  const actedShows = workExperience.filter(work => work.character !== "Direction").length

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("/hero/b1.webp")`,
              backgroundRepeat: "no-repeat",
            }}
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Link href="/events" className="flex items-center text-white hover:text-gray-200 mr-4">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Events
            </Link>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Stage Shows</h1>
          <p className="text-xl text-gray-200 mb-4">
            Experience the power of performance through Kumar Sumitt's diverse repertoire of plays across genres.
          </p>
          <div className="flex flex-wrap gap-3">
            {genres.map((genre, index) => (
              <span key={index} className="bg-green-500 bg-opacity-20 text-green-200 px-4 py-2 rounded-full text-sm font-medium">
                {genre}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Performance Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Performances Section */}
      <section className="py-16 px-4 bg-gray-50 z-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Notable Performances</h2>
            <Dialog className="mt-50">
              <DialogTrigger asChild>
                <button 
                  type="button"
                  className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium text-sm transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  See All Performances
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[85vw] w-full max-h-[85vh] p-6 overflow-hidden bg-white mt-11">
                <DialogHeader className="mb-6 sticky top-0 bg-white z-50 pb-4 border-b">
                  <DialogTitle className="text-2xl font-bold text-gray-900">Complete Performance History</DialogTitle>
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
                    {/* <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-green-600">{uniqueLanguages}</div>
                      <div className="text-sm text-gray-600 mt-1">Languages</div>
                    </div> */}
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
                        <div className="absolute left-0 right-0 bottom-0 h-16 pointer-events-none bg-gradient-to-l from-gray-100 via-transparent to-transparent md:hidden" aria-hidden="true"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 text-sm text-gray-500 bg-gray-50 rounded-xl">
                    <p className="font-medium mb-2">Note:</p>
                    <p className="leading-relaxed">
                      These are selected projects of Kumar Sumitt as an Actor and Director. Additionally, he has performed in numerous street plays (approximately 1500 shows) addressing various social issues including child labor, poverty, human trafficking, child marriage, dowry, women empowerment, and cleanliness with reputed organizations. He has also performed as a lead role in several music video albums (2008-09) and acted in several short films and documentaries for DD Bharti.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Notable Performances Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">S.No.</th>
                    <th className="px-6 py-4 text-left font-semibold">Title</th>
                    <th className="px-6 py-4 text-left font-semibold">Genre</th>
                    <th className="px-6 py-4 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {notablePerformances.map((performance, index) => (
                    <tr key={performance.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-600 font-medium">{performance.id}</td>
                      <td className="px-6 py-4 font-medium text-gray-800">{performance.title}</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {performance.genre}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm max-w-md">{performance.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Past Performances */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Past Performances</h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">S.No.</th>
                    <th className="px-6 py-4 text-left font-semibold">Title</th>
                    <th className="px-6 py-4 text-left font-semibold">Venue</th>
                    <th className="px-6 py-4 text-left font-semibold">Location</th>
                    <th className="px-6 py-4 text-left font-semibold">Type</th>
                    <th className="px-6 py-4 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {pastPerformances.map((performance, index) => (
                    <tr key={performance.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-600 font-medium">{performance.id}</td>
                      <td className="px-6 py-4 font-medium text-gray-800">{performance.title}</td>
                      <td className="px-6 py-4 text-gray-600">{performance.venue}</td>
                      <td className="px-6 py-4 text-gray-600">{performance.location}</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {performance.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm max-w-md">{performance.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Upcoming Shows</h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Show</th>
                    <th className="px-6 py-4 text-left font-semibold">Dates</th>
                    <th className="px-6 py-4 text-left font-semibold">Venue</th>
                    <th className="px-6 py-4 text-left font-semibold">City</th>
                    <th className="px-6 py-4 text-left font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingShows.map((show, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-800">{show.show}</td>
                      <td className="px-6 py-4 text-gray-600">{show.dates}</td>
                      <td className="px-6 py-4 text-gray-600">{show.venue}</td>
                      <td className="px-6 py-4 text-gray-600">{show.city}</td>
                      <td className="px-6 py-4">
                        <span className="text-gray-500 text-sm">{show.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
