"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play, Calendar, MapPin, Clock, Users, ExternalLink, Sun } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function OpenAirPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Keeping this unchanged */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-gray-500 via-gray-900 to-gray-600 text-white">
        {/* Full Background Image */}
        <div 
          className="absolute top-20 inset-0 w-full h-full"
          style={{
            backgroundImage: `url("/hero/bb.JPG")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/10" />
        
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

      {/* Kumar Sumitt's Legacy Section - Redesigned */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Kumar Sumitt's Street Theatre Legacy
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Transforming communities through 1,500+ powerful open-air performances
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Community Engagement</h3>
              <p className="text-gray-600">Sparked meaningful conversations and raised awareness through interactive performances</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <Play className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Interactive Theatre</h3>
              <p className="text-gray-600">Engaged communities through dynamic and participatory street performances</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Sun className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Social Impact</h3>
              <p className="text-gray-600">Inspired action through thought-provoking storytelling and artistic expression</p>
            </div>
          </div>

          {/* Social Themes */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Themes Addressing Social Change
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Child Labour',
                'Dowry',
                'Women Empowerment',
                'Education',
                'Environmental Conservation',
                'Human Trafficking',
                'Child Marriage',
                'Poverty',
                'Cleanliness',
                'Domestic Violence',
                'Paryawaran',
                'Government Campaigns'
              ].map((theme, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg px-4 py-3 text-gray-700 
                           flex items-center justify-center text-center transform hover:scale-105 transition-transform duration-300
                           shadow-sm hover:shadow-md"
                >
                  {theme}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
