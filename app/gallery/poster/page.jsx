"use client"

import { useState } from "react"
import Image from "next/image"
import { Camera, Calendar, MapPin, Loader2, X, ChevronLeft, ChevronRight, ArrowUp, ArrowDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { posters } from "@/data/poster"

const ITEMS_PER_PAGE = 12

export default function PosterPage() {
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [sortOrder, setSortOrder] = useState('asc')

  // Reverse array when desc is selected (last images first)
  const posterItems = sortOrder === 'desc' ? [...posters].reverse() : posters
  
  const displayedItems = posterItems.slice(0, displayCount)
  const hasMoreItems = displayCount < posterItems.length

  const handleLoadMore = async () => {
    setIsLoading(true)
    
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setDisplayCount(prev => prev + ITEMS_PER_PAGE)
    setIsLoading(false)
  }

  // Handle image click to open modal
  const handleImageClick = (item) => {
    const actualIndex = posterItems.findIndex(p => p.id === item.id)
    setSelectedImage(item)
    setCurrentImageIndex(actualIndex >= 0 ? actualIndex : 0)
  }

  // Close modal
  const closeModal = () => {
    setSelectedImage(null)
    setCurrentImageIndex(0)
  }

  // Navigate to previous image
  const goToPrevious = () => {
    const newIndex = currentImageIndex === 0 ? posterItems.length - 1 : currentImageIndex - 1
    setSelectedImage(posterItems[newIndex])
    setCurrentImageIndex(newIndex)
  }

  // Navigate to next image
  const goToNext = () => {
    const newIndex = currentImageIndex === posterItems.length - 1 ? 0 : currentImageIndex + 1
    setSelectedImage(posterItems[newIndex])
    setCurrentImageIndex(newIndex)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!selectedImage) return
    
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

      <section className="relative min-h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden ">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/hero/b1.webp")',
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#000",
          }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
                Posters & Artwork
              </h1>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-green-500 to-pink-500 mx-auto rounded-full mb-6 md:mb-8" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-justify px-2">
            Explore Kumar Sumitt's collection of theatrical posters, film artwork, and creative designs showcasing artistic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <span className="text-gray-700 font-medium">Sort Order:</span>
            <button
              onClick={() => {
                setSortOrder('asc')
                setDisplayCount(ITEMS_PER_PAGE)
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                sortOrder === 'asc'
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              <ArrowUp className="h-5 w-5" />
              Up (First to Last)
            </button>
            <button
              onClick={() => {
                setSortOrder('desc')
                setDisplayCount(ITEMS_PER_PAGE)
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                sortOrder === 'desc'
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              <ArrowDown className="h-5 w-5" />
              Down (Last to First)
            </button>
          </div>
        </div>
      </section>

      {/* Certificate Grid */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              All Posters
            </h2>
            <p className="text-gray-600">
              Showing {displayedItems.length} of {posterItems.length} {posterItems.length === 1 ? "poster" : "posters"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                onClick={() => handleImageClick(item)}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Poster
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <Camera className="h-12 w-12 mx-auto mb-2 text-white/80" />
                      <p className="text-sm font-medium">View Poster</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-center">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreItems && (
            <div className="text-center mt-12">
              <button 
                onClick={handleLoadMore}
                disabled={isLoading}
                className="bg-green-500 hover:bg-green-600 disabled:bg-green-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Loading More...
                  </>
                ) : (
                  "Load More Posters"
                )}
              </button>
            </div>
          )}

          {/* All Items Loaded Message */}
          {!hasMoreItems && posterItems.length > ITEMS_PER_PAGE && (
            <div className="text-center mt-12">
              <p className="text-gray-600 text-sm">
                You've reached the end! All {posterItems.length} posters have been loaded.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedImage && (
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

            {/* Certificate Image Container */}
            <div className="relative max-w-[80vw] max-h-[80vh] w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={800}
                height={1000}
                className="max-w-full max-h-full object-contain rounded-lg"
                priority
              />
            </div>

            {/* Certificate Info */}
        

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-full text-sm shadow-lg">
              {currentImageIndex + 1} / {posterItems.length}
            </div>
          </div>
        </div>
      )}

    

      <Footer />
    </div>
  )
}