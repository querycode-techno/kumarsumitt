"use client"
import { Award, Calendar, GraduationCap, Users, Star, BookOpen } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const majorAwards = [
  {
    id: 1,
    title: "National Excellence in Education Award",
    year: "2024",
    description:
      "India's highest recognition for educational excellence, awarded for Kumar Sumitt's innovative teaching methodologies and contribution to performing arts education. This honor celebrates his dedication to nurturing the next generation of actors.",
    category: "Educational Excellence",
    ceremony: "Ministry of Education, New Delhi",
    date: "September 5, 2024",
  },
  {
    id: 2,
    title: "Best Acting Coach Award - International",
    year: "2023",
    description:
      "Recognized globally for his exceptional coaching abilities and innovative training techniques. This award acknowledges his impact on students who have gone on to achieve success in national and international productions.",
    category: "Best Coach",
    ceremony: "Global Education Awards, London",
    date: "November 12, 2023",
  },
  {
    id: 3,
    title: "Lifetime Achievement in Arts Education",
    year: "2022",
    description:
      "Honored for his sustained contribution to arts education and mentorship. This prestigious award recognizes his role in establishing Kumar Sumitt School of Acting and training over 500 successful actors.",
    category: "Lifetime Achievement",
    ceremony: "Indian Arts Council, Mumbai",
    date: "December 18, 2022",
  },
]

const timelineAwards = [
  {
    year: "2024",
    title: "National Excellence in Education Award",
    description: "Highest national honor for innovative teaching methodologies and educational excellence.",
    institution: "Ministry of Education",
    color: "bg-pink-500",
  },
  {
    year: "2023",
    title: "Best Acting Coach Award - International",
    description: "Global recognition for exceptional coaching abilities and student success rates.",
    institution: "Global Education Council",
    color: "bg-pink-500",
  },
  {
    year: "2022",
    title: "Lifetime Achievement in Arts Education",
    description: "Prestigious honor for sustained contribution to performing arts education and mentorship.",
    institution: "Indian Arts Council",
    color: "bg-pink-500",
  },
  {
    year: "2021",
    title: "Outstanding Educator Award",
    description: "Recognition for innovative curriculum development and student-centered teaching approach.",
    institution: "Maharashtra Education Board",
    color: "bg-pink-500",
  },
  {
    year: "2020",
    title: "Best Workshop Facilitator",
    description: "Awarded for conducting transformative acting workshops across multiple cities.",
    institution: "National Theatre Festival",
    color: "bg-pink-500",
  },
  {
    year: "2019",
    title: "Excellence in Mentorship Award",
    description: "Recognized for guiding students to national and international recognition in performing arts.",
    institution: "Film & Television Institute",
    color: "bg-pink-500",
  },
  {
    year: "2018",
    title: "Innovative Teaching Methods Award",
    description: "Honored for developing unique training techniques combining traditional and modern approaches.",
    institution: "Drama Teachers Association",
    color: "bg-pink-500",
  },
]

const studentAchievements = [
  {
    name: "Priya Sharma",
    achievement: "National Film Award Winner",
    year: "2024",
    description: "Won Best Actress for debut film after training at KSSA",
    image: "/student-priya-sharma.png",
  },
  {
    name: "Rahul Verma",
    achievement: "International Theatre Recognition",
    year: "2023",
    description: "Selected for Broadway production after KSSA training program",
    image: "/student-rahul-verma.png",
  },
  {
    name: "Anita Desai",
    achievement: "Television Series Lead",
    year: "2023",
    description: "Landed lead role in popular web series within 6 months of graduation",
    image: "/student-anita-desai.png",
  },
  {
    name: "Vikram Singh",
    achievement: "Film Festival Winner",
    year: "2022",
    description: "Won Best Actor at Mumbai International Film Festival",
    image: "/student-vikram-singh.png",
  },
]

const teachingPhilosophy = [
  {
    principle: "Authentic Expression",
    description: "Teaching students to find their authentic voice and express genuine emotions through character work.",
    icon: <Star className="h-8 w-8" />,
  },
  {
    principle: "Technical Excellence",
    description: "Combining emotional truth with technical precision in voice, movement, and character development.",
    icon: <GraduationCap className="h-8 w-8" />,
  },
  {
    principle: "Individual Growth",
    description:
      "Recognizing each student's unique strengths and tailoring training to their specific needs and goals.",
    icon: <Users className="h-8 w-8" />,
  },
  {
    principle: "Industry Preparation",
    description: "Preparing students for real-world challenges in the entertainment industry with practical skills.",
    icon: <BookOpen className="h-8 w-8" />,
  },
]

