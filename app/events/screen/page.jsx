"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play, Calendar, Clock, User, ExternalLink, Film, Tv, X } from "lucide-react"
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

const featuredProject = {
  title: "Marriage: A Story of Kusum Keshav Malhotra",
  category: "Upcoming Film",
  description: 
    "A compelling narrative that explores the intricacies of modern relationships through the lens of tradition and contemporary values. Kumar Sumitt brings depth and authenticity to this socially conscious story.",
  releaseDate: "2026",
  platform: "Film Festivals & Theatrical Release",
  duration: "Coming Soon",
  director: "Coming Soon",
  genre: "Short Film",
  image: "/coming.jpg", // Update with actual image when available
}

const screenProjects = [
  {
    id: 0,
    title: "The blue umbrella",
    year: "2023",
    type: "Short Film",
    description: "A powerful Hindi short film showcasing resilience and determination.",
    platform: "Short Film",
    role: "Lead Actor",
    iframe: "https://www.youtube.com/embed/auO53iCgYK0?si=7TNtCOewIFwAXTF-",
    image: "/placeholder.svg",
  },
  {
    id: 1,
    title: "GUSTO Part 2",
    year: "2023",
    type: "Short Film",
    description: "A powerful Hindi short film showcasing resilience and determination.",
    platform: "Short Film",
    role: "Lead Actor",
    iframe: "https://www.youtube.com/embed/WqupanpPDiM?si=3OdvLsfs3AYkp6ya",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Mime | मूकाभिनय | Bhangima",
    year: "2022",
    type: "Short Film",
    description: "A powerful Hindi short film showcasing resilience and determination.",
    platform: "Short Film",
    role: "Lead Actor",
    iframe: "https://www.youtube.com/embed/CjPWxTa0Yv0?si=TMB2EtB4XB-t24JU",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Supna Ka Sapna",
    year: "2021",
    type: "Short Film",
    description: "A powerful Hindi short film showcasing resilience and determination.",
    platform: "Short Film",
    role: "Lead Actor",
    iframe: "https://www.youtube.com/embed/wx-xLWNFM2U?si=J4LzTQ8cHdYNMskx",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Struggle Don't Quit",
    year: "2019",
    type: "Short Film",
    description: "A powerful Hindi short film showcasing resilience and determination.",
    platform: "Film Festivals",
    role: "Lead Actor",
    iframe: "https://www.youtube.com/embed/h58awH_s37s?si=EVB1yxuzqajaLgYy",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Litti-Chokha: Yaaron Ke Sang",
    year: "2018",
    type: "Short Film",
    description: "A heartwarming Hindi short film about friendship and cultural bonds.",
    platform: "Film Festivals",
    role: "Lead Actor",
    iframe: "https://www.youtube.com/embed/-FKP9QhbxKo?si=HDzXsMxzRGhP4Ocv",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Jhol",
    year: "2013",
    type: "Video Film",
    description: "A compelling Hindi video film showcasing dramatic storytelling.",
    platform: "Digital Release",
    role: "Lead Actor",
    iframe: "https://www.youtube.com/embed/VIDEO_ID_8?si=example8",
    image: "/placeholder.svg",
  },
  {
    id: 7,
    title: "Development of Bihar",
    year: "2010",
    type: "Documentary",
    description: "A documentary highlighting the progress and potential of Bihar.",
    platform: "Documentary Circuits",
    role: "Narrator",
    iframe: "https://www.youtube.com/embed/VIDEO_ID_8?si=example8",
    image: "/placeholder.svg",
  },
  {
    id: 8,
    title: "Two Faces",
    year: "2009",
    type: "Short Film",
    description: "A thought-provoking Hindi short film exploring duality.",
    platform: "Film Festivals",
    role: "Lead Actor",
    iframe: "https://www.youtube.com/embed/VIDEO_ID_8?si=example8",
    image: "/placeholder.svg",
  },
]

