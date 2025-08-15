"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Play } from "lucide-react"

const events = [
  {
    id: 0,
    title: "Supna Ka Sapna",
    year: "2021",
    role: "Kumar Sumitt",
    iframe: "https://www.youtube.com/embed/wx-xLWNFM2U?si=J4LzTQ8cHdYNMskx",
  },
  {
    id: 1,
    title: "The blue umbrella",
    year: "2023",
    role: "Kumar Sumitt",
    iframe: "https://www.youtube.com/embed/auO53iCgYK0?si=7TNtCOewIFwAXTF-",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "GUSTO Part 2",
    year: "2023",
    role: "Kumar Sumitt",
    iframe: "https://www.youtube.com/embed/WqupanpPDiM?si=3OdvLsfs3AYkp6ya",
    image: "/placeholder.svg",
  },
  // {
  //   id: 3,
  //   title: "Nasha: A Secret Mission",
  //   year: "2016",
  //   type: "Short Film",
  //   description: "An intriguing Hindi short film exploring mystery and suspense.",
  //   platform: "Film Festivals",
  //   role: "Lead Actor",
  //   iframe: "https://www.youtube.com/embed/QKKWze1TVAY?si=eQi_8F9xrX1bb_84",
  // },
]

export default function EventsShows() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const openEventModal = (event) => {
    setSelectedEvent(event)
  }

  const closeEventModal = () => {
    setSelectedEvent(null)
  }

  return (
    <section className="py-12 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-pink-500">Events & Shows</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Upcoming and recent performances, appearances, and special events
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group relative"
              onClick={() => openEventModal(event)}
            >
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
                {/* Iframe Preview */}
                <iframe
                  src={event.iframe}
                  title={event.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {/* Play Icon Overlay */}
                <div className="flex items-center justify-center z-10 absolute inset-0">
                  <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300 opacity-90">
                    <Play className="h-10 w-10 text-white ml-1" />
                  </div>
                </div>
                {/* <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold z-20">
                  {event.role}
                </div> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{event.year}</span>
                  <span className="text-green-600 font-semibold">{event.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
              {/* Close Button */}
              <button 
                onClick={closeEventModal}
                className="absolute top-4 right-4 z-20 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors shadow-lg"
              >
                <X className="h-5 w-5" />
              </button>
              
              {/* Modal Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{selectedEvent.title}</h3>
                
                {/* Video Player */}
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-4">
                  <iframe
                    src={selectedEvent.iframe}
                    title={selectedEvent.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
                
                {/* Event Details */}
                <div className="space-y-2 text-gray-600">
                  <p className="text-sm"><strong>Role:</strong> {selectedEvent.role}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-green-600 font-semibold">{selectedEvent.role}</span>
                    <span className="text-gray-500">{selectedEvent.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View More Button */}
        <div className="text-center">
          <Link href="/events/screen">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-semibold transition-colors">
              View All Events
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
