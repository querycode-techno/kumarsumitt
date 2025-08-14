"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter,  Mail, Phone, MapPin, Star, Film, Award, Linkedin } from "lucide-react"
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Cinematic Background Pattern */}
      <div className="absolute inset-0">
        {/* Film Reel Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>
        
        {/* Light Streaks */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Kumar Sumitt Info with Enhanced Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              {/* Logo Container with Spotlight Effect */}
              <div className="relative flex items-center justify-center overflow-visible group">
                {/* Spotlight Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-rose-500/0 via-rose-500/30 to-rose-500/0 
                              rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700
                              animate-spotlight"></div>
                
                {/* Rotating Glow Ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white to-transparent 
                              opacity-0 group-hover:opacity-20 rounded-full blur-md
                              animate-spin-slow"></div>
                
                {/* Logo Image */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/30 via-yellow-500/30 to-blue-500/30 
                                blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image 
                    src="/logoks.png" 
                    alt="Kumar Sumitt Logo" 
                    width={120} 
                    height={120}
                    className="relative object-contain filter brightness-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]
                             group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
                  />
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Kumar Sumitt - Where talent meets opportunity. Crafting stories, creating legends, and shaping the future of theatre and cinema.
            </p>
            <div className="flex space-x-5">
              <Link href="https://www.facebook.com/share/18NTNRe6Sr/?mibextid=wwXIfr" className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300">
                <Facebook className="h-6 w-6 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              </Link>
              <Link href="https://www.instagram.com/kumarsumitt09?igsh=NGlrbmtucjkyaXpn&utm_source=qr" className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300">
                <Instagram className="h-6 w-6 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              </Link>
              <Link href="https://x.com/kumarsumitt09?s=21" className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300">
                <BsTwitterX className="h-6 w-6 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              </Link>
              

              {/* <Link href="#" className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300">
                <Youtube className="h-6 w-6 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              </Link> */}
              <Link href="https://www.linkedin.com/in/kumar-sumitt-4b527b6a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300">
                <Linkedin className="h-6 w-6 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center">
              <Film className="h-5 w-5 mr-2 text-rose-500" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Gallery', 'Events', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <Star className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-yellow-500" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center">
              <Award className="h-5 w-5 mr-2 text-rose-500" />
              Ventures
            </h3>
            <ul className="space-y-6">
              <li className="group">
                <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                  <span className="text-lg font-semibold">Kanak Entertainments</span>
                  <p className="text-sm text-rose-500 mt-1">Est. 2017</p>
                </a>
              </li>
              {/* <li className="group">
                <a href="#" className="text-gray-400 hover:text-white transition-colors block">
                  <span className="text-lg font-semibold">KSSA</span>
                  <p className="text-sm text-rose-500 mt-1">Est. 2025</p>
                </a>
              </li> */}
              <li>
                <Link href="/portfolio/research" className="text-gray-400 hover:text-white transition-colors">
                  Research Publications
                </Link>
              </li>
              <li>
                <Link href="/awards/actor" className="text-gray-400 hover:text-white transition-colors">
                  Awards & Recognition
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center">
              <Mail className="h-5 w-5 mr-2 text-rose-500" />
              Contact
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0 group-hover:text-rose-500 transition-colors" />
                <div>
                  <p className="text-gray-300">
                    Kankarbagh, Kumhrar, Dabur road,
                   Patna, Bihar, 800026, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0 group-hover:text-rose-500 transition-colors" />
                <p className="text-gray-300">+91 95070 00655</p>
              </div>
              <div className="flex items-center space-x-4 group">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0 group-hover:text-rose-500 transition-colors" />
                <Link 
                  href="mailto:kumarsumitt0099@gmail.com" 
                  className="text-gray-300  hover:text-rose-500 transition-colors"
                >
                  kumarsumitt0099@gmail.com
                </Link>

              </div>
              <div className="flex items-center space-x-4 group">
              <Mail className="h-5 w-5 text-gray-400 flex-shrink-0 group-hover:text-rose-500 transition-colors" />
                <Link 
                  href="mailto:contact@kumarsumitt.com" 
                  className="text-gray-300 hover:text-rose-500 transition-colors"
                >
                  contact@kumarsumitt.com
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Kumar Sumitt. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link) => (
                <Link 
                  key={link}
                  href={`/${link.toLowerCase().replace(/ /g, '-')}`} 
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