const musicVideos = [
  {
    id: 1,
    title: "Kajra Ba Katar Goraki",
    year: "2009",
    language: "Bhojpuri",
    type: "Music Video",
    description: "A vibrant Bhojpuri music video showcasing cultural rhythms and performances.",
    platform: "Music Channels",
    role: "Lead Performer",
    iframe: "https://www.youtube.com/embed/HQmghIEvAxk?si=GA_ZEg2i1dwYOybX",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Bhajnawali",
    year: "2008",
    language: "Bhojpuri",
    type: "Music Video",
    description: "Traditional Bhojpuri devotional music presentation.",
    platform: "Music Channels",
    role: "Lead Performer",
    iframe: "https://www.youtube.com/embed/HQmghIEvAxk?si=GA_ZEg2i1dwYOybX",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Mai Baghwa Pe Bhaili Sawar",
    year: "2008",
    language: "Bhojpuri",
    type: "Music Video",
    description: "Folk-inspired Bhojpuri music performance.",
    platform: "Music Channels",
    role: "Lead Performer",
    iframe: "https://www.youtube.com/embed/HQmghIEvAxk?si=GA_ZEg2i1dwYOybX",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Fair Lovely Lagala",
    year: "2008",
    language: "Bhojpuri",
    type: "Music Video",
    description: "Contemporary Bhojpuri entertainment music video.",
    platform: "Music Channels",
    role: "Lead Performer",
    iframe: "https://www.youtube.com/embed/HQmghIEvAxk?si=GA_ZEg2i1dwYOybX",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Na Goriya Ke Aawe Sharam",
    year: "2008",
    language: "Bhojpuri",
    type: "Music Video",
    description: "Popular Bhojpuri music video with cultural elements.",
    platform: "Music Channels",
    role: "Lead Performer",
    iframe: "https://www.youtube.com/embed/HQmghIEvAxk?si=GA_ZEg2i1dwYOybX",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Mai Doctorni Mai Masterni",
    year: "2008",
    language: "Bhojpuri",
    type: "Music Video",
    description: "Entertaining Bhojpuri music video with social message.",
    platform: "Music Channels",
    role: "Lead Performer",
    iframe: "https://www.youtube.com/embed/HQmghIEvAxk?si=GA_ZEg2i1dwYOybX",
    image: "/placeholder.svg",
  },
]

const tvInterviews = [
  {
    id: 1,
    title: "Udan Show",
    year: "2024",
    type: "Television Interview",
    description: "In-depth conversation about recent projects and artistic journey.",
    channel: "Doordarshan",
    language: "Hindi",
    iframe: "https://www.youtube.com/embed/4JdWsy6bDSo?si=5qJU97C6urV72vaV",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Killol Show",
    year: "2019",
    type: "Television Interview",
    description: "Exploring the journey in performing arts and cinema.",
    channel: "Doordarshan",
    language: "Hindi",
    iframe: "https://www.youtube.com/embed/Rz8x9ebfc1I?si=z4Uv7cfkosUjDUq9",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Bihar Bihan Show",
    year: "2018",
    type: "Television Interview",
    description: "Conversation about regional cinema and cultural impact.",
    channel: "Doordarshan",
    language: "Hindi",
    iframe: "https://www.youtube.com/embed/_7TqUuYdX_E?si=2aDM6ZFUZBpKBJTM",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Bihar Bihan Show",
    year: "2018",
    type: "Television Interview",
    description: "Conversation about regional cinema and cultural impact.",
    channel: "Doordarshan",
    language: "Hindi",
    iframe: "https://www.youtube.com/embed/Xbj1w2z938Q?si=fo7FaizYe10Jmaj3",
    image: "/placeholder.svg",
  },
]

const upcomingReleases = [
  {
    title: "Marriage: A Story of Kusum Keshav Malhotra",
    releaseDate: "2026",
    platform: "Film Festivals",
    type: "Hindi Short Film",
    status: "Pre-Production",
  },
  {
    title: "Kirtan",
    releaseDate: "2026",
    platform: "Film Festivals",
    type: "Maithili Short Film",
    status: "Development",
  },
  {
    title: "Untitled Web Series",
    releaseDate: "2026",
    platform: "OTT Platform",
    type: "Web Series",
    status: "Development",
  },
]

