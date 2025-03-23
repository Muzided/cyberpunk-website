"use client"

import { motion } from "framer-motion"
import { Cpu, Database, Shield, Code } from "lucide-react"

export default function SplineSkillsObject() {
  const icons = [
    { Icon: Cpu, color: "text-purple-500" },
    { Icon: Database, color: "text-blue-500" },
    { Icon: Shield, color: "text-cyan-500" },
    { Icon: Code, color: "text-indigo-500" },
  ]

  return (
    <div className="h-full w-full relative">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Background elements */}
        <motion.div
          className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-500/5 to-blue-500/5 absolute"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Animated grid */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-grid-small-white/[0.3]" />
        </div>

        {/* Orbiting elements */}
        <div className="relative w-64 h-64">
          {icons.map((IconObj, index) => {
            const { Icon, color } = IconObj
            const angle = (index * Math.PI * 2) / icons.length
            const delay = index * 0.5

            return (
              <motion.div
                key={index}
                className={`absolute w-12 h-12 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center border border-primary/20 ${color}`}
                initial={{
                  x: Math.cos(angle) * 120,
                  y: Math.sin(angle) * 120,
                  opacity: 0,
                }}
                animate={{
                  x: Math.cos(angle) * 120,
                  y: Math.sin(angle) * 120,
                  opacity: 1,
                  rotate: [0, 360],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                  opacity: {
                    duration: 1,
                    delay,
                  },
                }}
              >
                <Icon className="h-6 w-6" />
              </motion.div>
            )
          })}

          {/* Center element */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-purple-600/30 to-blue-600/30 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(139, 92, 246, 0)",
                  "0 0 0 10px rgba(139, 92, 246, 0.1)",
                  "0 0 0 20px rgba(139, 92, 246, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Cpu className="h-8 w-8 text-primary" />
            </motion.div>
          </motion.div>

          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ transform: "rotate(-45deg)" }}>
            <motion.circle
              cx="50%"
              cy="50%"
              r="80"
              fill="none"
              stroke="rgba(139, 92, 246, 0.2)"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: 100 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

