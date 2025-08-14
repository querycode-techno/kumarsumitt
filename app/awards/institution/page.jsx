"use client"

import { Award, Users, MapPin, Eye, X, ChevronLeft, ChevronRight, Globe, BookOpen, Star } from "lucide-react"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

const institutionVisits = [
  {
    institution: "Nazareth Academy",
    location: "Gaya, India",
    type: "School",
    programs: ["Acting Training", "Theatre Workshops"],
    description: "Comprehensive acting and theatre training programs for students",
    image: "/assets/institute/a.webp",
  },
  {
    institution: "St. Xavier's School",
    location: "Patna, India",
    type: "School",
    programs: ["Performance Studies", "Creative Expression"],
    description: "Innovative theatre education and performance development sessions",
    image: "/assets/institute/b.webp",
  },
  {
    institution: "Academy of Theatre Arts, University of Mumbai",
    location: "Mumbai, India",
    type: "University",
    programs: ["Advanced Acting", "Theatre Direction"],
    description: "Professional training for aspiring theatre artists and directors",
    image: "/assets/institute/c.webp",
  },
  {
    institution: "Wilson College",
    location: "Mumbai, India",
    type: "College",
    programs: ["Drama Department Training", "Performance Arts"],
    description: "Specialized workshops for drama department students and faculty",
    image: "/assets/institute/d.webp",
  },
  {
    institution: "St. Xavier's College of Management and Technology",
    location: "Patna, India",
    type: "College",
    programs: ["Theatre-in-Education", "Leadership through Arts"],
    description: "Integrating theatre techniques with management and leadership skills",
    image: "/assets/institute/e.webp",
  },
  {
    institution: "Sri Prakash Educational Institutions (Synergy Schools)",
    location: "Andhra Pradesh, India",
    type: "Educational Institution",
    programs: ["TIE Programs", "Student Development"],
    description: "Theatre-in-Education programs for holistic student development",
    image: "/assets/institute/f.webp",
  },
  {
    institution: "Parivartan Rangmandali",
    location: "Siwan, India",
    type: "Cultural Organization",
    programs: ["Community Theatre", "Cultural Preservation"],
    description: "Community-based theatre initiatives and cultural programs",
    image: "/assets/institute/g.webp",
  },
  {
    institution: "Indian Institute of Technology (IIT)",
    location: "Patna, India",
    type: "Technical Institute",
    programs: ["Creative Expression", "Personality Development"],
    description: "Bridging technical education with creative arts and expression",
    image: "/assets/institute/h.webp",
  },
  {
    institution: "Rainbow Homes",
    location: "Patna, India",
    type: "Social Institution",
    programs: ["Art Therapy", "Social Theatre"],
    description: "Using theatre as a tool for healing and social development",
    image: "/assets/institute/i.webp",
  },
  {
    institution: "Bihar Bal Bhawan Kilkari",
    location: "Patna, Gaya, Darbhanga, Muzaffarpur, Saharsa",
    type: "Children's Institution",
    programs: ["Children's Theatre", "Creative Development"],
    description: "Specialized programs for children's creative and artistic development",
    image: "/assets/institute/j.webp",
  },
  {
    institution: "Rashtriya Rang Lok",
    location: "Bihar, India",
    type: "Cultural Organization",
    programs: ["Traditional Theatre", "Cultural Education"],
    description: "Preserving and promoting traditional Indian theatre forms",
    image: "/no.webp",
  },
  {
    institution: "Shri Pankaj Kapadia Sarvajanik College of Performing Arts (SCOPA)",
    location: "Surat, India",
    type: "Performing Arts College",
    programs: ["Professional Training", "Performance Arts"],
    description: "Advanced training for performing arts students and professionals",
    image: "/assets/institute/l.webp",
  },
  {
    institution: "Pracheen Kala Kendra",
    location: "Mohali, India",
    type: "Cultural Institution",
    programs: ["Classical Arts", "Cultural Preservation"],
    description: "Traditional and classical performing arts education",
    image: "/assets/institute/m.webp",
  },
  {
    institution: "Kazakh National Academy of Choreography",
    location: "Astana, Kazakhstan",
    type: "International Academy",
    programs: ["Cross-Cultural Exchange", "International Collaboration"],
    description: "International cultural exchange and collaborative programs",
    image: "/assets/institute/n.webp",
  },
  {
    institution: "Istina Dance Academy",
    location: "Astana, Kazakhstan",
    type: "Dance Academy",
    programs: ["Movement Arts", "Physical Theatre"],
    description: "Integration of dance and theatre techniques",
    image: "/assets/institute/o.webp",
  },
  {
    institution: "Laura Abat Studio",
    location: "Astana, Kazakhstan",
    type: "Private Studio",
    programs: ["Specialized Training", "Artistic Development"],
    description: "Intensive artistic training and development programs",
    image: "/assets/institute/p.webp",
  },
  {
    institution: "L.A. Dance Complex",
    location: "Astana, Kazakhstan",
    type: "Dance Complex",
    programs: ["Performance Training", "Artistic Expression"],
    description: "Comprehensive performance and artistic expression training",
    image: "/assets/institute/q.webp",
  },
  {
    institution: "T.Z. Kazakh National Academy of Arts",
    location: "Almaty, Kazakhstan",
    type: "National Academy",
    programs: ["International Arts Education", "Cultural Diplomacy"],
    description: "Promoting international understanding through arts education",
    image: "/assets/institute/r.webp",
  },
]

