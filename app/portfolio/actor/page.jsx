"use client"

import Image from "next/image"
import Link from "next/link"
import { Play, Award, ArrowRight, BookOpen, Tv, Music, Drama, Globe } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Updated filmography with new content
const filmography = [
  {
    id: 1,
    title: "Marriage: A Story of Kusum Keshav Malhotra",
    year: "2026",
    role: "Lead Actor",
    type: "Hindi Short Film",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Kirtan",
    year: "2026",
    role: "Lead Actor",
    type: "Maithili Short Film",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Struggle Don't Quit",
    year: "2019",
    type: "Hindi Short Film",
  },
  {
    id: 4,
    title: "Litti-Chokha: Yaaron Ke Sang",
    year: "2018",
    type: "Hindi Short Film",
  },
  {
    id: 5,
    title: "Nasha: A Secret Mission",
    year: "2016",
    type: "Hindi Short Film",
  },
  {
    id: 6,
    title: "Jhol",
    year: "2013",
    type: "Hindi Video Film",
  },
  {
    id: 7,
    title: "Development of Bihar",
    year: "2010",
    type: "Hindi Documentary Film",
  },
  {
    id: 8,
    title: "Two Faces",
    year: "2009",
    type: "Hindi Short Film",
  },
]

const notableStageProductions = [
  "Mrichchhakatika",
  "Court Martial",
  "Supna Ka Sapna",
  "Rakt Kalyan",
  "Ma Pravish",
  "Dakghar",
  "Gabarghichor",
  "The Caucasian Chalk Circle",
  "Gonu Jha urf Gyan Jha",
  "Janwasa",
  "Vaidiki Hinsa Hinsa Na Bhavati",
  "Gadhe Ki Baraat",
  "Beyond the Sound",
  "Andhviswas",
  "Adbhut Saiyog",
  "Kathak Lok",
  "Lodhanath",
  "Barka Saheb",
  "Biniya",
  "Beyond the Sound",
]

const musicVideos = [
  {
    title: "Kajra Ba Katar Goraki",
    year: "2009",
    language: "Bhojpuri",
  },
  {
    title: "Bhajnawali",
    year: "2008",
    language: "Bhojpuri",
  },
  {
    title: "Mai Baghwa Pe Bhaili Sawar",
    year: "2008",
    language: "Bhojpuri",
  },
  {
    title: "Fair Lovely Lagala",
    year: "2008",
    language: "Bhojpuri",
  },
  {
    title: "Na Goriya Ke Aawe Sharam",
    year: "2008",
    language: "Bhojpuri",
  },
  {
    title: "Mai Doctorni, Mai Masterni",
    year: "2008",
    language: "Bhojpuri",
  },
]

const tvAppearances = [
  {
    show: "Udan Show",
    channel: "Doordarshan",
    language: "Hindi",
    year: "2024",
  },
  {
    show: "Udan Show",
    channel: "Doordarshan",
    language: "Hindi",
    year: "2020",
  },
  {
    show: "Killol Show",
    channel: "Doordarshan",
    language: "Hindi",
    year: "2019",
  },
  {
    show: "Bihar Bihan Show",
    channel: "Doordarshan",
    language: "Hindi",
    year: "2018",
  },
]

const socialThemes = [
  "Child Labour",
  "Dowry",
  "Women Empowerment",
  "Education",
  "Environmental Conservation",
  "Human Trafficking",
  "Child Marriage",
  "Poverty",
  "Cleanliness",
  "Domestic Violence",
  "Paryavaran (Environment)",
  "Promotional Campaigns",
]

export default function ActorPortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black overflow-hidden pt-16 md:pt-0">
        {/* Background Image Grid */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-1 opacity-20">
          <div className="relative h-full">
            <Image src="/assets/joker.jpg" alt="Stage Performance" fill className="object-cover" />
          </div>
          <div className="relative h-full">
            <Image src="/assets/gg10.jpg" alt="Theatre" fill className="object-cover" />
          </div>
          <div className="relative h-full hidden md:block">
            <Image src="/gallery/new/191.JPG" alt="Cinema" fill className="object-cover" />
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Actor
            </h1>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-green-500 to-pink-500 mx-auto rounded-full mb-6 md:mb-8" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-center px-2">
              A dedicated actor, director, and theatre educator with over two decades of experience in Hindi, Maithili, and Bhojpuri theatre
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">
                Artistic Journey
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Kumar Sumitt began his artistic journey in Patna, Bihar, combining his academic background in Human Resources (PGDBA–MBA) with his passion for performance arts. With over two decades of experience, he specializes in Hindi, Maithili, and Bhojpuri theatre, along with Mimetic arts.
                </p>
                <p>
                  His educational journey includes training at the National School of Drama (NSD), Sikkim, a one-year intensive program at the Academy of Theatre Arts, University of Mumbai, and an M.A. in Dramatics from L. N. Mithila University, Darbhanga.
                </p>
                <p>
                  Currently pursuing his Ph.D. on "Acting Techniques of Bharata's Natyashastra and Stanislavsky's Realism on Stage and Cinema: An Analytical Study," his research has been featured in national and international journals.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Professional Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Drama className="h-5 w-5 text-green-500" />
                  <span>70+ acclaimed stage productions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-green-500" />
                  <span>1,500+ open-air shows</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-green-500" />
                  <span>Ph.D. Research Scholar</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-green-500" />
                  <span>Expertise in Mimetic Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage Productions */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-gray-800">
            Notable Stage Productions
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {notableStageProductions.map((production, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-green-50 transition-colors">
                <h3 className="font-medium text-gray-800">{production}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-8">
            {/* Past Performances Table */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Past Performances</h3>
              <div className="overflow-hidden rounded-lg shadow-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gradient-to-r from-green-500 to-pink-500">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Performance
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Language
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Venue
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Supna Ka Sapna
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Hindi
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        JNU, Delhi
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Mime Shows
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Non-verbal
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Patna
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Biniya
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Maithili
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Patna
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Upcoming Stage Projects Table */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Stage Projects</h3>
              <div className="overflow-hidden rounded-lg shadow-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gradient-to-r from-pink-500 to-green-500">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Project
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Language
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Scope
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Mime Show
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Non-verbal
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        International Project
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Stage Play
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Hindi and Maithili
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        National Project
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Solo Show
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Multilingual
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        National Project
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filmography */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-gray-800">
            On Screen
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filmography.map((film) => (
              <div key={film.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-800">{film.title}</h3>
                    <span className="text-sm text-green-600">{film.year}</span>
                  </div>
                  <p className="text-gray-600">{film.type}</p>
                  {film.status && (
                    <span className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      {film.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TV and Music */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* TV Appearances */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Tv className="h-6 w-6 text-green-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Television Interviews
                </h2>
              </div>
              <div className="space-y-4">
                {tvAppearances.map((appearance, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-800">{appearance.show}</h3>
                    <p className="text-sm text-gray-600">
                      {appearance.channel} | {appearance.language} | {appearance.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Music Videos */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Music className="h-6 w-6 text-green-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Music Videos
                </h2>
              </div>
              <div className="space-y-4">
                {musicVideos.map((video, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-800">{video.title}</h3>
                    <p className="text-sm text-gray-600">
                      {video.language} | {video.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-pink-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-gray-800">
            Social Impact Through Open-Air Shows
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {socialThemes.map((theme, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-4 text-center">
                <p className="text-gray-800">{theme}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
