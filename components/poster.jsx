import React, { useState } from 'react'
import Image from 'next/image'

const Poster = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const posterImages = [
    '/assets/poster/mungeruilalKeHaseenSapne.jpeg',
    '/assets/poster/juliuscaesar.jpeg',
    '/assets/poster/asYouLikeIt.jpeg',
    '/assets/poster/balaRamayanam.jpeg',
    '/assets/poster/malgudiDays.jpeg',
    '/assets/poster/ayyoPapam.jpeg',
    '/assets/poster/Patolbabufilmstar.jpeg',
    '/assets/poster/OYLM3464.PNG',
    '/assets/poster/SITARAM.jpeg',
    '/assets/poster/sitaRAM.JPG',
    '/assets/poster/SarvajanikUniversityDramaworkshopPoster.jpeg',
    '/assets/poster/StruggleDon\'tQuit .jpg',
    // '/assets/poster/litti_choka.png'
  ]

  const openModal = (index) => {
    setCurrentIndex(index)
    setSelectedImage(posterImages[index])
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % posterImages.length
    setCurrentIndex(nextIndex)
    setSelectedImage(posterImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? posterImages.length - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
    setSelectedImage(posterImages[prevIndex])
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    } else if (e.key === 'ArrowRight') {
      nextImage()
    } else if (e.key === 'ArrowLeft') {
      prevImage()
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Poster Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posterImages.slice(0, 16).map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={image}
                  alt={`Poster ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-90 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-gray-800">
                      Poster {index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white text-3xl md:text-4xl hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
            >
              ×
            </button>

            {/* Navigation Info */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 text-white text-base md:text-lg bg-black bg-opacity-50 px-3 py-1 rounded-full">
              {currentIndex + 1} / {posterImages.length}
            </div>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 md:p-3 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 md:p-3 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Container */}
            <div 
              className="relative w-full h-full flex items-center justify-center px-12 md:px-20 lg:px-32"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt={`Poster ${currentIndex + 1}`}
                width={800}
                height={1000}
                className="max-w-full max-h-full object-contain rounded-lg"
                priority
                style={{
                  maxHeight: 'calc(100vh - 120px)',
                  maxWidth: 'calc(100vw - 80px)'
                }}
              />
            </div>

            {/* Keyboard Navigation Hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs md:text-sm text-center bg-black bg-opacity-50 px-3 py-1 rounded-full">
              Use ← → arrow keys or click buttons to navigate • Press ESC to close
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Poster
