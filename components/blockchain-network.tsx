"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  connections: number[]
  isFixed?: boolean
}

interface TechBubble {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  text: string
  color: string
  opacity: number
  targetOpacity: number
}

export default function BlockchainNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const techBubblesRef = useRef<TechBubble[]>([])
  const animationFrameRef = useRef<number | null>(null)

  // Tech stacks to display in bubbles
  const techStacks = [
    { text: "Blockchain", color: "rgba(139, 92, 246, 0.7)" }, // Purple
    { text: "Ethereum", color: "rgba(79, 70, 229, 0.7)" }, // Indigo
    { text: "Web3", color: "rgba(59, 130, 246, 0.7)" }, // Blue
    { text: "MERN", color: "rgba(16, 185, 129, 0.7)" }, // Green
    { text: "Next.js", color: "rgba(236, 72, 153, 0.7)" }, // Pink
    { text: "React", color: "rgba(14, 165, 233, 0.7)" }, // Sky
    { text: "Node.js", color: "rgba(20, 184, 166, 0.7)" }, // Teal
    { text: "Laravel", color: "rgba(244, 63, 94, 0.7)" }, // Rose
    { text: "WordPress", color: "rgba(34, 211, 238, 0.7)" }, // Cyan
    { text: "SEO", color: "rgba(168, 85, 247, 0.7)" }, // Purple
    { text: "Polygon", color: "rgba(99, 102, 241, 0.7)" }, // Indigo
    { text: "Tron", color: "rgba(239, 68, 68, 0.7)" }, // Red
  ]

  // Initialize particles and tech bubbles
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const width = window.innerWidth
        const height = window.innerHeight

        // Set display size (css pixels)
        canvas.style.width = width + "px"
        canvas.style.height = height + "px"

        // Set actual size in memory (scaled to account for extra pixel density)
        const scale = window.devicePixelRatio
        canvas.width = Math.floor(width * scale)
        canvas.height = Math.floor(height * scale)

        // Normalize coordinate system to use css pixels
        const ctx = canvas.getContext("2d")
        if (ctx) {
          ctx.scale(scale, scale)
        }

        setDimensions({ width, height })

        // Reset particles and tech bubbles when canvas size changes
        initParticles(width, height)
        initTechBubbles(width, height)
      }
    }

    const initParticles = (width: number, height: number) => {
      const particles: Particle[] = []
      const particleCount = Math.min(Math.floor((width * height) / 15000), 100) // Limit max particles

      // Create particles
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          connections: [],
        })
      }

      // Add a few fixed particles for stability
      for (let i = 0; i < 5; i++) {
        particles.push({
          x: width * (0.2 + 0.6 * (i / 4)),
          y: height * (0.3 + 0.4 * Math.random()),
          size: 3,
          speedX: 0,
          speedY: 0,
          connections: [],
          isFixed: true,
        })
      }

      // Create connections (blockchain style)
      particles.forEach((particle, index) => {
        // Each particle connects to 1-3 other particles
        const connectionCount = Math.floor(Math.random() * 3) + 1

        for (let i = 0; i < connectionCount; i++) {
          // Connect to a particle with a higher index (to avoid duplicate connections)
          const targetIndex = Math.floor(Math.random() * (particles.length - index - 1)) + index + 1
          if (targetIndex < particles.length) {
            particle.connections.push(targetIndex)
          }
        }
      })

      particlesRef.current = particles
    }

    const initTechBubbles = (width: number, height: number) => {
      const bubbles: TechBubble[] = []

      // Create bubbles for each tech stack
      techStacks.forEach((tech, index) => {
        // Distribute bubbles across the canvas
        const x = width * (0.1 + 0.8 * Math.random())
        const y = height * (0.1 + 0.8 * Math.random())

        bubbles.push({
          x,
          y,
          size: 40 + Math.random() * 20, // Random size between 40-60px
          speedX: (Math.random() - 0.5) * 0.3, // Slower than particles
          speedY: (Math.random() - 0.5) * 0.3,
          text: tech.text,
          color: tech.color,
          opacity: 0,
          targetOpacity: 0.7 + Math.random() * 0.3, // Random opacity between 0.7-1.0
        })
      })

      techBubblesRef.current = bubbles
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Update and draw particles
      const particles = particlesRef.current
      const techBubbles = techBubblesRef.current

      // Draw connections first (so they appear behind particles)
      ctx.strokeStyle = "rgba(139, 92, 246, 0.15)" // Light purple for connections
      ctx.lineWidth = 1

      particles.forEach((particle, index) => {
        particle.connections.forEach((targetIndex) => {
          if (targetIndex < particles.length) {
            const target = particles[targetIndex]

            // Calculate distance
            const dx = target.x - particle.x
            const dy = target.y - particle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            // Only draw connections within a certain range
            if (distance < dimensions.width * 0.2) {
              // Fade out connections that are farther away
              const opacity = Math.max(0, 0.8 - distance / (dimensions.width * 0.2))
              ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.15})`

              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(target.x, target.y)
              ctx.stroke()

              // Draw small cube in the middle of the connection to represent a "block"
              if (Math.random() < 0.2) {
                // Only on some connections
                const midX = (particle.x + target.x) / 2
                const midY = (particle.y + target.y) / 2

                ctx.fillStyle = `rgba(139, 92, 246, ${opacity * 0.4})`
                ctx.fillRect(midX - 2, midY - 2, 4, 4)
              }
            }
          }
        })
      })

      // Draw tech bubbles
      techBubbles.forEach((bubble, index) => {
        // Move bubbles
        bubble.x += bubble.speedX
        bubble.y += bubble.speedY

        // Bounce off edges with some padding
        const padding = bubble.size
        if (bubble.x < padding || bubble.x > dimensions.width - padding) {
          bubble.speedX *= -1
          // Keep within bounds
          bubble.x = Math.max(padding, Math.min(dimensions.width - padding, bubble.x))
        }

        if (bubble.y < padding || bubble.y > dimensions.height - padding) {
          bubble.speedY *= -1
          // Keep within bounds
          bubble.y = Math.max(padding, Math.min(dimensions.height - padding, bubble.y))
        }

        // Gradually change opacity towards target
        bubble.opacity += (bubble.targetOpacity - bubble.opacity) * 0.01

        // Occasionally change target opacity for pulsing effect
        if (Math.random() < 0.005) {
          bubble.targetOpacity = 0.7 + Math.random() * 0.3
        }

        // Mouse interaction - highlight and push bubbles
        if (mousePosition.x && mousePosition.y) {
          const dx = mousePosition.x - bubble.x
          const dy = mousePosition.y - bubble.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Bubbles move away from mouse
          if (distance < bubble.size * 2) {
            const force = (bubble.size * 2 - distance) / (bubble.size * 20)
            bubble.x -= dx * force
            bubble.y -= dy * force

            // Highlight bubble when mouse is near
            bubble.opacity = Math.min(1, bubble.opacity + 0.1)
          }
        }

        // Draw bubble
        ctx.save()

        // Bubble background
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2)
        ctx.fillStyle = bubble.color.replace(/[\d.]+\)$/, `${bubble.opacity * 0.7})`)
        ctx.fill()

        // Bubble border
        ctx.strokeStyle = bubble.color.replace(/[\d.]+\)$/, `${bubble.opacity})`)
        ctx.lineWidth = 2
        ctx.stroke()

        // Bubble text
        ctx.font = `bold ${Math.floor(bubble.size / 3)}px sans-serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity * 1.2})`
        ctx.fillText(bubble.text, bubble.x, bubble.y)

        ctx.restore()
      })

      // Draw particles on top
      particles.forEach((particle, index) => {
        // Mouse influence
        if (mousePosition.x && mousePosition.y && !particle.isFixed) {
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Particles move away from mouse
          if (distance < 100) {
            const force = (100 - distance) / 500
            particle.x -= dx * force
            particle.y -= dy * force
          }
        }

        // Move particles
        if (!particle.isFixed) {
          particle.x += particle.speedX
          particle.y += particle.speedY

          // Bounce off edges
          if (particle.x < 0 || particle.x > dimensions.width) {
            particle.speedX *= -1
          }

          if (particle.y < 0 || particle.y > dimensions.height) {
            particle.speedY *= -1
          }

          // Keep particles within bounds
          particle.x = Math.max(0, Math.min(dimensions.width, particle.x))
          particle.y = Math.max(0, Math.min(dimensions.height, particle.y))
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)

        // Highlight particles near mouse
        if (mousePosition.x && mousePosition.y) {
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const intensity = 1 - distance / 100
            ctx.fillStyle = `rgba(139, 92, 246, ${0.3 + intensity * 0.5})`
          } else {
            ctx.fillStyle = particle.isFixed ? "rgba(139, 92, 246, 0.6)" : "rgba(139, 92, 246, 0.3)"
          }
        } else {
          ctx.fillStyle = particle.isFixed ? "rgba(139, 92, 246, 0.6)" : "rgba(139, 92, 246, 0.3)"
        }

        ctx.fill()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [dimensions, mousePosition])

  // Mouse tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  )
}