const allProjects = [
  {
    "S.No.": 1,
    "Name of the Project": "Mai baghwa pe bhaili sawar",
    "Language": "Bhojpuri",
    "Fiction": "Video Album",
    "Year": 2008,
    "Company Release/Platform": "Sur Sargam / CD"
  },
  {
    "S.No.": 2,
    "Name of the Project": "Malwa Chadhaveli Maliniya",
    "Language": "Bhojpuri",
    "Fiction": "Video Album",
    "Year": 2008,
    "Company Release/Platform": "Multimedia Ashique Cassettes / CD"
  },
  {
    "S.No.": 3,
    "Name of the Project": "Mai doctorni mai mastarni",
    "Language": "Bhojpuri",
    "Fiction": "Video Album",
    "Year": 2008,
    "Company Release/Platform": "Sandes Music / CD"
  },
  {
    "S.No.": 4,
    "Name of the Project": "Bhajnawali",
    "Language": "Bhojpuri",
    "Fiction": "Video Album",
    "Year": 2008,
    "Company Release/Platform": "Multimedia Ashique Cassettes / CD"
  },
  {
    "S.No.": 5,
    "Name of the Project": "Na Goriya ke aawe sharam",
    "Language": "Bhojpuri",
    "Fiction": "Video Album",
    "Year": 2008,
    "Company Release/Platform": "Faizan Films / CD"
  },
  {
    "S.No.": 6,
    "Name of the Project": "Fair lovely lagala",
    "Language": "Bhojpuri",
    "Fiction": "Video Album",
    "Year": 2008,
    "Company Release/Platform": "Faizan Films / CD"
  },
  {
    "S.No.": 7,
    "Name of the Project": "Tauba Tauba re",
    "Language": "Bhojpuri",
    "Fiction": "Video Album",
    "Year": 2009,
    "Company Release/Platform": "Multimedia Ashique Cassettes / CD"
  },
  {
    "S.No.": 8,
    "Name of the Project": "Kajra ba katar gorki",
    "Language": "Bhojpuri",
    "Fiction": "Video Album",
    "Year": 2009,
    "Company Release/Platform": "Faizan Films / CD"
  },
  {
    "S.No.": 9,
    "Name of the Project": "Tani love kare da",
    "Language": "Bhojpuri",
    "Fiction": "Video Album",
    "Year": 2009,
    "Company Release/Platform": "Unreleased"
  },
  {
    "S.No.": 10,
    "Name of the Project": "Two Faces",
    "Language": "Hindi",
    "Fiction": "Short film",
    "Year": 2009,
    "Company Release/Platform": "Faizan Films / YouTube"
  },
  {
    "S.No.": 11,
    "Name of the Project": "Development of Bihar",
    "Language": "Hindi",
    "Fiction": "Documentary",
    "Year": 2010,
    "Company Release/Platform": "Several Channel telecast"
  },
  {
    "S.No.": 12,
    "Name of the Project": "Gopal Singh Nepali 'Show'",
    "Language": "Hindi",
    "Fiction": "Documentary",
    "Year": 2011,
    "Company Release/Platform": "DD Bharti"
  },
  {
    "S.No.": 13,
    "Name of the Project": "Gadhe Ki Barat 'Show'",
    "Language": "Hindi",
    "Fiction": "Play",
    "Year": 2011,
    "Company Release/Platform": "Doordarshan Bihar"
  },
  {
    "S.No.": 14,
    "Name of the Project": "Jhol",
    "Language": "Hindi",
    "Fiction": "Video Film",
    "Year": 2013,
    "Company Release/Platform": "A.P. Films/YouTube"
  },
  {
    "S.No.": 15,
    "Name of the Project": "Nasha 'A secret mission'",
    "Language": "Hindi",
    "Fiction": "Short film",
    "Year": 2016,
    "Company Release/Platform": "A.P. Films/YouTube"
  },
  {
    "S.No.": 16,
    "Name of the Project": "DD Live Interview on 'Acting'",
    "Language": "Hindi",
    "Fiction": "Bihar Bihan show",
    "Year": 2018,
    "Company Release/Platform": "Doordarshan Bihar"
  },
  {
    "S.No.": 17,
    "Name of the Project": "Litti Chokha 'Yaron ke sang'",
    "Language": "Hindi",
    "Fiction": "Short film",
    "Year": 2018,
    "Company Release/Platform": "Kanak Entertainments/YouTube"
  },
  {
    "S.No.": 18,
    "Name of the Project": "Struggle don't quit",
    "Language": "Hindi",
    "Fiction": "Short film",
    "Year": 2019,
    "Company Release/Platform": "Kanak Entertainments/YouTube"
  },
  {
    "S.No.": 19,
    "Name of the Project": "DD Interview on 'Mime'",
    "Language": "Hindi",
    "Fiction": "Killil show",
    "Year": 2019,
    "Company Release/Platform": "Doordarshan Bihar"
  },
  {
    "S.No.": 20,
    "Name of the Project": "DD Interview on 'Mime'",
    "Language": "Hindi",
    "Fiction": "Udan Show",
    "Year": 2020,
    "Company Release/Platform": "Doordarshan Bihar"
  },
  {
    "S.No.": 21,
    "Name of the Project": "Kidnap 'The Trap'",
    "Language": "Hindi",
    "Fiction": "Short film",
    "Year": 2024,
    "Company Release/Platform": "Kilkari Darbhanga/ Unreleased"
  },
  {
    "S.No.": 22,
    "Name of the Project": "DD Interview on 'Acting'",
    "Language": "Hindi",
    "Fiction": "Udan Show",
    "Year": 2024,
    "Company Release/Platform": "Doordarshan Bihar"
  },
  {
    "S.No.": 23,
    "Name of the Project": "Rajhansa",
    "Language": "Hindi",
    "Fiction": "Feature film",
    "Year": 2024,
    "Company Release/Platform": "Elivate Films/Unreleased"
  },
  {
    "S.No.": 24,
    "Name of the Project": "Marriage 'Story of Kusum Keshav Malhotra'",
    "Language": "Hindi",
    "Fiction": "Short film",
    "Year": 2026,
    "Company Release/Platform": "Kanak Entertainments/Upcoming"
  }
]

