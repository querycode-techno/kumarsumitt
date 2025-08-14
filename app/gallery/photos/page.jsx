"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Calendar, Camera, Video, MapPin, Loader2, X, ChevronLeft, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { galleryPhotos } from "@/data/galleryPhotos"

const filterCategories = [
  { id: "all", label: "All", icon: Camera },
  { id: "photos", label: "Photos", icon: Camera },
  { id: "videos", label: "Videos", icon: Video },
]

// Only 3 videos as requested
const videoItems = [
  {
    id: "video-1",
    type: "video",
    category: "performance-highlights",
    image: "/dramatic-stage-performer.png",
    year: "2024",
    venue: "National Theatre",
    duration: "3:45"
  },
  {
    id: "video-2",
    type: "video",
    category: "performance-highlights",
    image: "/dramatic-film-scene.png",
    year: "2024",
    venue: "Feature Film",
    duration: "2:30"
  },
  {
    id: "video-3",
    type: "video",
    category: "performance-highlights",
    image: "/stage-performance.png",
    year: "2023",
    venue: "Arts Festival",
    duration: "4:15"
  }
]

// Convert gallery photos to the correct format
const photoItems = galleryPhotos.map(photo => ({
  ...photo,
  type: "image",
  id: `photo-${photo.id}`
}))

// Combine videos and photos
const galleryItems = [...videoItems, ...photoItems]

const ITEMS_PER_PAGE = 9

export default function PhotosVideosPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === "all") return true
    if (activeFilter === "photos") return item.type === "image"
    if (activeFilter === "videos") return item.type === "video"
    return true
  })
  
  const displayedItems = filteredItems.slice(0, displayCount)
  const hasMoreItems = displayCount < filteredItems.length

  const handleLoadMore = async () => {
    setIsLoading(true)
    
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setDisplayCount(prev => prev + ITEMS_PER_PAGE)
    setIsLoading(false)
  }

  // Reset display count when filter changes
  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId)
    setDisplayCount(ITEMS_PER_PAGE)
  }

  // Handle image click to open modal
  const handleImageClick = (item, index) => {
    if (item.type === "image") {
      setSelectedImage(item)
      setCurrentImageIndex(index)
    }
  }

  // Close modal
  const closeModal = () => {
    setSelectedImage(null)
    setCurrentImageIndex(0)
  }

  // Navigate to previous image
  const goToPrevious = () => {
    const imageItems = filteredItems.filter(item => item.type === "image")
    const currentIndex = imageItems.findIndex(item => item.id === selectedImage.id)
    const newIndex = currentIndex === 0 ? imageItems.length - 1 : currentIndex - 1
    setSelectedImage(imageItems[newIndex])
    setCurrentImageIndex(newIndex)
  }

  // Navigate to next image
  const goToNext = () => {
    const imageItems = filteredItems.filter(item => item.type === "image")
    const currentIndex = imageItems.findIndex(item => item.id === selectedImage.id)
    const newIndex = currentIndex === imageItems.length - 1 ? 0 : currentIndex + 1
    setSelectedImage(imageItems[newIndex])
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/gallery/new/banner.jpg")',
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
              Photos & Videos
            </h1>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-green-500 to-pink-500 mx-auto rounded-full mb-6 md:mb-8" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-justify px-2">
              Photos and videos from our performances and events
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {filterCategories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => handleFilterChange(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                    activeFilter === category.id
                      ? "bg-green-500 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {activeFilter === "all" ? "All Media" : filterCategories.find(c => c.id === activeFilter)?.label}
            </h2>
            <p className="text-gray-600">
              Showing {displayedItems.length} of {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick(item, index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {item.type === "video" ? (
                    // Video placeholder
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Play className="h-16 w-16 mx-auto mb-2 opacity-80" />
                        <p className="text-sm font-medium">Video</p>
                        <p className="text-xs opacity-75">{item.duration}</p>
                      </div>
                    </div>
                  ) : (
                    // Photo display
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}

                  {/* Video Indicator */}
                  {item.type === "video" && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                        <Play className="h-3 w-3" />
                        {item.duration}
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {item.category ? item.category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase()) : "Media"}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      {item.type === "video" ? (
                        <Play className="h-12 w-12 mx-auto mb-2 text-white/80" />
                      ) : (
                        <Camera className="h-12 w-12 mx-auto mb-2 text-white/80" />
                      )}
                      <p className="text-sm font-medium">
                        {item.type === "video" ? "Play Video" : "View Image"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {item.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {item.venue}
                    </div>
                  </div>
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
                  "Load More Content"
                )}
              </button>
            </div>
          )}

          {/* All Items Loaded Message */}
          {!hasMoreItems && filteredItems.length > ITEMS_PER_PAGE && (
            <div className="text-center mt-12">
              <p className="text-gray-600 text-sm">
                You've reached the end! All {filteredItems.length} items have been loaded.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button - Enhanced positioning and visibility */}
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

            {/* Image Container - Made Smaller */}
            <div className="relative max-w-[70vw] max-h-[60vh] w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={1000}
                height={700}
                className="max-w-full max-h-full object-contain rounded-lg"
                priority
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 text-white rounded-lg">
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {selectedImage.year}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {selectedImage.venue}
                </div>
                <div className="flex items-center gap-1">
                  <Camera className="h-4 w-4" />
                  {selectedImage.category ? selectedImage.category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase()) : "Media"}
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-full text-sm shadow-lg">
              {currentImageIndex + 1} / {filteredItems.filter(item => item.type === "image").length}
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">100+</div>
              <div className="text-gray-600">Performance Photos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">3</div>
              <div className="text-gray-600">Video Excerpts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">100+</div>
              <div className="text-gray-600">Gallery Images</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">103</div>
              <div className="text-gray-600">Total Media Items</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}