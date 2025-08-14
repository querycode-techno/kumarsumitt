"use client"
import { Award, Calendar, Film } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const majorAwards = [
  {
    id: 1,
    title: "National Film Award - Best Director",
    year: "2024",
    description:
      "India's highest honor for direction, awarded for Kumar Sumitt's exceptional work on 'The Silent Echo'. This recognition celebrates his innovative storytelling techniques and masterful direction that brought complex characters to life.",
    category: "Best Director",
    ceremony: "National Film Awards, New Delhi",
    date: "March 20, 2024",
    film: "The Silent Echo",
  },
  {
    id: 2,
    title: "Filmfare Award - Best Director",
    year: "2023",
    description:
      "Recognized for his outstanding direction in 'Urban Rhythms', a contemporary drama that showcased his ability to handle ensemble casts and complex narrative structures with finesse.",
    category: "Best Director",
    ceremony: "Filmfare Awards, Mumbai",
    date: "February 25, 2023",
    film: "Urban Rhythms",
  },
  {
    id: 3,
    title: "International Film Festival Award - Best Director",
    year: "2022",
    description:
      "Awarded at the prestigious Cannes Film Festival for his directorial debut 'Echoes of Eternity'. This international recognition established him as a visionary filmmaker on the global stage.",
    category: "Best Director",
    ceremony: "Cannes Film Festival, France",
    date: "May 18, 2022",
    film: "Echoes of Eternity",
  },
]

const timelineAwards = [
  {
    year: "2024",
    title: "National Film Award - Best Director",
    description:
      "Highest national honor for exceptional direction showcasing innovative storytelling and visual mastery.",
    film: "The Silent Echo",
    color: "bg-pink-500",
  },
  {
    year: "2023",
    title: "Filmfare Award - Best Director",
    description: "Popular choice award recognizing outstanding direction in contemporary Indian cinema.",
    film: "Urban Rhythms",
    color: "bg-pink-500",
  },
  {
    year: "2022",
    title: "Cannes Film Festival - Best Director",
    description: "International recognition for directorial debut establishing global presence in world cinema.",
    film: "Echoes of Eternity",
    color: "bg-pink-500",
  },
  {
    year: "2022",
    title: "Mumbai International Film Festival - Best Director",
    description: "Regional recognition for innovative approach to independent filmmaking and narrative structure.",
    film: "Echoes of Eternity",
    color: "bg-pink-500",
  },
  {
    year: "2021",
    title: "Critics Choice Award - Best Debut Director",
    description: "Critical acclaim for first directorial venture showcasing natural talent and vision.",
    film: "Echoes of Eternity",
    color: "bg-pink-500",
  },
  {
    year: "2021",
    title: "Screen Awards - Best Director",
    description: "Industry recognition for technical excellence and artistic vision in debut film.",
    film: "Echoes of Eternity",
    color: "bg-pink-500",
  },
  {
    year: "2020",
    title: "Short Film Festival Award - Best Director",
    description: "Recognition for exceptional short film direction showcasing storytelling potential.",
    film: "The Last Letter",
    color: "bg-pink-500",
  },
]

const nominations = [
  {
    category: "Best Director",
    award: "IIFA Awards",
    year: "2024",
    film: "The Silent Echo",
    result: "Won",
  },
  {
    category: "Best Director",
    award: "Zee Cine Awards",
    year: "2024",
    film: "The Silent Echo",
    result: "Nominated",
  },
  {
    category: "Outstanding Direction",
    award: "Critics Choice Awards",
    year: "2023",
    film: "Urban Rhythms",
    result: "Won",
  },
  {
    category: "Best Director - Drama",
    award: "Guild Awards",
    year: "2023",
    film: "Urban Rhythms",
    result: "Nominated",
  },
  {
    category: "Best Debut Director",
    award: "Filmfare Awards",
    year: "2022",
    film: "Echoes of Eternity",
    result: "Won",
  },
  {
    category: "Best Director",
    award: "Asian Film Awards",
    year: "2022",
    film: "Echoes of Eternity",
    result: "Nominated",
  },
  {
    category: "Best Director - Independent Film",
    award: "Mumbai Film Festival",
    year: "2021",
    film: "Echoes of Eternity",
    result: "Won",
  },
]

