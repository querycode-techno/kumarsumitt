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

    checkMobile()
    window.addEventListener('resize', checkMobile)

    if (isMobile) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let trails = []
    let animationFrameId
    
    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setSize()

    // Soft, elegant colors for feather effect
    const featherColors = [
      'rgba(255, 0, 0, 0.5)',      // Red
      'rgba(255, 165, 0, 0.5)',    // Orange  
      'rgba(255, 255, 0, 0.5)',    // Yellow
      'rgba(0, 255, 0, 0.5)',      // Green
      'rgba(0, 0, 255, 0.5)',      // Blue
      'rgba(148, 0, 211, 0.5)'     // Violet
    ]

    class FeatherPoint {
      constructor(x, y, index) {
        this.x = x
        this.y = y
        this.life = 1
        this.maxLife = 60
        this.age = 0
        this.index = index
        this.offsetX = (Math.random() - 0.5) * 20
        this.offsetY = (Math.random() - 0.5) * 20
        this.color = featherColors[Math.floor(Math.random() * featherColors.length)]
        this.size = Math.random() * 3 + 2
        this.drift = {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5
        }
      }

      update() {
        this.age++
        this.life = 1 - (this.age / this.maxLife)
        
        // Add gentle drift for feather-like movement
        this.x += this.drift.x
        this.y += this.drift.y
        
        // Add slight upward float
        this.y -= 0.3
        
        return this.life > 0
      }

      draw() {
        const alpha = this.life * 0.8
        
        // Create feather-like strokes
        ctx.save()
        ctx.globalAlpha = alpha
        
        // Main feather strand
        ctx.beginPath()
        ctx.strokeStyle = this.color
        ctx.lineWidth = this.size * this.life
        ctx.lineCap = 'round'
        
        // Create curved feather shape
        const curve1X = this.x + this.offsetX * 0.3
        const curve1Y = this.y + this.offsetY * 0.3
        const curve2X = this.x + this.offsetX * 0.6
        const curve2Y = this.y + this.offsetY * 0.6
        const endX = this.x + this.offsetX
        const endY = this.y + this.offsetY
        
        ctx.moveTo(this.x, this.y)
        ctx.bezierCurveTo(curve1X, curve1Y, curve2X, curve2Y, endX, endY)
        ctx.stroke()
        
        // Add feather barbs (smaller strokes)
        for (let i = 0; i < 3; i++) {
          const progress = (i + 1) / 4
          const barbX = this.x + this.offsetX * progress
          const barbY = this.y + this.offsetY * progress
          const barbLength = this.size * this.life * 0.5
          
          ctx.beginPath()
          ctx.lineWidth = 1 * this.life
          ctx.moveTo(barbX - barbLength, barbY - barbLength * 0.5)
          ctx.lineTo(barbX + barbLength, barbY + barbLength * 0.5)
          ctx.stroke()
          
          ctx.moveTo(barbX + barbLength, barbY - barbLength * 0.5)
          ctx.lineTo(barbX - barbLength, barbY + barbLength * 0.5)
          ctx.stroke()
        }
        
        // Soft glow effect
        ctx.globalAlpha = alpha * 0.3
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 2 * this.life, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.restore()
      }
    }

    class FeatherTrail {
      constructor(x, y) {
        this.points = []
        this.maxPoints = 12
        this.color = featherColors[Math.floor(Math.random() * featherColors.length)]
        
        // Create initial feather points
        for (let i = 0; i < this.maxPoints; i++) {
          const angle = (Math.random() * Math.PI * 2)
          const radius = Math.random() * 15
          const pointX = x + Math.cos(angle) * radius
          const pointY = y + Math.sin(angle) * radius
          
          this.points.push(new FeatherPoint(pointX, pointY, i))
        }
      }

      update() {
        this.points = this.points.filter(point => point.update())
        return this.points.length > 0
      }

      draw() {
        // Draw connecting curves between points for more feather-like appearance
        if (this.points.length > 1) {
          ctx.save()
          ctx.globalAlpha = 0.4
          ctx.strokeStyle = this.color
          ctx.lineWidth = 1
          ctx.lineCap = 'round'
          
          ctx.beginPath()
          ctx.moveTo(this.points[0].x, this.points[0].y)
          
          for (let i = 1; i < this.points.length; i++) {
            const point = this.points[i]
            const prevPoint = this.points[i - 1]
            const midX = (point.x + prevPoint.x) / 2
            const midY = (point.y + prevPoint.y) / 2
            
            ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, midX, midY)
          }
          
          ctx.stroke()
          ctx.restore()
        }

        // Draw individual feather points
        this.points.forEach(point => point.draw())
      }
    }

    let lastX = 0
    let lastY = 0
    let throttleTimer

    const addFeatherTrail = (x, y) => {
      if (throttleTimer) return
      
      throttleTimer = setTimeout(() => {
        throttleTimer = null
      }, 50) // Slower trail generation for smoother effect

      const dx = x - lastX
      const dy = y - lastY
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance > 10) {
        trails.push(new FeatherTrail(x, y))
        lastX = x
        lastY = y
        
        // Limit number of trails
        if (trails.length > 8) {
          trails.shift()
        }
      }
    }

    const handleMouseMove = (e) => {
      addFeatherTrail(e.clientX, e.clientY)
    }

    const handleTouch = (e) => {
      e.preventDefault()
      const touch = e.touches[0]
      addFeatherTrail(touch.clientX, touch.clientY)
    }

    const animate = () => {
      // Create soft fade effect instead of clearing
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Use softer blending mode
      ctx.globalCompositeOperation = 'screen'
      
      // Update and draw trails
      trails = trails.filter(trail => trail.update())
      trails.forEach(trail => trail.draw())
      
      ctx.globalCompositeOperation = 'source-over'
      
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('touchmove', handleTouch, { passive: false })
    document.addEventListener('touchstart', handleTouch, { passive: false })
    window.addEventListener('resize', setSize)

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('resize', setSize)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('touchmove', handleTouch)
      document.removeEventListener('touchstart', handleTouch)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

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
        mixBlendMode: 'screen',
        opacity: 0.8
      }}
    />
  )
}

export default CursorTrail 
