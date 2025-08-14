"use client"

import { useEffect, useRef, useState } from 'react'

const CursorTrail = () => {
  const canvasRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = 
        window.innerWidth <= 768 || 
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      setIsMobile(isMobileDevice)
    }

    // Check on mount and window resize
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // If mobile, don't initialize canvas
    if (isMobile) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let points = []
    let sparkles = []
    let animationFrameId
    
    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setSize()

    // Enhanced vibrant colors with better visibility
    const colors = [
      'rgba(255, 215, 0, 0.85)',    // Gold
      'rgba(255, 64, 129, 0.85)',   // Pink
      'rgba(0, 229, 255, 0.85)',    // Cyan
      'rgba(255, 165, 0, 0.85)',    // Orange
      'rgba(255, 23, 68, 0.85)',    // Red
      'rgba(118, 255, 3, 0.85)'     // Neon Green
    ]

    class Sparkle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.size = Math.random() * 2 + 1 // Reduced size from 4+2 to 2+1
        this.speedX = (Math.random() - 0.5) * 3 // Reduced speed from 4 to 3
        this.speedY = (Math.random() - 0.5) * 3
        this.life = 1
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.life -= 0.03 // Increased decay rate from 0.02 to 0.03
        return this.life > 0
      }

      draw() {
        // Outer glow
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2) // Reduced multiplier from 2 to 1.5
        ctx.fillStyle = this.color.replace('0.85', '0.2')
        ctx.fill()

        // Inner sparkle
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()

        // Center highlight
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 0.3, 0, Math.PI * 2) // Reduced from 0.5 to 0.3
        ctx.fillStyle = '#ffffff'
        ctx.fill()
      }
    }

    class Point {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.age = 0
        this.maxAge = 25 // Reduced from 35 to 25
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.size = Math.random() * 2 + 2 // Reduced from 3+3 to 2+2
        
        // Create fewer sparkles
        for (let i = 0; i < 2; i++) { // Reduced from 4 to 2
          sparkles.push(new Sparkle(x, y))
        }
      }

      update() {
        this.age++
        return this.age < this.maxAge
      }

      draw() {
        const life = 1 - this.age / this.maxAge
        
        // Outer glow
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2) // Reduced from 3 to 2
        ctx.fillStyle = this.color.replace('0.85', '0.15') // Reduced opacity
        ctx.fill()

        // Main glow
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2) // Reduced from 2 to 1.5
        ctx.fillStyle = this.color.replace('0.85', '0.4') // Reduced opacity
        ctx.fill()

        // Core point
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()

        // Center highlight
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 0.3, 0, Math.PI * 2) // Reduced from 0.5 to 0.3
        ctx.fillStyle = '#ffffff'
        ctx.fill()
      }
    }

    let lastX = 0
    let lastY = 0
    let throttleTimer

    const addPoint = (x, y) => {
      if (throttleTimer) return
      
      throttleTimer = setTimeout(() => {
        throttleTimer = null
      }, 20) // Increased throttle time from 16 to 20

      const dx = x - lastX
      const dy = y - lastY
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance > 8) { // Increased distance threshold from 5 to 8
        points.push(new Point(x, y))
        lastX = x
        lastY = y
      }
    }

    const handleMouseMove = (e) => {
      addPoint(e.clientX, e.clientY)
    }

    const handleTouch = (e) => {
      e.preventDefault()
      const touch = e.touches[0]
      addPoint(touch.clientX, touch.clientY)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw with additive blending
      ctx.globalCompositeOperation = 'lighter'
      
      // Update and draw sparkles
      sparkles = sparkles.filter(sparkle => sparkle.update())
      sparkles.forEach(sparkle => sparkle.draw())
      
      // Update and draw points
      points = points.filter(point => point.update())
      points.forEach(point => point.draw())
      
      // Reset composite operation
      ctx.globalCompositeOperation = 'source-over'
      
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('touchmove', handleTouch, { passive: false })
    document.addEventListener('touchstart', handleTouch, { passive: false })

    return () => {
      window.removeEventListener('resize', checkMobile)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('touchmove', handleTouch)
      document.removeEventListener('touchstart', handleTouch)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  // Don't render anything on mobile
  if (isMobile) return null

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'normal',
      }}
    />
  )
}

export default CursorTrail 