const criticalRecognition = [
  {
    critic: "Rajeev Masand",
    publication: "CNN-News18",
    quote:
      "Kumar Sumitt's direction in 'The Silent Echo' is nothing short of masterful. His ability to extract nuanced performances while maintaining visual poetry makes him one of the most promising directors of his generation.",
  },
  {
    critic: "Anupama Chopra",
    publication: "Film Companion",
    quote:
      "As a director, Summit shows remarkable maturity and vision. His understanding of character dynamics and visual storytelling creates an immersive cinematic experience that stays with you long after the credits roll.",
  },
  {
    critic: "Shubhra Gupta",
    publication: "Indian Express",
    quote:
      "Summit's directorial approach combines technical excellence with emotional depth. His films are not just visually stunning but also intellectually engaging, marking him as a filmmaker to watch.",
  },
  {
    critic: "Mayank Shekhar",
    publication: "Mid-Day",
    quote:
      "The transition from actor to director has been seamless for Summit. His insider's understanding of performance combined with his artistic vision creates films that are both commercially viable and critically acclaimed.",
  },
]

const filmography = [
  {
    title: "The Silent Echo",
    year: "2024",
    genre: "Drama/Thriller",
    duration: "142 minutes",
    awards: "National Film Award, Filmfare Award",
    description: "A psychological drama exploring themes of isolation and human connection in modern urban life.",
    image: "/director-silent-echo.png",
  },
  {
    title: "Urban Rhythms",
    year: "2023",
    genre: "Contemporary Drama",
    duration: "128 minutes",
    awards: "Filmfare Award, Critics Choice",
    description:
      "An ensemble piece examining the interconnected lives of city dwellers across different social strata.",
    image: "/director-urban-rhythms.png",
  },
  {
    title: "Echoes of Eternity",
    year: "2022",
    genre: "Period Drama",
    duration: "156 minutes",
    awards: "Cannes Recognition, Multiple National Awards",
    description: "A sweeping epic about family legacy and the passage of time across three generations.",
    image: "/director-echoes-eternity.png",
  },
]

export default function DirectorAwardsPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Directorial Awards</h1>
          <p className="text-xl text-gray-200">Recognition for visionary filmmaking and storytelling excellence</p>
        </div>
      </section>

      {/* Major Awards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Major Directorial Awards</h2>

          <div className="space-y-8">
            {majorAwards.map((award, index) => (
              <div key={award.id} className="bg-gray-50 rounded-lg p-8 flex items-start space-x-6">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Film className="h-8 w-8 text-white" />
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
                        <div className="flex items-center">
                          <Film className="h-4 w-4 mr-1" />
                          {award.film}
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

      {/* Directorial Filmography */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Award-Winning Films</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {filmography.map((film, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative aspect-video bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                      <Film className="w-8 h-8 text-gray-500" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {film.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{film.title}</h3>
                  <div className="text-sm text-gray-600 mb-3">
                    <div>
                      {film.genre} • {film.duration}
                    </div>
                    <div className="text-pink-600 font-medium">{film.awards}</div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{film.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Award Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Directorial Award Timeline</h2>

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
                    <div className="text-sm text-pink-600 font-medium mb-2">Film: {award.film}</div>
                    <p className="text-gray-600">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notable Nominations */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Notable Directorial Nominations</h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-pink-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Category</th>
                    <th className="px-6 py-4 text-left font-semibold">Award</th>
                    <th className="px-6 py-4 text-left font-semibold">Film</th>
                    <th className="px-6 py-4 text-left font-semibold">Year</th>
                    <th className="px-6 py-4 text-left font-semibold">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {nominations.map((nomination, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-800">{nomination.category}</td>
                      <td className="px-6 py-4 text-gray-600">{nomination.award}</td>
                      <td className="px-6 py-4 text-gray-600">{nomination.film}</td>
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

      {/* Critical Recognition */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Critical Recognition</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {criticalRecognition.map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <blockquote className="text-gray-700 italic mb-4 leading-relaxed">"{review.quote}"</blockquote>
                <div className="flex justify-between items-center">
                  <cite className="font-semibold text-gray-800 not-italic">{review.critic}</cite>
                  <span className="text-pink-600 text-sm font-medium">{review.publication}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directorial Philosophy */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Directorial Philosophy</h2>

          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Vision & Approach</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Kumar Sumitt's directorial approach is rooted in authentic storytelling and character-driven narratives.
                His films explore the human condition through a lens of empathy and understanding, creating stories that
                resonate across cultural and social boundaries.
              </p>
              <p>
                As both an actor and director, Summit brings a unique perspective to filmmaking. His understanding of
                performance allows him to guide actors toward their best work while maintaining a clear vision for the
                overall narrative structure and visual aesthetics.
              </p>
              <p>
                His directorial style is characterized by meticulous attention to detail, collaborative spirit, and
                commitment to technical excellence. Each film represents a journey of discovery, both for the filmmaker
                and the audience, exploring themes that matter in contemporary society.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-2">3</div>
                <div className="text-sm text-gray-600">Feature Films Directed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-2">15+</div>
                <div className="text-sm text-gray-600">Directorial Awards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500 mb-2">8</div>
                <div className="text-sm text-gray-600">International Festivals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
