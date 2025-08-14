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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setOpenMobileAccordion(null)
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
              alt="Kumar Sumitt Logo"
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
                <DropdownLink href="/about/experience" onClick={closeDropdown}>Experience</DropdownLink>
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
                <div className="px-4 py-2">
                  <div className="text-xs font-extrabold text-black mb-2">TRAINING VIDEOS</div>
                  <DropdownLink href="/gallery/training/national" onClick={closeDropdown}>National</DropdownLink>
                  <DropdownLink href="/gallery/training/international" onClick={closeDropdown}>International</DropdownLink>
                </div>
                <div className="px-4 py-2">
                  <div className="text-xs font-extrabold text-black mb-2">MEDIA & INTERVIEWS</div>
                  <DropdownLink href="/gallery/media/electronic" onClick={closeDropdown}>Electronic Media</DropdownLink>
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
                <DropdownLink href="/portfolio/research" onClick={closeDropdown}>Research/PhD Scholar</DropdownLink>
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
                <DropdownLink href="/awards/actor" onClick={closeDropdown}>As an Actor</DropdownLink>
                <DropdownLink href="/awards/director" onClick={closeDropdown}>As a Director</DropdownLink>
                <DropdownLink href="/awards/trainer" onClick={closeDropdown}>As a Trainer</DropdownLink>
                <DropdownLink href="/awards/institution" onClick={closeDropdown}>Institution Visits</DropdownLink>
              </DropdownMenu>
            </div>

            <Link href="/contact" className="text-gray-800 hover:text-green-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-800 hover:text-green-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Fixed positioning and height */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-[90] bg-black/50" 
          onClick={closeMobileMenu}
          style={{ top: 0, left: 0, right: 0, bottom: 0, position: 'fixed' }}
        >
          <div 
            className="absolute right-0 top-0 h-screen w-80 bg-white shadow-xl transform transition-transform"
            onClick={e => e.stopPropagation()}
            style={{ height: '100vh', overflow: 'hidden' }}
          >
            {/* Header with logo and close button */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <Image src="/logo.png" alt="Logo" width={80} height={80} />
              <button 
                onClick={closeMobileMenu}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Scrollable navigation content */}
            <div 
              className="overflow-y-auto px-6 py-4"
              style={{ 
                height: 'calc(100vh - 120px)', // Subtract header height
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch' // Smooth scrolling on iOS
              }}
            >
              <nav className="space-y-4">
                <Link href="/" className="block py-2 text-gray-800 font-medium hover:text-green-600 transition-colors" onClick={closeMobileMenu}>
                  Home
                </Link>
                
                <MobileAccordion 
                  title="About" 
                  isOpen={openMobileAccordion === 'about'}
                  onToggle={() => handleMobileAccordionToggle('about')}
                >
                  <Link href="/about/personal" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Personal Details</Link>
                  <Link href="/about/experience" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Experience</Link>
                  <Link href="/about/artistic" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Artistic Details</Link>
                  <Link href="/about/entrepreneurship" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Entrepreneurship</Link>
                </MobileAccordion>

                <MobileAccordion 
                  title="Gallery" 
                  isOpen={openMobileAccordion === 'gallery'}
                  onToggle={() => handleMobileAccordionToggle('gallery')}
                >
                  <Link href="/gallery/photos" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Photos & Videos</Link>
                  <div className="mt-2">
                    <div className="text-xs font-bold text-black mb-1 px-2">TRAINING VIDEOS</div>
                    <Link href="/gallery/training/national" className="block py-1 pl-4 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>National</Link>
                    <Link href="/gallery/training/international" className="block py-1 pl-4 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>International</Link>
                  </div>
                  <div className="mt-2">
                    <div className="text-xs font-bold text-black mb-1 px-2">MEDIA & INTERVIEWS</div>
                    <Link href="/gallery/media/electronic" className="block py-1 pl-4 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Electronic Media</Link>
                    <Link href="/gallery/media/print" className="block py-1 pl-4 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Print Media</Link>
                  </div>
                </MobileAccordion>

                <MobileAccordion 
                  title="Events & Shows" 
                  isOpen={openMobileAccordion === 'events'}
                  onToggle={() => handleMobileAccordionToggle('events')}
                >
                  <Link href="/events/stage" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Stage Shows</Link>
                  <Link href="/events/screen" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>On Screen</Link>
                  <Link href="/events/open-air" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Open Air Performances</Link>
                  <Link href="/events/interaction" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Public Interaction</Link>
                  <Link href="/events/spiritual" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Spiritual Visits</Link>
                  <Link href="/events/festivals" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Festival Participation</Link>
                  <Link href="/events/training" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Training Sessions</Link>
                </MobileAccordion>

                <MobileAccordion 
                  title="Portfolio" 
                  isOpen={openMobileAccordion === 'portfolio'}
                  onToggle={() => handleMobileAccordionToggle('portfolio')}
                >
                  <Link href="/portfolio/actor" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Actor</Link>
                  <Link href="/portfolio/director" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Director</Link>
                  <Link href="/portfolio/entrepreneur" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Entrepreneur</Link>
                  <Link href="/portfolio/research" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Research/PhD Scholar</Link>
                </MobileAccordion>

                <MobileAccordion 
                  title="Awards" 
                  isOpen={openMobileAccordion === 'awards'}
                  onToggle={() => handleMobileAccordionToggle('awards')}
                >
                  <Link href="/awards/actor" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>As an Actor</Link>
                  <Link href="/awards/director" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>As a Director</Link>
                  <Link href="/awards/trainer" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>As a Trainer</Link>
                  <Link href="/awards/institution" className="block py-1 text-gray-600 hover:text-green-600 transition-colors" onClick={closeMobileMenu}>Institution Visits</Link>
                </MobileAccordion>

                <Link href="/contact" className="block py-2 text-gray-800 font-medium hover:text-green-600 transition-colors" onClick={closeMobileMenu}>
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