const keyContributions = [
  {
    title: "Acting Training for Stage and Screen",
    description: "Comprehensive training programs covering both theatrical and cinematic acting techniques",
    icon: <Star className="h-8 w-8 text-pink-500" />,
  },
  {
    title: "Mime Art & Physical Theatre Workshops",
    description: "Specialized workshops in mime artistry and physical expression techniques",
    icon: <Users className="h-8 w-8 text-pink-500" />,
  },
  {
    title: "Theatre-in-Education (TIE) Programs",
    description: "Educational programs using theatre as a tool for learning and development",
    icon: <BookOpen className="h-8 w-8 text-pink-500" />,
  },
  {
    title: "Faculty and Scholar Development",
    description: "Professional development programs for educators in theatre arts education",
    icon: <Award className="h-8 w-8 text-pink-500" />,
  },
  {
    title: "Cross-Cultural Theatre Collaborations",
    description: "International collaborations promoting cultural exchange through theatre",
    icon: <Globe className="h-8 w-8 text-pink-500" />,
  },
]

const testimonials = [
  {
    quote:
      "An inspiring and transformative workshop—our students discovered the true power of expression through theatre.",
    author: "Faculty",
    institution: "Sri Prakash Educational Institutions, A.P.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "Kumar Sumitt's mime and acting sessions left a lasting impression on our students and teachers alike.",
    author: "Faculty",
    institution: "Academy of Theatre Arts, Mumbai",
    image: "/placeholder.svg?height=80&width=80",
  },
]

const galleryItems = [
  {
    id: 1,
    type: "workshop",
    title: "Acting Workshop at IIT Patna",
    image: "/placeholder.svg?height=400&width=600",
    description: "Interactive acting workshop with engineering students",
  },
  {
    id: 2,
    type: "performance",
    title: "Mime Performance at Wilson College",
    image: "/placeholder.svg?height=400&width=600",
    description: "Live mime performance demonstration",
  },
  {
    id: 3,
    type: "training",
    title: "Faculty Training Session",
    image: "/placeholder.svg?height=400&width=600",
    description: "Professional development session for theatre educators",
  },
  {
    id: 4,
    type: "cultural",
    title: "Cultural Exchange in Kazakhstan",
    image: "/placeholder.svg?height=400&width=600",
    description: "International cultural exchange program",
  },
  {
    id: 5,
    type: "workshop",
    title: "Children's Theatre Workshop",
    image: "/placeholder.svg?height=400&width=600",
    description: "Creative workshop at Bihar Bal Bhawan",
  },
  {
    id: 6,
    type: "performance",
    title: "Theatre Performance at SCOPA",
    image: "/placeholder.svg?height=400&width=600",
    description: "Professional theatre performance and demonstration",
  },
]