export default function ScreenPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterYear, setFilterYear] = useState("")
  const [filterType, setFilterType] = useState("")

  // Get unique years and types for filters
  const years = [...new Set(allProjects.map(project => project.Year))].sort()
  const types = [...new Set(allProjects.map(project => project.Fiction))].sort()

  // Filter projects based on search and filters
  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = searchTerm === "" || 
      project["Name of the Project"].toLowerCase().includes(searchTerm.toLowerCase()) ||
      project["Company Release/Platform"].toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesYear = filterYear === "" || project.Year === filterYear
    const matchesType = filterType === "" || project.Fiction === filterType

    return matchesSearch && matchesYear && matchesType
  })

  // Calculate statistics
  const totalProjects = allProjects.length
  const uniqueLanguages = new Set(allProjects.map(project => project.Language)).size
  const uniqueTypes = new Set(allProjects.map(project => project.Fiction)).size
  const uniqueYears = new Set(allProjects.map(project => project.Year)).size
  const upcomingProjects = allProjects.filter(project => project["Company Release/Platform"].includes("Upcoming")).length

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-gray-500 via-gray-900 to-gray-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-8 inset-0"
            style={{
              backgroundImage: `url("/gallery/new/banner2.JPG")`,
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">On Screen</h1>
          <p className="text-xl text-gray-200">Step into the world of cinema with Kumar Sumitt's engaging on-screen performances, which reflect his range and storytelling depth.</p>
          
          {/* Highlights Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Versatile on-screen presence</h3>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Compelling, socially conscious narratives</h3>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Engaging and emotive storytelling</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Featured Project</h2>
            <Dialog className="mt-50">
              <DialogTrigger asChild>
                <button 
                  type="button"
                  className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium text-sm transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  See All Projects
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[85vw] w-full max-h-[85vh] p-6 overflow-hidden bg-white mt-11">
                <DialogHeader className="mb-6 sticky top-0 bg-white z-50 pb-4 border-b">
                  <DialogTitle className="text-2xl font-bold text-gray-900">Complete Project History</DialogTitle>
                  <DialogClose className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                </DialogHeader>
                
                <div className="overflow-y-auto max-h-[calc(85vh-10rem)]">
                  {/* Statistics Summary */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-green-600">{totalProjects}</div>
                      <div className="text-sm text-gray-600 mt-1">Total Projects</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-green-600">{uniqueLanguages}</div>
                      <div className="text-sm text-gray-600 mt-1">Languages</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-green-600">{uniqueTypes}</div>
                      <div className="text-sm text-gray-600 mt-1">Project Types</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-green-600">{uniqueYears}</div>
                      <div className="text-sm text-gray-600 mt-1">Years</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-green-600">{upcomingProjects}</div>
                      <div className="text-sm text-gray-600 mt-1">Upcoming</div>
                    </div>
                  </div>

                  {/* Filters */}
                  <div className="flex flex-col md:flex-row gap-3 mb-6 p-4 bg-white border rounded-xl shadow-sm">
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-gray-700 mb-1">Search</label>
                      <input
                        type="text"
                        placeholder="Search projects, companies..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Type</label>
                      <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="w-full md:w-48 px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                      >
                        <option value="">All Types</option>
                        {types.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
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
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Name of the Project</th>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Language</th>
                              <th scope="col" className="hidden md:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Type</th>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Year</th>
                              <th scope="col" className="hidden md:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Company Release/Platform</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {filteredProjects.map((project, index) => (
                              <tr key={project["S.No."]} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{project["S.No."]}</td>
                                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                  <div className="flex flex-col">
                                    <span className="whitespace-nowrap">{project["Name of the Project"]}</span>
                                    <span className="md:hidden text-xs text-gray-500 mt-1">{project.Type}</span>
                                    <span className="md:hidden text-xs text-gray-500">{project["Company Release/Platform"]}</span>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{project.Language}</td>
                                <td className="hidden md:table-cell px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{project.Fiction}</td>
                                <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{project.Year}</td>
                                <td className="hidden md:table-cell px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{project["Company Release/Platform"]}</td>
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
                      This comprehensive list showcases Kumar Sumitt's diverse portfolio across various media formats including short films, documentaries, music videos, and television appearances. His work spans multiple languages and platforms, demonstrating his versatility as a performer and storyteller.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={featuredProject.image || "/placeholder.svg"}
                  alt={featuredProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  {featuredProject.genre}
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  {featuredProject.category}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-green-600 font-semibold mb-2">{featuredProject.category}</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{featuredProject.title}</h3>
                <p className="text-gray-600 leading-relaxed">{featuredProject.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center text-green-600 mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-semibold">Release Date</span>
                  </div>
                  <p className="text-gray-700">{featuredProject.releaseDate}</p>
                </div>
                <div>
                  <div className="flex items-center text-green-600 mb-1">
                    <Tv className="h-4 w-4 mr-2" />
                    <span className="font-semibold">Platform</span>
                  </div>
                  <p className="text-gray-700">{featuredProject.platform}</p>
                </div>
                <div>
                  <div className="flex items-center text-green-600 mb-1">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="font-semibold">Duration</span>
                  </div>
                  <p className="text-gray-700">{featuredProject.duration}</p>
                </div>
                <div>
                  <div className="flex items-center text-green-600 mb-1">
                    <User className="h-4 w-4 mr-2" />
                    <span className="font-semibold">Director</span>
                  </div>
                  <p className="text-gray-700">{featuredProject.director}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition-colors">
                  Watch Trailer
                </button>
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md font-semibold transition-colors flex items-center">
                  More Info
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen Projects */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Screen Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {screenProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video bg-gray-200">
                  {project.iframe ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={project.iframe}
                      title={`${project.title} - YouTube video player`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </div>
                      {/* Placeholder Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {project.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {project.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-green-600 font-semibold">{project.platform}</span>
                    <span className="text-gray-500">{project.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Music Videos Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Music Videos (Bhojpuri)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {musicVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video bg-gray-200">
                  {video.iframe ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={video.iframe}
                      title={`${video.title} - YouTube video player`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </div>
                      {/* Placeholder Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {video.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {video.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-green-600 font-semibold">{video.platform}</span>
                    <span className="text-gray-500">{video.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Television Interviews Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Television Interviews</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tvInterviews.map((interview) => (
              <div
                key={interview.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video bg-gray-200">
                  {interview.iframe ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={interview.iframe}
                      title={`${interview.title} - YouTube video player`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </div>
                      {/* Placeholder Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {interview.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {interview.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{interview.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{interview.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-green-600 font-semibold">{interview.channel}</span>
                    <span className="text-gray-500">{interview.language}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Releases */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Upcoming Releases</h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Project</th>
                    <th className="px-6 py-4 text-left font-semibold">Release Date</th>
                    <th className="px-6 py-4 text-left font-semibold">Platform</th>
                    <th className="px-6 py-4 text-left font-semibold">Type</th>
                    <th className="px-6 py-4 text-left font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingReleases.map((release, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-800">{release.title}</td>
                      <td className="px-6 py-4 text-gray-600">{release.releaseDate}</td>
                      <td className="px-6 py-4 text-gray-600">{release.platform}</td>
                      <td className="px-6 py-4 text-gray-600">{release.type}</td>
                      <td className="px-6 py-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {release.status}
                        </span>
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
