"use client"

import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
// import AnimatedBackground from "@/components/animated-background"
// import CursorTrail from "@/components/cursor-trail"

const experienceData = [
  {
    year: "2004-2006",
    title: "Theatre Foundation",
    role: "Backstage Work to Actor",
    description: "Started journey as a backstage work at Premchand Rangshala, Patna, practiced every aspects of theatre production and assisted in costume, sets, property making, makeup, rehearsal incharge etc. in various productions.",
    projects: ["Premchand Rangshala Productions", "Costume Design", "Set Construction", "Property Making", "Makeup Artistry", "Rehearsal Management"],
    image: "/gallery/new/179.JPG", // image added from public/gallery/1 (79).jpg
    bgColor: "from-blue-50 to-purple-50"
  },
  {
    year: "2006-2012",
    title: "Academic Foundation & Multi-Media Debut",
    role: "Student, Emerging Actor & Media Professional",
    description: "Completed Higher Secondary (+2) from RMR Seminary Patna, B.Sc. (IT) from Kuvempu University, and Higher Diploma in Software Engineering from NIIT, Patna. Stepped on stage as chorus actor with one line dialogue, journey begins to supporting and leading roles in Hindi, Maithili and Bhojpuri languages through various leading theatre organisations of Patna theatre Like, Theatre Unit, Indian People's Theatre Association (IPTA) Patna, Chetna Samiti, Bhangima, Bihar Art Theatre (B.A.T), Kala Jagran, Prastuti etc. Started learning Mime art from Bihar Art Theatre in association with Modern Mime Centre, Kolkata. Attended National and International level Theatre workshop. Worked in many street shows on various social issues organised by theatre organisations, NGO's and Government bodies. On screen work, faced camera and performed in more than one dozen music video albums, short films and documentary for DD Bharti. Also worked back of the camera and witnessed the skills of pre production to post production related work like assistant direction, shooting Cordinator, artist basic level acting training, editing supervision etc.",
    projects: ["Theatre Unit", "IPTA Patna", "Chetna Samiti", "Bhangima", "Bihar Art Theatre", "Kala Jagran", "Prastuti", "DD Bharti Productions", "Music Video Albums", "Street Theatre Shows", "National/International Workshops"],
    image: "/gallery/new/15.jpeg",
    bgColor: "from-green-50 to-blue-50"
  },
  {
    year: "2012-2014",
    title: "Professional Development & Education",
    role: "MBA Graduate & Workshop Conductor",
    description: "Completed PGDBA-MBA in HR from MITSDE Pune while maintaining active participation in various theatre festivals and continued performance in various plays. Started conducting acting and mime workshops with children in schools and theatre organisations alongside academic studies, establishing foundation as an educator.",
    projects: ["Theatre Festival Participation", "Acting Workshops for Children", "Mime Training Programs", "School Theatre Programs", "Educational Theatre Initiatives", "HR Professional Development"],
    image: "/gallery/162.JPG",
    bgColor: "from-yellow-50 to-red-50"
  },
  {
    year: "2014-2016",
    title: "Intensive Professional Training",
    role: "NSD Scholar & Academy Student",
    description: "Completed one year residential certificate course in Dramatic Arts at National School of Drama, Sikkim Theatre Training Centre, Gangtok, Sikkim. Subsequently studied one year at Academy of Theatre Arts, University of Mumbai, developing advanced professional skills in dramatic performance and theatrical techniques.",
    projects: ["NSD Sikkim Productions", "Advanced Dramatic Arts", "Mumbai University Theatre", "Professional Skill Development", "Residential Training Programs", "Classical Theatre Techniques"],
    image: "/hero/ex1.JPG",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    year: "2016-Present",
    title: "Global Recognition & Advanced Research",
    role: "International Artist, Scholar & Master Educator",
    description: "Completed M.A. (Dramatics) from University Department of Music and Dramatics, L. N. Mithila University, Darbhanga. Currently pursuing PhD in 'Acting Techniques of Bharata's Natyashastra and Stanislavski's Realism on stage and cinema: An Analytical study' (final year) from Manipur International University under supervision of Dr. Bidyananda Yumlembam Singh and co-supervision of Dr. Alima Moldakhmetova from T. Z. Kazakh National Academy of Arts, Almaty, Kazakhstan. Achieved remarkable theatre experience of acting in 100+ stage productions, excluding 1500+ open air performances and mime shows. Directed National and International projects in Hindi, Maithili, English, Telugu, Punjabi, Russian and Kazakh languages. As an acting mentor, trained more than 5000 youth in India and 200+ participants abroad.",
    projects: ["PhD Research Project", "International Collaborations", "Multi-language Theatre Direction", "Youth Training Programs", "Cross-Cultural Productions", "Academic Research Publications", "Cultural Ambassador Initiatives", "Sita Ram in Kazakh and Russian"],
    image: "/gallery/83.JPG",
    bgColor: "from-pink-50 to-orange-50"
  },
]

