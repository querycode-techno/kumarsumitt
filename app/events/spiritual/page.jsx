"use client"

import Image from "next/image"
import Link from "next/link"
import { 
  ArrowLeft, 
  Heart, 
  Star, 
  Sun, 
  Moon, 
  Mountain, 
  Tree, 
  Wind,
  BookOpen,
  Flame,
  MapPin,
  Quote,
  Calendar,
  Users,
  Clock,
  ExternalLink,
  Compass,
  Lotus,
  Scroll
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const featuredEvent = {
  title: "Sacred Journey Through India",
  category: "Spiritual Exploration",
  description: "Join Kumar Sumitt as he shares profound insights from his transformative journey across India's sacred sites. Experience the wisdom gained through meditation, silence, and spiritual dialogue in this immersive session.",
  date: "August 15-17, 2024",
  venue: "Parmarth Niketan Ashram",
  location: "Rishikesh, Uttarakhand",
  duration: "3 days retreat",
  capacity: "100 participants",
  image: "/spiritual-rishikesh.png",
}

const journeyHighlights = [
  { number: "15+", label: "Sacred States" },
  { number: "50+", label: "Divine Temples" },
  { number: "1000+", label: "Meditation Hours" },
  { number: "100+", label: "Spiritual Dialogues" }
]

const spiritualSites = [
  {
    region: "North India",
    icon: <Compass className="h-6 w-6" />,
    description: "The mystical Himalayas and sacred rivers of the north",
    temples: [
      {
        name: "Shri Mata Vaishno Devi Temple",
        location: "Katra",
        state: "Jammu & Kashmir",
        description: "A divine journey through the mountains",
        image: "/placeholder.jpg"
      },
      {
        name: "Golden Temple",
        location: "Amritsar",
        state: "Punjab",
        description: "Harmony of spiritual equality",
        image: "/placeholder.jpg"
      },
      {
        name: "Brahma Temple",
        location: "Pushkar",
        state: "Rajasthan",
        description: "Rare shrine of the creator",
        image: "/placeholder.jpg"
      }
    ]
  },
  {
    region: "East India",
    icon: <Sun className="h-6 w-6" />,
    description: "Land of ancient wisdom and tantric traditions",
    temples: [
      {
        name: "Shri Baba Baidyanath Jyotirling Mandir",
        location: "Deoghar",
        state: "Jharkhand",
        description: "Sacred Jyotirlinga shrine",
        image: "/placeholder.jpg"
      },
      {
        name: "Tarapith Temple",
        location: "Tarapith",
        state: "West Bengal",
        description: "Center of Shakti worship",
        image: "/placeholder.jpg"
      },
      {
        name: "Dakshineshwar Kali Temple",
        location: "Kolkata",
        state: "West Bengal",
        description: "Spiritual awakening by the Ganges",
        image: "/placeholder.jpg"
      },
      {
        name: "Vishnupad Temple",
        location: "Gaya",
        state: "Bihar",
        description: "Sacred footprints of Lord Vishnu",
        image: "/placeholder.jpg"
      },
      {
        name: "Shri Badi Patandevi Temple",
        location: "Patna",
        state: "Bihar",
        description: "Ancient shrine of divine energy",
        image: "/placeholder.jpg"
      }
    ]
  },
  {
    region: "West India",
    icon: <Star className="h-6 w-6" />,
    description: "Blend of tradition and modern spirituality",
    temples: [
      {
        name: "Shri Siddhivinayak Temple",
        location: "Mumbai",
        state: "Maharashtra",
        description: "Divine blessings in the city",
        image: "/placeholder.jpg"
      },
      {
        name: "Shri Mumbadevi Temple",
        location: "Mumbai",
        state: "Maharashtra",
        description: "City's spiritual guardian",
        image: "/placeholder.jpg"
      },
      {
        name: "Dagdusheth Halwai Ganpati Mandir",
        location: "Pune",
        state: "Maharashtra",
        description: "Symbol of devotion and heritage",
        image: "/placeholder.jpg"
      },
      {
        name: "Shri Mahalakshmi Temple",
        location: "Mumbai",
        state: "Maharashtra",
        description: "Shrine of divine abundance",
        image: "/placeholder.jpg"
      }
    ]
  },
  {
    region: "Central & South India",
    icon: <Mountain className="h-6 w-6" />,
    description: "Sacred temples of divine energy and spiritual awakening",
    temples: [
      {
        name: "Maa Bamleshwari Temple",
        location: "Dongargarh",
        state: "Chhattisgarh",
        description: "Mountain shrine of divine mother",
        image: "/placeholder.jpg"
      },
      {
        name: "Annavaram Temple",
        location: "Annavaram",
        state: "Andhra Pradesh",
        description: "Hill shrine of Lord Veera Venkata Satyanarayana",
        image: "/placeholder.jpg"
      },
      {
        name: "Siddheshwar Dham",
        location: "Namchi",
        state: "Sikkim",
        description: "Spiritual paradise in the mountains",
        image: "/placeholder.jpg"
      }
    ]
  }
]

const spiritualInsights = [
  {
    quote: "Every sacred place I visited reminded me: the true temple is within.",
    reflection: "The journey taught me that divinity resides in our hearts, not just in stone structures.",
    icon: <Heart className="h-6 w-6" />,
    theme: "Inner Divinity"
  },
  {
    quote: "Silence taught me more than words ever could.",
    reflection: "In the depths of meditation, wisdom reveals itself naturally.",
    icon: <Moon className="h-6 w-6" />,
    theme: "Power of Silence"
  },
  {
    quote: "Nature became my greatest teacher.",
    reflection: "Mountains, rivers, and forests hold timeless spiritual wisdom.",
    icon: <Mountain className="h-6 w-6" />,
    theme: "Natural Wisdom"
  }
]

const spiritualLearnings = [
  {
    title: "Meditation Practice",
    description: "Daily meditation sessions at sacred sites revealed deeper layers of consciousness.",
    icon: <Moon className="h-8 w-8" />
  },
  {
    title: "Sacred Texts",
    description: "Study of ancient wisdom through spiritual manuscripts and teachings.",
    icon: <Scroll className="h-8 w-8" />
  },
  {
    title: "Divine Connection",
    description: "Experiencing oneness through prayer and contemplation.",
    icon: <Star className="h-8 w-8" />
  }
]

export default function SpiritualPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-black via-gray-600 to-black text-white">
      <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("/hero/b2.webp")`,
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Spiritual Visits</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            A transformative journey through India's sacred landscapes, exploring the depths of spirituality and inner wisdom.
          </p>
        </div>
      </section>

      {/* Journey Overview */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/gallery/1 (75).JPG"
                alt="Spiritual Journey"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Kumar Sumitt's Spiritual Journey Across India
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                From the Himalayas to coastal temples, Kumar Sumitt embarked on a profound journey of inner exploration. 
                Through meditation, silence, and spiritual dialogue, he discovered that true divinity lies not in ritual—but 
                in presence, compassion, and stillness.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {journeyHighlights.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-3xl font-bold text-green-600">{stat.number}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Sites */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Sacred Sites Visited</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spiritualSites.map((region, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4">
                    {region.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{region.region}</h3>
                    <p className="text-sm text-gray-600">{region.description}</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {region.temples.map((temple, tIndex) => (
                    <li key={tIndex} className="border-l-2 border-green-200 pl-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-pink-500 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-800">{temple.name}</p>
                          <p className="text-sm text-gray-500">{temple.location}, {temple.state}</p>
                          <p className="text-sm text-gray-600 mt-1">{temple.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Sacred Sites */}
      <section className="py-12 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-white rounded-xl shadow-md p-8">
            <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">And Many More Sacred Sites...</h3>
            <p className="text-gray-600">
              Kumar Sumitt's spiritual journey extends beyond these temples, encompassing numerous other 
              sacred sites across India. Each visit has contributed to a deeper understanding of 
              spirituality and inner transformation.
            </p>
            {/* <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Explore Full Journey
            </button> */}
          </div>
        </div>
      </section>

      {/* Spiritual Insights */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Spiritual Reflections</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {spiritualInsights.map((insight, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-8">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                  {insight.icon}
                </div>
                <Quote className="h-8 w-8 text-green-400 mb-4" />
                <p className="text-xl italic mb-4 text-gray-800">{insight.quote}</p>
                <p className="text-green-600 font-semibold">– Kumar Sumitt</p>
                <p className="text-gray-600 mt-4">{insight.reflection}</p>
                <p className="text-sm text-green-500 mt-2">{insight.theme}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Learnings */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Spiritual Learnings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {spiritualLearnings.map((learning, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-pink-600">{learning.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{learning.title}</h3>
                <p className="text-gray-600">{learning.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Join the Spiritual Journey</h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the transformative power of India's spiritual heritage through Kumar Sumitt's lens
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Book a Spiritual Workshop
          </button>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
