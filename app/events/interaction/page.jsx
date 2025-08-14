"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Clock, Users, ExternalLink, MessageCircle, Heart } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const featuredEvent = {
  title: "Meet & Greet with Kumar Sumitt",
  category: "Fan Interaction Event",
  description:
    "An intimate evening with Kumar Sumitt where fans can interact directly, ask questions about his journey, get autographs, and take photos. This special event includes a Q&A session, behind-the-scenes stories, and personal insights into the world of acting and filmmaking.",
  image: "/gallery/new/meet.jpeg",
}

const interactionEvents = [
  {
    id: 1,
    title: "Acting Workshop with Fans",
    year: "2024",
    description: "Interactive workshop where fans learn acting techniques directly from Kumar Sumitt.",
    venue: "Kanak Studio",
    location: "Patna",
    participants: "50",
    type: "Workshop",
    image: "/fan-workshop.png",
  },
  {
    id: 2,
    title: "Coffee Chat Sessions",
    year: "2023",
    description: "Casual coffee conversations with small groups of fans and aspiring actors.",
    venue: "Prithvi Theatre",
    location: "Mumbai",
    participants: "20",
    type: "Casual",
    image: "/coffee-chat.png",
  },
  {
    id: 3,
    title: "University Campus Visit",
    year: "2023",
    description: "Interactive session with drama students sharing experiences and career guidance.",
    venue: "St. Xavier's College",
    location: "Mumbai",
    participants: "300",
    type: "Educational",
    image: "/campus-visit.png",
  },
  {
    id: 4,
    title: "Book Reading & Discussion",
    year: "2022",
    description: "Reading from acting methodology books followed by open discussion.",
    venue: "Premchand Rangshala Patna",
    location: "Patna",
    participants: "80",
    type: "Literary",
    image: "/book-reading.png",
  },
  {
    id: 5,
    title: "Social Media Live Session",
    year: "2022",
    description: "Live Instagram session answering fan questions and sharing daily life.",
    venue: "Online Platform",
    location: "Virtual",
    participants: "5000+",
    type: "Digital",
    image: "/live-session.png",
  },
  {
    id: 6,
    title: "Charity Event Interaction",
    year: "2021",
    description: "Meeting supporters and volunteers at charity fundraising events.",
    venue: "Rainbow Homes",
    location: "Patna",
    participants: "150",
    type: "Charity",
    image: "/charity-event.png",
  },
]

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    event: "Acting Workshop 2024",
    quote:
      "Meeting Kumar Sumitt was a dream come true! His guidance during the workshop was invaluable, and he made everyone feel comfortable. Such a humble and inspiring person.",
    image: "/fan-priya.png",
  },
  {
    name: "Rahul Verma",
    location: "Delhi",
    event: "Campus Visit 2023",
    quote:
      "Kumar sir's visit to our college was incredible. He shared so many practical tips about acting and the industry. His down-to-earth nature really impressed all of us.",
    image: "/fan-rahul.png",
  },
  {
    name: "Anita Desai",
    location: "Bangalore",
    event: "Coffee Chat 2023",
    quote:
      "The coffee chat session was so personal and intimate. Kumar Sumitt answered all our questions patiently and even gave career advice. Truly a memorable experience!",
    image: "/fan-anita.png",
  },
  {
    name: "Vikram Singh",
    location: "Pune",
    event: "Meet & Greet 2022",
    quote:
      "I've been a fan for years, and finally meeting him was amazing. He remembered details from my previous messages and made the interaction so special. A true gentleman!",
    image: "/fan-vikram.png",
  },
]

const upcomingInteractions = [
  {
    title: "Meet & Greet with Kumar Sumitt",
    date: "July 20, 2024",
    venue: "Nehru Centre Auditorium",
    location: "Mumbai",
    type: "Fan Meet",
    status: "Registration Open",
  },
  {
    title: "Acting Masterclass for Fans",
    date: "August 10, 2024",
    venue: "Kanak Studio",
    location: "Patna",
    type: "Workshop",
    status: "Limited Seats",
  },
  {
    title: "College Campus Tour",
    date: "September 15, 2024",
    venue: "Various Colleges",
    location: "Patna",
    type: "Educational",
    status: "Planning",
  },
  {
    title: "Virtual Q&A Session",
    date: "October 5, 2024",
    venue: "Online Platform",
    location: "Virtual",
    type: "Digital",
    status: "Coming Soon",
  },
]

