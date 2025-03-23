"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function SplineContactObject() {
  return (
    <div className="h-full w-full relative">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Background elements */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-purple-500/10 to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-small-white/[0.05]" />

        {/* Animated elements */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Central mail icon */}
          <motion.div
            className="relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <motion.div
              className="w-24 h-24 rounded-lg bg-gradient-to-br from-purple-600/30 to-blue-600/30 flex items-center justify-center"
              animate={{
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Mail className="h-12 w-12 text-white/80" />
            </motion.div>

            {/* Orbiting elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center border border-primary/20"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <MessageSquare className="h-5 w-5 text-cyan-400" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center border border-primary/20"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Send className="h-5 w-5 text-purple-400" />
            </motion.div>
          </motion.div>

          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/30"
              initial={{
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200,
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Pulsing rings */}
          {[40, 80, 120].map((size, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-primary/20"
              style={{
                width: size,
                height: size,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.1, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

