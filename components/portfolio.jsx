"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Camera } from "lucide-react"

const portfolioImages = [
  {
    id: 0,
    src: "/assets/barka.jpg",
    alt: "Portfolio Image 0"
  },
  {
    id: 1,
    src: "/assets/a.jpg",
    alt: "Portfolio Image 1"
  },
  {
    id: 2,
    src: "/assets/b.jpg",
    alt: "Portfolio Image 2"
  },
  {
    id: 3,
    src: "/assets/cc.jpg",
    alt: "Portfolio Image 3"
  },
  // {
  //   id: 4,
  //   src: "/assets/d.jpg",
  //   alt: "Portfolio Image 4"
  // },
  
  {
    id: 5,
    src: "/assets/about1.jpg",
    alt: "Portfolio Image 5"
  },
  {
    id: 6,
    src: "/assets/g.jpg",
    alt: "Portfolio Image 6"
  },
  {
    id: 7,
    src: "/assets/g14.jpg",
    alt: "Portfolio Image 7"
  },
  {
    id: 8,
    src: "/assets/g13.jpg",
    alt: "Portfolio Image 8"
  },
  {
    id: 9,
    src: "/assets/g12.jpg",
    alt: "Portfolio Image 9"
  },
  {
    id: 10,
    src: "/assets/g11.jpg",
    alt: "Portfolio Image 10"
  },
  {
    id: 11,
    src: "/assets/gg10.jpg",
    alt: "Portfolio Image 11"
  },
  {
    id: 12,
    src: "/assets/g9.jpg",
    alt: "Portfolio Image 12"
  },
  {
    id: 13,
    src: "/assets/g8.jpg",
    alt: "Portfolio Image 13"
  },
  {
    id: 14,
    src: "/assets/g7.jpg",
    alt: "Portfolio Image 14"
  },
  {
    id: 15,
    src: "/assets/g6.jpg",
    alt: "Portfolio Image 15"
  },
  {
    id: 16,
    src: "/assets/g2.jpg",
    alt: "Portfolio Image 16"
  },
  {
    id: 17,
    src: "/assets/g1.jpg",
    alt: "Portfolio Image 17"
  },
  {
    id: 18,
    src: "/assets/about.jpg",
    alt: "Portfolio Image 18"
  },
  {
    id: 19,
    src: "/assets/g5.jpg",
    alt: "Portfolio Image 19"
  },
  {
    id: 20,
    src: "/assets/g4.jpg",
    alt: "Portfolio Image 20"
  },
  {
    id: 21,
    src: "/assets/g3.jpg",
    alt: "Portfolio Image 21"
  },
  {
    id: 22,
    src: "/gallery/new/i.JPG",
    alt: "Portfolio Image 22"
  },
  {
    id: 23,
    src: "/gallery/new/j.jpg",
    alt: "Portfolio Image 23"
  }
]

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null)

  const openImageModal = (image) => {
    setSelectedImage(image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="py-12 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-pink-500">Portfolio</h2>
        </div>

        {/* Portfolio Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {portfolioImages.map((image) => (
            <div 
              key={image.id} 
              className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group relative bg-green-700/30 backdrop-blur-md"
              onClick={() => openImageModal(image)}
            >
              <div className="relative w-full" style={{ height: "340px" }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                
                {/* Camera Icon Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <Camera className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4">
            <div className="relative bg-white rounded-lg max-w-md md:max-w-lg w-full max-h-[80vh] overflow-hidden">
              {/* Close Button */}
              <button 
                onClick={closeImageModal}
                className="absolute top-2 right-2 z-10 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors shadow-lg"
              >
                <X className="h-4 w-4" />
              </button>
              
              {/* Image */}
              <div className="p-4">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={400}
                  height={500}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