export default function InstitutionAwardsPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)

  const nextSlide = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

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
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">Institutional Visits</h1>
              <p className="text-2xl text-gray-200 mb-8">
                Sharing knowledge and passion for performing arts across prestigious institutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url("/award-ceremony.png")' }}></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-pink-50 to-gray-50 rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Transformative Educational Impact</h2>
            </div>

            {/* Two Content Cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Educational Impact</h3>
                </div>
                <div className="text-gray-700 leading-relaxed">
                  <p>
                  Kumar Sumitt's dedication to theatre, acting, and film acting education has taken him to a wide range of
                prestigious institutions across India and globally. As a mentor, guest faculty, performing artist, and
                workshop leader, he has shared his knowledge and passion for the performing arts with students,
                scholars, educators, and theatre enthusiasts—helping them discover the transformative power of acting,
                mime, and stagecraft.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Professional Recognition</h3>
                </div>
                <div className="text-gray-700 leading-relaxed">
                  <p>
                  With over two decades of rich experience in theatre and performance education, Kumar Sumitt has visited
                and conducted training at more than 20 schools, several drama departments of renowned universities, and
                esteemed cultural institutions in India and abroad. Through his innovative and practical approach, he
                has empowered individuals with hands-on learning in Acting for Stage and Film, Mime Art,
                Theatre-in-Education (TIE), and Performance Studies—nurturing not only artistic talent but also personal
                growth, confidence, and cross-cultural understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institution Visits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Selected Institutions Visited/Visiting</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {institutionVisits.map((visit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative aspect-video bg-gray-200">
                  <img
                    src={visit.image || "/placeholder.svg"}
                    alt={visit.institution}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedImage(visit.image)}
                    className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 flex items-center justify-center transition-all duration-200"
                  >
                    <Eye className="h-8 w-8 text-white opacity-0 hover:opacity-100 transition-opacity duration-200" />
                  </button>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                        visit.type === "University"
                          ? "bg-blue-500"
                          : visit.type === "School"
                            ? "bg-green-500"
                            : visit.type === "International Academy"
                              ? "bg-purple-500"
                              : "bg-orange-500"
                      }`}
                    >
                      {visit.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{visit.institution}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {visit.location}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{visit.description}</p>
                  <div className="space-y-2">
                    {visit.programs.map((program, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs font-medium mr-2"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Contributions */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Key Contributions in These Visits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyContributions.map((contribution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {contribution.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{contribution.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{contribution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo and Training Video Gallery */}
      {/* <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Photo and Training Video Gallery</h2>
          <p className="text-center text-gray-600 mb-8">
            Workshop Photos • Performance Highlights • Faculty Training Sessions • Cultural Exchange Moments
          </p>

       
          <div className="relative bg-gray-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-96 md:h-[500px]">
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentGalleryIndex * 100}%)` }}
              >
                {galleryItems.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0 relative">
                    <div className="h-full flex items-center justify-center p-8">
                      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center">
                        <div className="relative group">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                          />
                          <button
                            onClick={() => setSelectedImage(item.image)}
                            className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center rounded-xl transition-all duration-200"
                          >
                            <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </button>
                          <div className="absolute top-4 left-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                                item.type === "workshop"
                                  ? "bg-blue-500"
                                  : item.type === "performance"
                                    ? "bg-green-500"
                                    : item.type === "training"
                                      ? "bg-purple-500"
                                      : "bg-orange-500"
                              }`}
                            >
                              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                            </span>
                          </div>
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

      
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>

  
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentGalleryIndex ? "bg-pink-500" : "bg-white bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>

      
          <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-4">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentGalleryIndex(index)}
                className={`relative rounded-lg overflow-hidden transition-all duration-200 ${
                  index === currentGalleryIndex ? "ring-4 ring-pink-500" : "hover:ring-2 hover:ring-pink-300"
                }`}
              >
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-20 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials and Certificates */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Testimonials and Certificates</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <blockquote className="text-gray-700 italic mb-6 leading-relaxed text-lg">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-pink-200"
                  />
                  <div>
                    <cite className="font-bold text-gray-800 not-italic">{testimonial.author}</cite>
                    <div className="text-pink-600 text-sm font-medium">{testimonial.institution}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 italic">(You can gradually collect and display more testimonials here.)</p>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Institution Visit"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
