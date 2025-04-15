"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Cpu, Database, Code, Lock, Zap, Globe } from "lucide-react"

export default function SplineHeroObject() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse position as motion values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics for mouse movement
  const springConfig = { damping: 25, stiffness: 150 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()

      // Calculate mouse position relative to container
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Update motion values
      mouseX.set(x)
      mouseY.set(y)

      // Update state for other calculations
      setMousePosition({ x, y })
    }
  }

  // Create grid of tech elements
  const techElements = [
    { icon: Cpu, label: "AI" },
    { icon: Database, label: "Blockchain" },
    { icon: Code, label: "Web3" },
    { icon: Lock, label: "Security" },
    { icon: Zap, label: "Performance" },
    { icon: Globe, label: "Seo" },
  ]

  // Pre-calculate values outside the map function
  const techElementPositions = techElements.map((tech, index) => {
    const angle = (index * Math.PI * 2) / techElements.length
    const radius = 180
    const baseX = Math.cos(angle) * radius
    const baseY = Math.sin(angle) * radius
    return { baseX, baseY, angle, radius }
  })

  return (
    <div
      ref={containerRef}
      className="h-full w-full relative overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-small-white/[0.03]" />

        {/* Gradient background that follows mouse */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-purple-500/20 via-blue-500/10 to-transparent pointer-events-none"
          style={{
            x: useTransform(smoothMouseX, (value) => value - 300),
            y: useTransform(smoothMouseY, (value) => value - 300),
          }}
        />
      </div>

      {/* Custom cursor */}
      <motion.div
        className="w-8 h-8 rounded-full border-2 border-primary/50 fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          x: useTransform(smoothMouseX, (value) => value - 16),
          y: useTransform(smoothMouseY, (value) => value - 16),
        }}
      />

      {/* Interactive elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-4xl max-h-[500px]">
          {/* Central node */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
           
            {/* Pulsing rings */}
            {[40, 80, 120].map((size, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
                style={{
                  width: size,
                  height: size,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.1, 0.2],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Tech elements that react to mouse */}
          {techElements.map((tech, index) => {
            const Icon = tech.icon
            const { baseX, baseY, angle, radius } = techElementPositions[index]

            // Calculate distance from mouse to this element for hover effect
            const distanceFromMouse = (x: number, y: number) => {
              const dx = x - mousePosition.x + dimensions.width / 2
              const dy = y - mousePosition.y + dimensions.height / 2
              return Math.sqrt(dx * dx + dy * dy)
            }

            const elementX = useTransform(smoothMouseX, (value) => baseX + (value - dimensions.width / 2) * 0.05)
            const elementY = useTransform(smoothMouseY, (value) => baseY + (value - dimensions.height / 2) * 0.05)

            const connectionLineOpacity = useTransform(
              smoothMouseX,
              (value) => 0.1 + Math.min(0.4, Math.max(0, (1 / distanceFromMouse(baseX, baseY)) * 2000)),
            )

            return (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2 flex flex-col items-center"
                style={{
                  x: elementX,
                  y: elementY,
                }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center border border-primary/20 cursor-pointer"
                  whileHover={{
                    backgroundColor: "rgba(139, 92, 246, 0.3)",
                    borderColor: "rgba(139, 92, 246, 0.8)",
                  }}
                  animate={{
                    scale:
                      mousePosition.x !== 0
                        ? 1 - Math.min(0.2, Math.max(0, (1 / distanceFromMouse(baseX, baseY)) * 1000))
                        : 1,
                  }}
                >
                  {/* <Icon className="h-8 w-8 text-primary" /> */}
                </motion.div>
                <motion.div
                  className="mt-2 text-xs font-medium text-primary/80 backdrop-blur-sm px-2 py-1 rounded-full bg-background/50"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  animate={{
                    opacity:
                      mousePosition.x !== 0
                        ? Math.min(1, Math.max(0, (1 / distanceFromMouse(baseX, baseY)) * 2000))
                        : 0,
                  }}
                >
                  {tech.label}
                </motion.div>

                {/* Connection lines to center */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-[1px] bg-primary/20 origin-bottom"
                  style={{
                    height: radius,
                    rotate: `${angle * (180 / Math.PI)}deg`,
                    opacity: connectionLineOpacity,
                  }}
                />
              </motion.div>
            )
          })}

          {/* Floating particles that avoid mouse */}
          {Array.from({ length: 20 }).map((_, i) => {
            const size = 2 + Math.random() * 4
            const initialX = Math.random() * dimensions.width - dimensions.width / 2
            const initialY = Math.random() * dimensions.height - dimensions.height / 2

            return (
              <motion.div
                key={`particle-${i}`}
                className="absolute top-1/2 left-1/2 rounded-full bg-primary/30"
                style={{
                  width: size,
                  height: size,
                  x: useTransform(smoothMouseX, (value) => {
                    const dx = initialX - (value - dimensions.width / 2)
                    const distance = Math.max(100, Math.abs(dx))
                    const direction = dx < 0 ? -1 : 1
                    return initialX + direction * (2000 / distance)
                  }),
                  y: useTransform(smoothMouseY, (value) => {
                    const dy = initialY - (value - dimensions.height / 2)
                    const distance = Math.max(100, Math.abs(dy))
                    const direction = dy < 0 ? -1 : 1
                    return initialY + direction * (2000 / distance)
                  }),
                }}
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

