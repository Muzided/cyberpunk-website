"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { projects } from "@/app/data/projects"
import ProjectCard from "@/components/project-card"
import { Cpu, Database, Code, Lock, Zap, Globe, ArrowRight } from "lucide-react"
import { orbitron } from "@/app/fonts"

export default function WorkPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const techElements = [
    { icon: Cpu, label: "AI" },
    { icon: Database, label: "Blockchain" },
    { icon: Code, label: "Web3" },
    { icon: Lock, label: "Security" },
    { icon: Zap, label: "Performance" },
    { icon: Globe, label: "Seo" },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-small-white/[0.02]" />
        
        {/* Animated circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/5"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating tech elements */}
        {techElements.map((tech, index) => {
          const Icon = tech.icon
          const randomX = Math.random() * 80 - 40
          const randomY = Math.random() * 80 - 40
          const randomDelay = Math.random() * 2
          const randomDuration = 3 + Math.random() * 2

          return (
            <motion.div
              key={index}
              className="absolute text-primary/60"
              style={{
                top: `${index * 15 + 10}%`,
                left: `${(index % 3) * 30 + 10}%`,
              }}
              animate={{
                x: [randomX, -randomX, randomX],
                y: [randomY, -randomY, randomY],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: randomDuration,
                delay: randomDelay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Icon className="h-8 w-8" />
            </motion.div>
          )
        })}
      </div>

      <div className="relative h-[60vh] min-h-[500px] bg-image_work bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid lines */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-small-white/[0.02]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_100%)]" />
          </div>
          
          {/* Animated lines */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Enhanced title with futuristic styling */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-primary/10 blur-3xl"
              />
              
              <motion.h1 
                className={`${orbitron.className} text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="relative">
                  PORTFOLIO
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  />
                </span>
              </motion.h1>
              
              {/* Animated subtitle */}
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  <span className="text-primary">[</span>
                  <span className="text-foreground">EXPLORING THE FRONTIERS OF DIGITAL INNOVATION</span>
                  <span className="text-primary">]</span>
                </p>
                
                {/* Tech stack preview with enhanced styling */}
                <div className="flex flex-col items-center gap-6 mb-8">
                  <div className="flex justify-center gap-4">
                    {techElements.map((tech, index) => {
                      const Icon = tech.icon
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                          className="group relative"
                        >
                          <div className="absolute inset-0 bg-primary/10 rounded-full blur group-hover:blur-md transition-all duration-300" />
                          <div className="relative p-3 rounded-full bg-background/40 backdrop-blur-sm border border-primary/20 group-hover:border-primary/40 transition-colors">
                            <Icon className="h-6 w-6 text-primary/60 group-hover:text-primary transition-colors" />
                          </div>
                          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-primary/60 group-hover:text-primary transition-colors">
                            {tech.label}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                  
                  {/* Decorative line */}
                  <motion.div
                    className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div ref={ref} className="container mx-auto px-4 py-16 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
