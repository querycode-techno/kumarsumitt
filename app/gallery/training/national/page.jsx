"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play, Clock, MapPin, Users, Award, BookOpen, Target, X, ChevronLeft, ChevronRight, Camera, Video } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// National gallery items with photos and videos
const nationalGalleryItems = [
  // Photos
  {
    id: 1,
    type: "image",
    title: "Training Session with Students",
    description: "Interactive training session with aspiring actors",
    image: "/gallery/national/IMG_3475.JPG",
    year: "2024",
    venue: "National Training Center",
    category: "Training"
  },
  {
    id: 2,
    type: "image", 
    title: "Workshop in Progress",
    description: "Students learning advanced acting techniques",
    image: "/gallery/national/IMG_3598.JPG",
    year: "2024",
    venue: "Acting Workshop",
    category: "Workshop"
  },
  {
    id: 3,
    type: "image",
    title: "Group Training Session",
    description: "Collaborative learning environment with multiple participants",
    image: "/gallery/national/IMG-20210324-WA0023.jpg",
    year: "2023",
    venue: "Training Academy",
    category: "Training"
  },
  {
    id: 4,
    type: "image",
    title: "Individual Coaching",
    description: "One-on-one mentoring session with student",
    image: "/gallery/national/IMG-20210324-WA0015.jpg",
    year: "2023",
    venue: "Personal Coaching",
    category: "Coaching"
  },
  {
    id: 5,
    type: "image",
    title: "Training Workshop",
    description: "Comprehensive acting workshop session",
    image: "/gallery/national/IMG-20220304-WA0047.jpg",
    year: "2023",
    venue: "Workshop Center",
    category: "Workshop"
  },
  {
    id: 6,
    type: "image",
    title: "Acting Class",
    description: "Students in intensive acting class",
    image: "/gallery/national/IMG_20220307_104221.jpg",
    year: "2023",
    venue: "Acting School",
    category: "Training"
  },
  {
    id: 7,
    type: "image",
    title: "Performance Training",
    description: "Advanced performance techniques demonstration",
    image: "/gallery/national/IMG_E5891.JPG",
    year: "2023",
    venue: "Performance Academy",
    category: "Performance"
  },
  {
    id: 8,
    type: "image",
    title: "Group Exercise",
    description: "Team building and collaborative exercises",
    image: "/gallery/national/IMG_E3776.JPG",
    year: "2023",
    venue: "Training Center",
    category: "Training"
  },
  {
    id: 9,
    type: "image",
    title: "Skill Development",
    description: "Focus on developing specific acting skills",
    image: "/gallery/national/IMG_3552.JPG",
    year: "2023",
    venue: "Skill Center",
    category: "Training"
  },
  {
    id: 10,
    type: "image",
    title: "Advanced Techniques",
    description: "Teaching advanced acting methodologies",
    image: "/gallery/national/IMG_3541.JPG",
    year: "2023",
    venue: "Advanced Training",
    category: "Training"
  },
  {
    id: 11,
    type: "image",
    title: "Performance Workshop",
    description: "Hands-on performance workshop",
    image: "/gallery/national/CHMZ7361.JPG",
    year: "2023",
    venue: "Workshop Studio",
    category: "Workshop"
  },
  {
    id: 12,
    type: "image",
    title: "Training Session",
    description: "Comprehensive training session with students",
    image: "/gallery/national/IMG_2278.JPG",
    year: "2023",
    venue: "Training Academy",
    category: "Training"
  },
  {
    id: 13,
    type: "image",
    title: "Performance Practice",
    description: "Students practicing dramatic performances",
    image: "/gallery/national/IMG20220312173308.jpg",
    year: "2023",
    venue: "Performance Center",
    category: "Performance"
  },
  {
    id: 14,
    type: "image",
    title: "Acting Workshop",
    description: "Interactive acting workshop session",
    image: "/gallery/national/IMG_2140.JPG",
    year: "2023",
    venue: "Workshop Academy",
    category: "Workshop"
  },
  {
    id: 15,
    type: "image",
    title: "Training Demonstration",
    description: "Demonstrating acting techniques to students",
    image: "/gallery/national/IMG_2127.JPG",
    year: "2023",
    venue: "Training Studio",
    category: "Training"
  },
  {
    id: 16,
    type: "image",
    title: "Performance Training",
    description: "Advanced performance training session",
    image: "/gallery/national/IMG_2126.JPG",
    year: "2023",
    venue: "Performance Academy",
    category: "Performance"
  },
  {
    id: 17,
    type: "image",
    title: "Workshop Session",
    description: "Intensive workshop with participants",
    image: "/gallery/national/IMG_1142.JPG",
    year: "2023",
    venue: "Workshop Center",
    category: "Workshop"
  },
  {
    id: 18,
    type: "image",
    title: "Training Class",
    description: "Comprehensive training class session",
    image: "/gallery/national/IMG_0664.JPG",
    year: "2023",
    venue: "Training Academy",
    category: "Training"
  },
  {
    id: 19,
    type: "image",
    title: "With Students",
    description: "Group photo with training participants",
    image: "/gallery/national/With Students.jpg",
    year: "2023",
    venue: "Training Center",
    category: "Training"
  },
  {
    id: 20,
    type: "image",
    title: "Workshop Activity",
    description: "Active workshop session with students",
    image: "/gallery/national/IMG-20220319-WA0003.jpg",
    year: "2023",
    venue: "Workshop Studio",
    category: "Workshop"
  },
  {
    id: 21,
    type: "image",
    title: "Training Session",
    description: "Intensive training session with participants",
    image: "/gallery/national/IMG-20200107-WA0050.jpg",
    year: "2023",
    venue: "Training Academy",
    category: "Training"
  },
  {
    id: 22,
    type: "image",
    title: "Performance Practice",
    description: "Students practicing performance techniques",
    image: "/gallery/national/IMG-20200107-WA0041.jpg",
    year: "2023",
    venue: "Performance Center",
    category: "Performance"
  },
  {
    id: 23,
    type: "image",
    title: "Workshop Training",
    description: "Comprehensive workshop training session",
    image: "/gallery/national/IMG-20200107-WA0024.jpg",
    year: "2023",
    venue: "Workshop Academy",
    category: "Workshop"
  },
  {
    id: 24,
    type: "image",
    title: "Training Session",
    description: "Advanced training session with students",
    image: "/gallery/national/20170115_171850.jpg",
    year: "2023",
    venue: "Training Center",
    category: "Training"
  },

  // Videos
  {
    id: 25,
    type: "video",
    title: "Training Session Video",
    description: "Comprehensive training session recording",
    video: "/gallery/national/WhatsApp Video 2025-07-13 at 9.52.27 AM.mp4",
    year: "2024",
    venue: "National Training Center",
    category: "Training",
    // duration: "5:30"
  },
  {
    id: 26,
    type: "video",
    title: "Workshop Video",
    description: "Interactive workshop session recording",
    video: "/gallery/national/IWBW6477.MP4",
    year: "2024",
    venue: "Workshop Center",
    category: "Workshop",
    // duration: "3:45"
  },
  {
    id: 27,
    type: "video",
    title: "Performance Training Video",
    description: "Performance training session recording",
    video: "/gallery/national/UIFHE1215.MOV",
    year: "2024",
    venue: "Performance Academy",
    category: "Performance",
    // duration: "4:20"
  },
  {
    id: 28,
    type: "video",
    title: "Advanced Training Video",
    description: "Advanced acting techniques demonstration",
    video: "/gallery/national/XHTG8739.MP4",
    year: "2024",
    venue: "Advanced Training Center",
    category: "Training",
    // duration: "6:15"
  },
  {
    id: 29,
    type: "video",
    title: "Workshop Session Video",
    description: "Complete workshop session recording",
    video: "/gallery/national/YFOE5490.MP4",
    year: "2024",
    venue: "Workshop Studio",
    category: "Workshop",
    // duration: "7:30"
  },
  {
    id: 30,
    type: "video",
    title: "Training Demonstration Video",
    description: "Training techniques demonstration recording",
    video: "/gallery/national/EMRD5882.MP4",
    year: "2024",
    venue: "Training Academy",
    category: "Training",
    // duration: "5:45"
  },
  {
    id: 31,
    type: "video",
    title: "Performance Workshop Video",
    description: "Performance workshop session recording",
    video: "/gallery/national/VID-20220304-WA0049.mp4",
    year: "2024",
    venue: "Performance Center",
    category: "Performance",
    // duration: "8:20"
  }
]