const entrepreneurshipData = [
  {
    category: "Educational Leadership",
    title: "Academy of Theatre Arts, Mumbai University",
    role: "Visiting Faculty (7+ Years)",
    description: "Enriched the academic landscape as visiting faculty, sharing expertise in acting and mime techniques, directing, and cultural adaptation with students across multiple institutions.",
    achievements: ["Curriculum Development", "Workshop Design", "Student Mentorship Programs"],
    icon: "🎓",
    bgColor: "from-blue-50 to-indigo-50"
  },
  {
    category: "International Work",
    title: "ICCR & Embassy of India Projects",
    role: "Cultural Ambassador",
    description: "Garnered appreciation from ICCR Pune, Ministry of External Affairs, and Swami Vivekananda Cultural Centre for promoting Indian culture through innovative theatrical productions.",
    achievements: ["Kazakh National Academy Projects", "Cross-Cultural Productions", "Diplomatic Cultural Exchange"],
    icon: "🌍",
    bgColor: "from-green-50 to-emerald-50"
  },
  {
    category: "Research & Publication",
    title: "Research Scholar & Articles",
    role: "Research Scholar & Author",
    description: "Contributing nationally and internationally through scholarly articles and pursuing groundbreaking research on comparative acting techniques in his doctoral studies.",
    achievements: ["PhD Research (Final Year)", "National Publications", "International Journals"],
    icon: "📚",
    bgColor: "from-purple-50 to-violet-50"
  },
  {
    category: "Social Impact Theatre",
    title: "Open-Air Performance Initiative",
    role: "Actor, Director & Educator",
    description: "Organized and performed in over 1500 open-air shows addressing diverse social issues, creating awareness and positive change through accessible theatre. Worked with UNICEF, Women Development Corporation, Mukhyamantri nari sashaktikaran yojna as an actor and team leader in various social issues like child labour, poverty, human trafficking, dowery etc and appreciated by the local public after the show.",
    achievements: ["Community Outreach", "Social Awareness Campaigns", "Accessible Arts Programming"],
    icon: "🎭",
    bgColor: "from-pink-50 to-rose-50"
  },
]

