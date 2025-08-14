"use client"
import Link from "next/link"
import { BookOpen, GraduationCap, FileText, Award, Download, ExternalLink, Users, Globe } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const researchPapers = [
  // {
  //   id: 1,
  //   title: "Stanislavski's Acting Method: Foundation and Technique",
  //   year: "2025",
  //   journal: "Rastriya Rang Lok",
  //   language: "English",
  //   focus: "Core concepts of Stanislavski's method and their practical application in Indian theatre.",
  //   downloadAvailable: true,
  //   pdfUrl: "/assets/research/stanislavski-acting-method.pdf"
  // },
  {
    id: 2,
    title: "Impact of Theatre Arts on Society",
    year: "2024",
    publicationId: "MIU/Recon-24/444",
    language: "English",
    focus: "Theatre as a mirror to society, promoting reflection, awareness, and change.",
    abstractAvailable: true,
    pdfUrl: "/assets/research/ImpactofTheatrearts.pdf"
  },
  {
    id: 3,
    title: "Abhinay: Bal Rangmanch aa Vyaktitwa Vikas",
    year: "2024",
    publisher: "Airpan, Maithili publication",
    language: "Maithili",
    focus: "How children's theatre encourages early character building, expression, and creativity.",
    downloadAvailable: true,
    pdfUrl: "/assets/research/AbhinayBalRangmanchaaVyaktitwaVikas.pdf"
  },
  {
    id: 4,
    title: "Dramatic Art for Personal Development: A Journey from Person to Personality",
    year: "2023",
    journal: "KNAC Scientific Journal, Kazakhstan",
    language: "English",
    focus: "Acting as a tool for personality refinement, emotional intelligence, and self-discovery.",
    downloadAvailable: true,
    pdfUrl: "/assets/research/development.pdf"
  },
  {
    id: 5,
    title: "Theatre Arts and Its Importance in Education",
    year: "2022",
    journal: "Scientific Journal of Kazakh National Academy of Choreography, Astana",
    language: "English",
    focus: "Interdisciplinary relevance of theatre in enhancing learning, creativity, and empathy in classrooms.",
    onlineAvailable: true,
    pdfUrl: "/assets/research/arts.pdf"
  },
  {
    id: 6,
    title: "Folk Play and Education System",
    year: "2020",
    journal: "Lok ke Vividh Rang, Department of Music & Dramatics, L.N. Mithila University",
    language: "English",
    focus: "Role of traditional folk theatre in value-based education and community learning.",
    downloadAvailable: true,
    pdfUrl: "/assets/research/Folkplay.pdf"
  },
  {
    id: 7,
    title: "Rangmanch Kala evam Vyavsay (Theatre Art and Profession)",
    year: "2018",
    publisher: "L.N. Mithila University",
    language: "Hindi",
    focus: "Exploration of theatre as a professional career and its evolving status in Indian society.",
    downloadAvailable: true,
    pdfUrl: "/assets/research/Rangmanch.pdf"
  }
]

const researchThemes = [
  {
    title: "Acting Techniques",
    description: "Comparative studies on traditional Indian forms and global methods like Stanislavski.",
    icon: GraduationCap
  },
  {
    title: "Theatre in Education",
    description: "Drama as a transformative learning tool for students and teachers alike.",
    icon: BookOpen
  },
  {
    title: "Children's Theatre",
    description: "Theatre-based approaches for developing creativity, expression, and confidence in young minds.",
    icon: Users
  },
  {
    title: "Socio-cultural Impact",
    description: "Analyses of how theatre influences communities, raises awareness, and fosters dialogue.",
    icon: Globe
  },
  {
    title: "Cross-cultural Exchange",
    description: "Collaborative studies that link Indian and international theatre traditions",
    icon: Award
  }
]

export default function ResearchPortfolioPage() {
  const handlePdfClick = (pdfUrl, paperTitle) => {
    // Open PDF in new tab
    window.open(pdfUrl, '_blank');
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Academic Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <BookOpen className="h-20 w-20 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Research & Publications</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exploring the deeper layers of acting, theatre education, cultural performance, and personality development through scholarly research and publications.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            Kumar Sumitt's research reflects his unwavering dedication to the deeper layers of acting, theatre education, cultural performance, and personality development. His scholarly contributions have been published in leading national and international journals, demonstrating the impact of theatre as both an educational tool and a transformative human experience.
          </p>
        </div>
      </section>

      {/* Research Themes */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Research Themes</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {researchThemes.map((theme, index) => {
              const Icon = theme.icon
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                  <Icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">{theme.title}</h3>
                  <p className="text-sm text-gray-600">{theme.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Published Research */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Key Publications</h2>

          <div className="space-y-6">
            {researchPapers.map((paper) => (
              <div key={paper.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{paper.title}</h3>
                    <p className="text-gray-600 mb-3">{paper.focus}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      {paper.journal && <span>{paper.journal}</span>}
                      {paper.publisher && <span>{paper.publisher}</span>}
                      {paper.publicationId && <span>ID: {paper.publicationId}</span>}
                      <span>•</span>
                      <span>{paper.year}</span>
                      <span>•</span>
                      <span className="text-green-600 font-semibold">Language: {paper.language}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {paper.downloadAvailable && (
                      <button 
                        onClick={() => handlePdfClick(paper.pdfUrl, paper.title)}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-semibold transition-colors inline-flex items-center"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        View PDF
                      </button>
                    )}
                    {paper.abstractAvailable && (
                      <button 
                        onClick={() => handlePdfClick(paper.pdfUrl, paper.title)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md font-semibold transition-colors inline-flex items-center"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Read Abstract
                      </button>
                    )}
                    {paper.onlineAvailable && (
                      <button 
                        onClick={() => handlePdfClick(paper.pdfUrl, paper.title)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold transition-colors inline-flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read Online
                      </button>
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl mb-8">
            This portfolio stands as a testament to Kumar Sumitt's belief in acting as both an art and a science—a discipline capable of shaping not only skilled performers, but confident personalities and conscious communities.
          </p>
          <Link href="/contact">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors">
              Connect for Research Collaboration
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
