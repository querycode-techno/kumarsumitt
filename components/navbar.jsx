"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"

// Simple, clean dropdown component that matches your design
const DropdownMenu = ({ isOpen, children, className = "" }) => {
  if (!isOpen) return null
  
  return (
    <div className={`absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border z-[9999] ${className}`}>
      <div className="py-2">
        {children}
      </div>
    </div>
  )
}

// Clean dropdown link component
const DropdownLink = ({ href, children, onClick }) => (
  <Link 
    href={href} 
    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
)

// Mobile accordion (improved with single open state and green hover)
const MobileAccordion = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex items-center justify-between w-full text-left text-gray-800 font-medium py-3 hover:bg-green-50 hover:text-green-600 transition-colors rounded-lg"
        onClick={onToggle}
      >
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="py-2 px-2 bg-green-50/50 rounded-lg mb-2 space-y-1">
          {children}
        </div>
      )}
    </div>
  )
}

// Main Navbar Component (add openMobileAccordion state)
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [openMobileAccordion, setOpenMobileAccordion] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [mobileMenuOpen])

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(menuName)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 500)
  }

  const closeDropdown = () => setActiveDropdown(null)

  const handleMobileAccordionToggle = (accordionName) => {
    setOpenMobileAccordion(prev => prev === accordionName ? null : accordionName)
  }

  // Handle mobile menu animations
  const openMobileMenu = () => {
    setMobileMenuOpen(true)
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const closeMobileMenu = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setMobileMenuOpen(false)
      setOpenMobileAccordion(null)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Kumar Sumit Logo"
              width={100}
              height={100}
              className="object-contain hover:scale-105 transition-transform"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-green-600 font-medium transition-colors">
              Home
            </Link>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-800 hover:text-green-600 font-medium transition-colors">
                About
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              <DropdownMenu isOpen={activeDropdown === 'about'}>
                <DropdownLink href="/about/personal" onClick={closeDropdown}>Personal Details</DropdownLink>
                <DropdownLink href="/about/experience" onClick={closeDropdown}>Academic and Experience</DropdownLink>
                <DropdownLink href="/about/artistic" onClick={closeDropdown}>Artistic Details</DropdownLink>
                <DropdownLink href="/about/entrepreneurship" onClick={closeDropdown}>Entrepreneurship</DropdownLink>
              </DropdownMenu>
            </div>

            {/* Gallery Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('gallery')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-800 hover:text-green-600 font-medium transition-colors">
                Gallery
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'gallery' ? 'rotate-180' : ''}`} />
              </button>
              <DropdownMenu isOpen={activeDropdown === 'gallery'} className="w-72">
                <DropdownLink href="/gallery/photos" onClick={closeDropdown}>Photos & Videos</DropdownLink>
                <DropdownLink href="/gallery/poster" onClick={closeDropdown}>Posters</DropdownLink>
                <div className="px-4 py-2">
                  <div className="text-xs font-extrabold text-black mb-2">TRAINING PHOTOS/VIDEOS</div>
                  <DropdownLink href="/gallery/training/national" onClick={closeDropdown}>National/International</DropdownLink>
                  {/* <DropdownLink href="/gallery/training/international" onClick={closeDropdown}>International</DropdownLink> */}
                </div>
                <div className="px-4 py-2">
                  <div className="text-xs font-extrabold text-black mb-2">MEDIA</div>
                  <DropdownLink href="/gallery/media/print" onClick={closeDropdown}>Print Media</DropdownLink>
                </div>
              </DropdownMenu>
            </div>

            {/* Events & Shows Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('events')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-800 hover:text-green-600 font-medium transition-colors">
                Events & Shows
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'events' ? 'rotate-180' : ''}`} />
              </button>
              <DropdownMenu isOpen={activeDropdown === 'events'}>
                <DropdownLink href="/events/stage" onClick={closeDropdown}>Stage Shows</DropdownLink>
                <DropdownLink href="/events/screen" onClick={closeDropdown}>On Screen</DropdownLink>
                <DropdownLink href="/events/open-air" onClick={closeDropdown}>Open Air Performances</DropdownLink>
                <DropdownLink href="/events/interaction" onClick={closeDropdown}>Public Interaction</DropdownLink>
                <DropdownLink href="/events/spiritual" onClick={closeDropdown}>Spiritual Visits</DropdownLink>
                <DropdownLink href="/events/festivals" onClick={closeDropdown}>Festival Participation</DropdownLink>
                <DropdownLink href="/events/training" onClick={closeDropdown}>Training Sessions</DropdownLink>
              </DropdownMenu>
            </div>

            {/* Portfolio Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('portfolio')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-800 hover:text-green-600 font-medium transition-colors">
                Portfolio
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'portfolio' ? 'rotate-180' : ''}`} />
              </button>
              <DropdownMenu isOpen={activeDropdown === 'portfolio'}>
                <DropdownLink href="/portfolio/actor" onClick={closeDropdown}>Actor</DropdownLink>
                <DropdownLink href="/portfolio/director" onClick={closeDropdown}>Director</DropdownLink>
                <DropdownLink href="/portfolio/entrepreneur" onClick={closeDropdown}>Entrepreneur</DropdownLink>
                <DropdownLink href="/portfolio/research" onClick={closeDropdown}>Research & Publications</DropdownLink>
              </DropdownMenu>
            </div>

            {/* Awards Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('awards')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-800 hover:text-green-600 font-medium transition-colors">
                Awards
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'awards' ? 'rotate-180' : ''}`} />
              </button>
              <DropdownMenu isOpen={activeDropdown === 'awards'}>
                <DropdownLink href="/awards/actor" onClick={closeDropdown}>Awards</DropdownLink>
                {/* <DropdownLink href="/awards/director" onClick={closeDropdown}>As a Director</DropdownLink>
                <DropdownLink href="/awards/trainer" onClick={closeDropdown}>As a Trainer</DropdownLink> */}
                <DropdownLink href="/awards/institution" onClick={closeDropdown}>Institution Visits</DropdownLink>
                <DropdownLink href="/awards/certificate" onClick={closeDropdown}>Certificate</DropdownLink>
              </DropdownMenu>
            </div>

            <Link href="/contact" className="text-gray-800 hover:text-green-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-800 hover:text-green-600 transition-colors"
            onClick={() => mobileMenuOpen ? closeMobileMenu() : openMobileMenu()}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - App-style slide from left */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-[90]" 
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-50' : 'opacity-0'
            }`}
            onClick={closeMobileMenu}
          />
          
          {/* Sliding Menu */}
          <div 
            className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
              mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            onClick={e => e.stopPropagation()}
            style={{ 
              height: '100vh', 
              overflow: 'hidden',
              boxShadow: '4px 0 20px rgba(0, 0, 0, 0.15)'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-600 to-green-700 text-white">
              <div className="flex items-center space-x-3">
                <Image 
                  src="/logo.png" 
                  alt="Logo" 
                  width={50} 
                  height={50} 
                  className="rounded-lg bg-white/10 p-1"
                />
                <div><h3 className="font-bold text-lg">Kumar Sumitt</h3>    
                </div>
              </div>
              <button 
                onClick={closeMobileMenu}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Navigation Content */}
            <div 
              className="overflow-y-auto px-4 py-4 bg-gray-50"
              style={{ 
                height: 'calc(100vh - 100px)', 
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <nav className="space-y-2">
                {/* Home */}
                <Link 
                  href="/" 
                  className="flex items-center py-3 px-4 text-gray-800 font-medium hover:bg-white hover:text-green-600 rounded-xl transition-all duration-200 hover:shadow-sm" 
                  onClick={closeMobileMenu}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Home
                </Link>
                
                {/* About Accordion */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full text-left text-gray-800 font-medium py-4 px-4 hover:bg-gray-50 transition-colors"
                    onClick={() => handleMobileAccordionToggle('about')}
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>About</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openMobileAccordion === 'about' ? "rotate-180" : ""}`} />
                  </button>
                  {openMobileAccordion === 'about' && (
                    <div className="bg-gray-50 px-4 pb-3 space-y-1">
                      <Link href="/about/personal" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>Personal Details</Link>
                      <Link href="/about/experience" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>Academic and Experience</Link>
                      <Link href="/about/artistic" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>Artistic Details</Link>
                      <Link href="/about/entrepreneurship" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>Entrepreneurship</Link>
                    </div>
                  )}
                </div>

                {/* Gallery Accordion */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full text-left text-gray-800 font-medium py-4 px-4 hover:bg-gray-50 transition-colors"
                    onClick={() => handleMobileAccordionToggle('gallery')}
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span>Gallery</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openMobileAccordion === 'gallery' ? "rotate-180" : ""}`} />
                  </button>
                  {openMobileAccordion === 'gallery' && (
                    <div className="bg-gray-50 px-4 pb-3 space-y-2">
                      <Link href="/gallery/photos" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>Photos & Videos</Link>
                      <div>
                        <div className="text-xs font-bold text-gray-500 mb-1 px-3 mt-3">TRAINING VIDEOS</div>
                        <Link href="/gallery/training/national" className="block py-1.5 px-6 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors text-sm" onClick={closeMobileMenu}>National/International</Link>
                        {/* <Link href="/gallery/training/international" className="block py-1.5 px-6 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors text-sm" onClick={closeMobileMenu}>International</Link> */}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 mb-1 px-3 mt-3">MEDIA</div>
                        <Link href="/gallery/media/print" className="block py-1.5 px-6 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors text-sm" onClick={closeMobileMenu}>Print Media</Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Events & Shows Accordion */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full text-left text-gray-800 font-medium py-4 px-4 hover:bg-gray-50 transition-colors"
                    onClick={() => handleMobileAccordionToggle('events')}
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Events & Shows</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openMobileAccordion === 'events' ? "rotate-180" : ""}`} />
                  </button>
                  {openMobileAccordion === 'events' && (
                    <div className="bg-gray-50 px-4 pb-3 space-y-1">
                      <Link href="/events/stage" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>Stage Shows</Link>
                      <Link href="/events/screen" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>On Screen</Link>
                      <Link href="/events/open-air" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>Open Air Performances</Link>
                      <Link href="/events/interaction" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>Public Interaction</Link>
                      <Link href="/events/spiritual" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>Spiritual Visits</Link>
                      <Link href="/events/festivals" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>Festival Participation</Link>
                      <Link href="/events/training" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>Training Sessions</Link>
                    </div>
                  )}
                </div>

                {/* Portfolio Accordion */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full text-left text-gray-800 font-medium py-4 px-4 hover:bg-gray-50 transition-colors"
                    onClick={() => handleMobileAccordionToggle('portfolio')}
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      <span>Portfolio</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openMobileAccordion === 'portfolio' ? "rotate-180" : ""}`} />
                  </button>
                  {openMobileAccordion === 'portfolio' && (
                    <div className="bg-gray-50 px-4 pb-3 space-y-1">
                      <Link href="/portfolio/actor" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>Actor</Link>
                      <Link href="/portfolio/director" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>Director</Link>
                      <Link href="/portfolio/entrepreneur" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>Entrepreneur</Link>
                      <Link href="/portfolio/research" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>Research & Publications</Link>
                    </div>
                  )}
                </div>

                {/* Awards Accordion */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full text-left text-gray-800 font-medium py-4 px-4 hover:bg-gray-50 transition-colors"
                    onClick={() => handleMobileAccordionToggle('awards')}
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      <span>Awards</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openMobileAccordion === 'awards' ? "rotate-180" : ""}`} />
                  </button>
                  {openMobileAccordion === 'awards' && (
                    <div className="bg-gray-50 px-4 pb-3 space-y-1">
                      <Link href="/awards/actor" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>Awards</Link>
                      {/* <Link href="/awards/director" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>As a Director</Link>
                      <Link href="/awards/trainer" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>As a Trainer</Link> */}
                      <Link href="/awards/institution" className="block py-2 px-3 text-gray-600 hover:text-green-600 hover:bg-white rounded-lg transition-colors" onClick={closeMobileMenu}>Institution Visits</Link>
                    </div>
                  )}
                </div>

                {/* Contact */}
                <Link 
                  href="/contact" 
                  className="flex items-center py-3 px-4 text-gray-800 font-medium hover:bg-white hover:text-green-600 rounded-xl transition-all duration-200 hover:shadow-sm" 
                  onClick={closeMobileMenu}
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
