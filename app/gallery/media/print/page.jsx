"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Newspaper, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { printMediaItems } from "@/data/print"

const filterCategories = [
  { id: "all", label: "All" },
  { id: "interviews", label: "Interviews" },
  { id: "features", label: "Features" },
  { id: "news", label: "News" },
  { id: "reviews", label: "Reviews" },
  { id: "profiles", label: "Profiles" },
]

export default function PrintMediaPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedItem, setSelectedItem] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredItems = printMediaItems.filter((item) => activeFilter === "all" || item.category === activeFilter)

  // Handle item click to open modal
  const handleItemClick = (item, index) => {
    setSelectedItem(item)
    setCurrentIndex(index)
  }

  // Close modal
  const closeModal = () => {
    setSelectedItem(null)
    setCurrentIndex(0)
  }

  // Navigate to previous item
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
    setSelectedItem(filteredItems[newIndex])
    setCurrentIndex(newIndex)
  }

  // Navigate to next item
  const goToNext = () => {
    const newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1
    setSelectedItem(filteredItems[newIndex])
    setCurrentIndex(newIndex)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!selectedItem) return
    
    if (e.key === "Escape") {
      closeModal()
    } else if (e.key === "ArrowLeft") {
      goToPrevious()
    } else if (e.key === "ArrowRight") {
      goToNext()
    }
  }

  return (
    <div className="min-h-screen bg-white" onKeyDown={handleKeyDown} tabIndex={0}>
      <Navbar />

      {/* Hero Section */}
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/hero/b2.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
              Print Media
            </h1>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-green-500 to-pink-500 mx-auto rounded-full mb-6 md:mb-8" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-justify px-2">
              Print media from our performances and events
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === category.id
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Print Media Grid */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {activeFilter === "all" ? "All Print Media" : filterCategories.find(c => c.id === activeFilter)?.label}
            </h2>
            <p className="text-gray-600">
              Showing {filteredItems.length} of {printMediaItems.length} items
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handleItemClick(item, index)}
              >
                <div className="relative aspect-[3/4] bg-gray-200">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {item.type}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center text-gray-500">
                      <Newspaper className="h-4 w-4 mr-1" />
                      <span className="truncate">{item.publication}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Newspaper className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500">No print media items match the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-20 right-6 z-[60] bg-black/80 text-white p-4 rounded-full hover:bg-black transition-colors shadow-xl border-2 border-white/20"
            >
              <X className="h-7 w-7" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Container */}
            <div className="relative max-w-[70vw] max-h-[60vh] w-full h-full flex items-center justify-center">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                width={1000}
                height={700}
                className="max-w-full max-h-full object-contain rounded-lg"
                priority
              />
            </div>

            {/* Item Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 text-white rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{selectedItem.title}</h3>
              <p className="text-gray-200 mb-3">{selectedItem.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {selectedItem.year}
                </div>
                <div className="flex items-center gap-1">
                  <Newspaper className="h-4 w-4" />
                  {selectedItem.publication}
                </div>
                <div className="flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" />
                  {selectedItem.type}
                </div>
              </div>
            </div>

            {/* Item Counter */}
            <div className="absolute top-6 left-6 bg-black/70 text-white px-3 py-2 rounded-full text-sm shadow-lg">
              {currentIndex + 1} / {filteredItems.length}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
