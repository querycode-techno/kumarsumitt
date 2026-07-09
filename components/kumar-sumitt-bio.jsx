"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

const credentials = [
  "Actor | Director | Educator | Researcher",
  "Ph.D. Scholar | M.A. (Dramatics)",
  "NSD Sikkim Alumnus | MBA (HR) | B.Sc. (IT)"
]

const timeline = [
  {
    year: "2004",
    events: [
      "Began theatre journey in Patna, Bihar, at Premchand Rangshala (Patna Theatre)",
      "Actively engaged as an actor in theatre and mimetic arts"
    ]
  },
  {
    year: "2004–2012",
    events: [
      "Extensive work on stage and open-air performances, addressing social and community issues",
      "Built a strong foundation in Mime and physical theatre",
      "Completed B.Sc. (IT) and Higher Diploma in Software Engineering"
    ]
  },
  {
    year: "2012–2014",
    events: [
      "Completed PGDBA–MBA (Human Resources) while continuing theatre practices"
    ]
  },
  {
    year: "2014–2016",
    events: [
      "Selected for National School of Drama (NSD), Sikkim",
      "Received rigorous training in acting, directing, movement, voice, and classical performance theory",
      "Undertook advanced professional training at Academy of Theatre Arts, University of Mumbai"
    ]
  },
  {
    year: "2016–2020",
    events: [
      "Founded Kanak Entertainments in 2017, focusing on theatre productions, cultural initiatives, short films, and events",
      "Completed M.A. in Dramatics"
    ]
  },
  {
    year: "2020–2024",
    events: [
      "Continued active engagement in theatre practice, pedagogy, and research",
      "Pursuing Ph.D. (Final Year) on \"Acting Techniques of Bharata's Natyashastra and Stanislavsky's Realism on Stage and Cinema\"",
      "Published scholarly articles in national and international journals",
      "Served as Visiting Faculty at leading theatre and drama institutions",
      "Conducted workshops and master classes across India and international platforms"
    ]
  },
  {
    year: "2024-2025",
    events: [
      "Directed Sita Ram, a mythological play inspired by the Ramayana, in Kazakh and Russian, Astana, Kazakhstan",
      "Worked with ICCR and the Ministry of External Affairs, Government of India",
      "Directed critically acclaimed international productions"
    ]
  },
  {
    year: "2025-Present",
    events: [
      "Directed theatre productions in Kazakhstan and Uzbekistan",
      "Enacted in over 100 stage productions and more than 1,500 open-air performances",
      "Directed productions in Hindi, Maithili, Telugu, Punjabi, Kazakh, Russian, and Mime",
      "Founded the Kumar Sumitt School of Acting Foundation",
      "Continued international theatre collaborations and academic engagements"
    ]
  }
]

export default function KumarSumittBio() {
  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-block mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 relative">
              <span className="relative z-10">Kumar Sumitt</span>
              <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-green-400/30 via-pink-400/30 to-green-400/30 rounded-full"></span>
            </h2>
          </div>
          
          <div className="space-y-1.5 mb-5">
            {credentials.map((cred, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-sm md:text-base text-gray-600 font-medium"
              >
                {cred}
              </motion.p>
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-400"></div>
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
            <div className="h-px w-24 bg-gradient-to-r from-green-400 via-pink-400 to-green-400"></div>
            <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-400"></div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <div className="relative bg-white rounded-xl p-6 md:p-8 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-50 to-transparent rounded-bl-full" />

            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start relative z-10">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-5 text-gray-800 relative">
                  About Kumar Sumitt
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-green-500 to-transparent" />
                </h3>

                <div className="space-y-3.5 text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                  <p>
                    Kumar Sumitt is an Indian Actor, Director, Educator, Researcher, and Cultural Entrepreneur, with over two decades of distinguished contributions to Indian theatre, mimetic arts, and international stage practice. He began his artistic journey in Patna, Bihar, in 2004, and is an alumnus of the National School of Drama, Sikkim, with advanced training from the Academy of Theatre Arts, University of Mumbai, and an M.A. in Dramatics. He is currently in the final year of his Ph.D., researching the Acting Techniques of Bharata's Natyashastra and Stanislavsky's Realism on stage and cinema.
                  </p>
                  <p>
                    With over 100 stage productions, more than 1,500 open-air performances, and deep expertise in Mime and physical theatre, his creative work spans India and international platforms. As a director and educator, he has guided productions in multiple Indian and foreign languages, worked with ICCR and the Ministry of External Affairs, Government of India, participated in professional development workshops at Arena Stage, USA, and directed critically acclaimed productions in Kazakhstan and Uzbekistan.
                  </p>
                  <p>
                    A committed educator and mentor, Kumar Sumitt has served as visiting faculty at leading institutions, continually bridging traditional Indian performance theory with contemporary global practice. His performances and directorial ventures span Hindi, Maithili, Telugu, Punjabi, Kazakh, Russian, and non-verbal mimetic arts, blending cultural depth with expressive innovation.
                  </p>
                  <p>
                    Beyond the stage and classroom, he actively nurtures the next generation of artists through workshops and master classes, and has founded impactful ventures such as Kanak Entertainments (est. 2017) and the Kumar Sumitt School of Acting Foundation (est. 2025).
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-end md:sticky md:top-28">
                <div className="relative w-full max-w-xs md:max-w-sm">
                  <div className="absolute -inset-2 bg-gradient-to-br from-green-100/40 via-stone-100/60 to-pink-100/40 rounded-2xl blur-lg" />
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-stone-50 to-neutral-100 border border-gray-100 shadow-md">
                    <Image
                      src="/assets/about/kumar-sumitt.png"
                      alt="Kumar Sumitt"
                      width={400}
                      height={520}
                      className="w-full h-auto object-cover object-top"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Unique Card Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-green-400"></div>
              <Calendar className="h-5 w-5 text-green-500" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">Artistic Timeline</h3>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-pink-400"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {timeline.map((period, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative bg-white rounded-lg border border-gray-200 p-5 md:p-6 hover:border-green-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Accent bar on hover */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-green-500 to-pink-500 group-hover:h-full transition-all duration-300"></div>
                
                {/* Year badge */}
                <div className="flex items-center mb-4 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-100 to-pink-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <Calendar className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-green-600 font-bold text-sm md:text-base group-hover:text-green-700 transition-colors">
                    {period.year}
                  </span>
                </div>
                
                <ul className="space-y-2.5 relative z-10">
                  {period.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="flex items-start text-xs md:text-sm text-gray-700 leading-relaxed text-justify">
                      <span className="text-green-500 mr-2.5 mt-1 flex-shrink-0 font-bold">▸</span>
                      <span className="group-hover:text-gray-800 transition-colors">{event}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