export default function InteractionPage() {
  return (
    <div className="minh-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen py-32 px-4 bg-gradient-to-br from-gray-500 via-gray-900 to-gray-600 text-white">
        {/* Full Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url("/hero/cc.JPG")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Link href="/events" className="flex items-center text-white hover:text-gray-200 mr-4">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Events
            </Link>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Open Air Performances</h1>
          <p className="text-xl text-gray-200">Outdoor theatre and public space performances</p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Event</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={featuredEvent.image || "/placeholder.svg"}
                  alt={featuredEvent.title}
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-green-600 font-semibold mb-2">{featuredEvent.category}</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{featuredEvent.title}</h3>
                <p className="text-gray-600 leading-relaxed">{featuredEvent.description}</p>
              </div>

              {/* <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center text-green-600 mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-semibold">Date</span>
                  </div>
                  <p className="text-gray-700">July 20, 2024</p>
                </div>
                <div>
                  <div className="flex items-center text-green-600 mb-1">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="font-semibold">Venue</span>
                  </div>
                  <p className="text-gray-700">Nehru Centre Auditorium</p>
                  <p className="text-gray-500 text-sm">Mumbai</p>
                </div>
                <div>
                  <div className="flex items-center text-green-600 mb-1">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="font-semibold">Duration</span>
                  </div>
                  <p className="text-gray-700">{featuredEvent.duration}</p>
                </div>
                <div>
                  <div className="flex items-center text-green-600 mb-1">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="font-semibold">Capacity</span>
                  </div>
                  <p className="text-gray-700">{featuredEvent.capacity}</p>
                </div>
              </div> */}

              {/* <div className="flex gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition-colors">
                  Event Details
                </button>
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md font-semibold transition-colors flex items-center">
                  Register Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Past Interaction Events */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Past Interaction Events</h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Event</th>
                    <th className="px-6 py-4 text-left font-semibold">Year</th>
                    <th className="px-6 py-4 text-left font-semibold">Type</th>
                    <th className="px-6 py-4 text-left font-semibold">Venue</th>
                    <th className="px-6 py-4 text-left font-semibold">Location</th>
                    <th className="px-6 py-4 text-left font-semibold">Participants</th>
                    <th className="px-6 py-4 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {interactionEvents.map((event) => (
                    <tr key={event.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-800">{event.title}</td>
                      <td className="px-6 py-4 text-gray-600">{event.year}</td>
                      <td className="px-6 py-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {event.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{event.venue}</td>
                      <td className="px-6 py-4 text-gray-600">{event.location}</td>
                      <td className="px-6 py-4 text-gray-600">{event.participants}</td>
                      <td className="px-6 py-4 text-gray-600 max-w-xs">
                        <p className="line-clamp-2">{event.description}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Fan Testimonials */}
      {/* <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Fan Testimonials</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-pink-500" />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-gray-700 italic mb-4 leading-relaxed">"{testimonial.quote}"</blockquote>
                    <div>
                      <cite className="font-semibold text-gray-800 not-italic">{testimonial.name}</cite>
                      <div className="text-sm text-gray-500">
                        {testimonial.location} • {testimonial.event}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Upcoming Interactions */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Upcoming Interactions</h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Event</th>
                    <th className="px-6 py-4 text-left font-semibold">Date</th>
                    <th className="px-6 py-4 text-left font-semibold">Venue</th>
                    <th className="px-6 py-4 text-left font-semibold">Type</th>
                    <th className="px-6 py-4 text-left font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingInteractions.map((interaction, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-800">{interaction.title}</td>
                      <td className="px-6 py-4 text-gray-600">{interaction.date}</td>
                      <td className="px-6 py-4 text-gray-600">
                        {interaction.venue}, {interaction.location}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{interaction.type}</td>
                      <td className="px-6 py-4">
                        {interaction.status === "Registration Open" || interaction.status === "Limited Seats" ? (
                          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors">
                            {interaction.status === "Limited Seats" ? "Register" : "Register"}
                          </button>
                        ) : (
                          <span className="text-gray-500 text-sm">{interaction.status}</span>
                        )}
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