const internationalProjects = [
  {
    year: "2024",
    project: "Sita Ram - A Tale of Indian Mythology",
    location: "Astana, Kazakhstan",
    description: "Directed this adaptation of Ramayana in Kazakh and Russian languages, working with students of Kazakh National Academy of Choreography.",
    impact: "Cultural Bridge Building"
  },
  {
    year: "2025",
    project: "Karma - Mahabharata Interpretation",
    location: "Almaty, Kazakhstan",
    description: "Dramatic interpretation of the iconic conversation between Krishna and Arjun from Mahabharata in Kazakh language.",
    impact: "Philosophical Education"
  },
  {
    year: "Attended",
    project: "Professional Development Workshop",
    location: "Arena Stage, USA",
    description: "Attended teacher training workshops, bringing international best practices to Indian theatre education.",
    impact: "Educational Excellence"
  }
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* <CursorTrail /> */}
      {/* <AnimatedBackground /> */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black overflow-hidden pt-16 md:pt-0">
        {/* Background Image Grid */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-1 opacity-20">
          <div className="relative h-full">
            <Image src="/gallery/new/191.JPG" alt="Theater" fill className="object-cover" />
          </div>
          <div className="relative h-full">
            <Image src="/gallery/162.JPG" alt="Cinema" fill className="object-cover" />
          </div>
          <div className="relative h-full hidden md:block">
            <Image src="/gallery/83.JPG" alt="Festival" fill className="object-cover" />
          </div>
          <div className="relative h-full hidden md:block">
            <Image src="/gallery/new/179.JPG" alt="Portrait" fill className="object-cover" />
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
              Two Decades of
              <span className="block mt-2 bg-gradient-to-r from-pink-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
                Artistic Evolution
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-justify px-2">
              From theater stages to silver screens, every role has been a stepping stone in this remarkable journey of storytelling and performance.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 md:mt-12">
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">100+</div>
                <div className="text-xs md:text-sm text-gray-400">Stage Productions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">1500+</div>
                <div className="text-xs md:text-sm text-gray-400">Open-Air Shows</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">7+</div>
                <div className="text-xs md:text-sm text-gray-400">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">10+</div>
                <div className="text-xs md:text-sm text-gray-400">Years Teaching</div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div 
              className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer hidden sm:block"
              onClick={() => {
                const nextSection = document.querySelector('section:nth-of-type(2)');
                nextSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 hover:border-white/80 transition-colors">
                <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16 md:space-y-24">
            {experienceData.map((experience, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${experience.bgColor} rounded-2xl transform -rotate-3 transition-transform group-hover:rotate-0`} />
                    <div className="relative">
                      <Image
                        src={experience.image}
                        alt={experience.title}
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-xl transform transition-transform group-hover:scale-105 w-full"
                      />
                      <div className="absolute -top-2 md:-top-4 -left-2 md:-left-4 bg-gradient-to-r from-green-500 to-pink-500 text-white px-3 md:px-6 py-1 md:py-2 rounded-full font-bold text-sm md:text-base">
                        {experience.year}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">
                      {experience.title}
                    </h3>
                    <p className="text-base md:text-lg text-green-600 font-semibold mb-3 md:mb-4">{experience.role}</p>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-lg text-justify">{experience.description}</p>
                  </div>

                  <div>
                    {/* <h4 className="font-bold text-gray-800 mb-2 md:mb-3 text-sm md:text-base"></h4> */}
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {experience.projects.map((project, projectIndex) => (
                        <span
                          key={projectIndex}
                          className="bg-gradient-to-r from-green-100 to-pink-100 text-gray-700 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium hover:from-green-200 hover:to-pink-200 transition-colors"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Middle Banner */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-pink-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight">20 Years of Artistic Evolution</h2>
          <p className="text-base md:text-xl opacity-90 mb-6 md:mb-8 text-justify px-2">
            From backstage work in Patna to international stages in Kazakhstan - a journey spanning academia, performance, and cultural education
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold">100+</div>
              <div className="text-xs md:text-sm opacity-80">Stage Productions</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold">1500+</div>
              <div className="text-xs md:text-sm opacity-80">Open-Air Shows</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold">7+</div>
              <div className="text-xs md:text-sm opacity-80">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold">10+</div>
              <div className="text-xs md:text-sm opacity-80">Years Teaching</div>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneurial Initiatives */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
            Entrepreneurial & Educational Initiatives
          </h2>
          
          <div className="space-y-12 md:space-y-16">
            {entrepreneurshipData.map((venture, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="w-full lg:w-1/2">
                  <div className={`bg-gradient-to-br ${venture.bgColor} p-6 md:p-8 rounded-2xl shadow-lg`}>
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="text-3xl md:text-4xl mr-3 md:mr-4">{venture.icon}</div>
                      <div>
                        <div className="text-xs md:text-sm font-semibold text-gray-600 mb-1">{venture.category}</div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-800">{venture.title}</h3>
                      </div>
                    </div>
                    <p className="text-base md:text-lg font-semibold text-indigo-600 mb-3 md:mb-4">{venture.role}</p>
                    <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-justify text-sm md:text-base">{venture.description}</p>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">Key Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {venture.achievements.map((achievement, achIndex) => (
                          <span
                            key={achIndex}
                            className="bg-white/80 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="relative">
                    <div className="w-full h-48 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl md:text-6xl mb-3 md:mb-4">{venture.icon}</div>
                        <p className="font-medium text-sm md:text-base">{venture.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Projects */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800">
            International Projects
          </h2>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {internationalProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 md:p-6">
                  <div className="text-xl md:text-2xl font-bold mb-2">{project.year}</div>
                  <h3 className="text-lg md:text-xl font-semibold leading-tight">{project.project}</h3>
                  <p className="text-indigo-100 mt-2 text-sm md:text-base">{project.location}</p>
                </div>
                <div className="p-4 md:p-6">
                  <p className="text-gray-700 leading-relaxed mb-3 md:mb-4 text-justify text-sm md:text-base">{project.description}</p>
                  <div className="inline-block bg-gradient-to-r from-green-100 to-blue-100 text-gray-700 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium">
                    {project.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Impact */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight">Vision for Global Theatre Education</h2>
          <p className="text-base md:text-xl opacity-90 mb-4 md:mb-8 text-center px-2">
            "Education is not just about learning techniques; it's about building bridges between cultures and creating a global community of artists who understand both tradition and innovation."
          </p>
          <p className="text-base md:text-xl opacity-90 mb-4 md:mb-8 text-center px-2">
          "So Let's make a revolution in education with theatre and cinematic art education" 
          </p>
          <p className="text-sm md:text-lg opacity-80 text-center">- Kumar Sumitt</p>
        </div>
      </section>

      {/* Future Initiatives */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
            Future Initiatives & Goals
          </h2>
          
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🌐</div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-800">Global Theatre Academy</h3>
              <p className="text-gray-700 text-justify text-sm md:text-base">
                Establishing an international platform for cross-cultural theatre education, bringing together students and faculty from around the world.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">📱</div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-800">Digital Learning Platform</h3>
              <p className="text-gray-700 text-justify text-sm md:text-base">
                Creating online resources and virtual workshops to make traditional Indian theatre techniques accessible to global audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