const filterCategories = [
  { id: "all", label: "All", icon: BookOpen, count: nationalGalleryItems.length },
  { id: "photos", label: "Photos", icon: Camera, count: nationalGalleryItems.filter(item => item.type === "image").length },
  { id: "videos", label: "Videos", icon: Video, count: nationalGalleryItems.filter(item => item.type === "video").length },
]

export default function NationalTrainingPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedItem, setSelectedItem] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Filter items based on selected category
  const filteredItems = activeFilter === "all" 
    ? nationalGalleryItems 
    : activeFilter === "photos"
    ? nationalGalleryItems.filter(item => item.type === "image")
    : nationalGalleryItems.filter(item => item.type === "video")

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

      {/* Hero Section with Banner */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-black via-gray-800 to-gray-600 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/hero/b1.webp"
            alt="National Training Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5L60 40L95 40L68 60L78 95L50 75L22 95L32 60L5 40L40 40Z' fill='%23ffffff' fillOpacity='0.1'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          />
        </div> */}

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Link href="/gallery" className="flex items-center text-white/80 hover:text-white mr-4 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Gallery
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              National Training Gallery
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Explore Kumar Sumitt's comprehensive national training sessions through photos and videos. Click on any item to view in detail.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-2 text-green-200" />
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm text-green-200">Training Photos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Target className="h-8 w-8 mx-auto mb-2 text-green-200" />
                <div className="text-2xl font-bold">7</div>
                <div className="text-sm text-green-200">Training Videos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Award className="h-8 w-8 mx-auto mb-2 text-green-200" />
                <div className="text-2xl font-bold">32</div>
                <div className="text-sm text-green-200">Total Items</div>
              </div>
            </div>
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
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                    activeFilter === category.id
                      ? "bg-green-500 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    activeFilter === category.id
                      ? "bg-green-400 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}>
                    {category.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {activeFilter === "all" ? "Complete National Training Collection" : `${filterCategories.find(c => c.id === activeFilter)?.label} Collection`}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {activeFilter === "all" 
                ? "Browse through all photos and videos from Kumar Sumitt's national training sessions. Click on any item to view in detail."
                : `Showing ${filteredItems.length} ${activeFilter === "photos" ? "photo" : "video"}${filteredItems.length === 1 ? "" : "s"} from the national training collection.`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handleItemClick(item, index)}
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
                      src={item.image}
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
                      {item.category}
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
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
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

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <BookOpen className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500">No items match the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image/Video Modal */}
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

            {/* Content Container */}
            <div className="relative max-w-[70vw] max-h-[60vh] w-full h-full flex items-center justify-center">
              {selectedItem.type === "video" ? (
                <video
                  src={selectedItem.video}
                  controls
                  className="max-w-full max-h-full object-contain rounded-lg"
                  autoPlay
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  width={1000}
                  height={700}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  priority
                />
              )}
            </div>

            {/* Item Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 text-white rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{selectedItem.title}</h3>
              <p className="text-gray-200 mb-3">{selectedItem.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {selectedItem.year}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {selectedItem.venue}
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  {selectedItem.category}
                </div>
                {selectedItem.type === "video" && (
                  <div className="flex items-center gap-1">
                    <Play className="h-4 w-4" />
                    {selectedItem.duration}
                  </div>
                )}
              </div>
            </div>

            {/* Item Counter */}
            <div className="absolute top-6 left-6 bg-black/70 text-white px-3 py-2 rounded-full text-sm shadow-lg">
              {currentIndex + 1} / {filteredItems.length}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Acting Skills?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of actors who have enhanced their craft through these comprehensive training sessions.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Journey
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