const nominations = [
  {
    category: "Best Educator",
    award: "National Education Awards",
    year: "2024",
    result: "Won",
  },
  {
    category: "Outstanding Mentor",
    award: "Arts Education Council",
    year: "2024",
    result: "Nominated",
  },
  {
    category: "Innovation in Teaching",
    award: "Global Education Summit",
    year: "2023",
    result: "Won",
  },
  {
    category: "Best Workshop Leader",
    award: "International Theatre Conference",
    year: "2023",
    result: "Nominated",
  },
  {
    category: "Excellence in Arts Education",
    award: "Mumbai Education Board",
    year: "2022",
    result: "Won",
  },
  {
    category: "Lifetime Achievement",
    award: "Drama Teachers Guild",
    year: "2022",
    result: "Won",
  },
  {
    category: "Best Acting Coach",
    award: "Film Institute Awards",
    year: "2021",
    result: "Nominated",
  },
]

export default function TrainerAwardsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-gray-600 via-gray-500 to-gray-400 text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5L60 40L95 40L68 60L78 95L50 75L22 95L32 60L5 40L40 40Z' fill='%23ffffff' fillOpacity='0.1'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Training & Education Awards</h1>
          <p className="text-xl text-gray-200">
            Recognition for excellence in performing arts education and mentorship
          </p>
        </div>
      </section>

      {/* Major Awards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Major Educational Awards</h2>

          <div className="space-y-8">
            {majorAwards.map((award, index) => (
              <div key={award.id} className="bg-gray-50 rounded-lg p-8 flex items-start space-x-6">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{award.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {award.year}
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-1" />
                          {award.category}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Ceremony</div>
                      <div className="font-medium text-gray-800">{award.ceremony}</div>
                      <div className="text-sm text-gray-500">{award.date}</div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Student Success Stories</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentAchievements.map((student, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative aspect-square bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                      <Users className="w-8 h-8 text-gray-500" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {student.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{student.name}</h3>
                  <div className="text-pink-600 font-medium text-sm mb-2">{student.achievement}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{student.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Teaching Philosophy</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {teachingPhilosophy.map((philosophy, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                    {philosophy.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{philosophy.principle}</h3>
                    <p className="text-gray-600 leading-relaxed">{philosophy.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Award Timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Educational Award Timeline</h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-pink-300"></div>

            <div className="space-y-12">
              {timelineAwards.map((award, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className={`w-4 h-4 ${award.color} rounded-full border-4 border-white shadow-md z-10`}></div>

                  {/* Content */}
                  <div className="ml-8 bg-white rounded-lg shadow-md p-6 flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{award.title}</h3>
                      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                        {award.year}
                      </span>
                    </div>
                    <div className="text-sm text-pink-600 font-medium mb-2">Institution: {award.institution}</div>
                    <p className="text-gray-600">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notable Nominations */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Notable Educational Nominations</h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-pink-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Category</th>
                    <th className="px-6 py-4 text-left font-semibold">Award</th>
                    <th className="px-6 py-4 text-left font-semibold">Year</th>
                    <th className="px-6 py-4 text-left font-semibold">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {nominations.map((nomination, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-800">{nomination.category}</td>
                      <td className="px-6 py-4 text-gray-600">{nomination.award}</td>
                      <td className="px-6 py-4 text-gray-600">{nomination.year}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            nomination.result === "Won" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {nomination.result}
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

      {/* Impact Statistics */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Educational Impact</h2>

          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Training Excellence</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Kumar Sumitt's approach to acting education combines traditional techniques with innovative
                methodologies, creating a comprehensive learning experience that prepares students for success in the
                modern entertainment industry.
              </p>
              <p>
                His training programs have produced award-winning actors, successful directors, and industry
                professionals who continue to make significant contributions to Indian and international cinema.
              </p>
              <p>
                The Kumar Sumitt School of Acting (KSSA) has become a premier destination for aspiring performers, with
                a curriculum that emphasizes both artistic excellence and professional development.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-2">500+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-2">50+</div>
                <div className="text-sm text-gray-600">Award Winners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-2">100+</div>
                <div className="text-sm text-gray-600">Workshops Conducted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-2">15+</div>
                <div className="text-sm text-gray-600">Teaching Awards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
