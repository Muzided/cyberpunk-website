"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SplineSkillsObject from "@/components/spline-skills-object"

const skills = [
  { name: "Blockchain Development", percentage: 95 },
  { name: "Artificial Intelligence", percentage: 90 },
  { name: "Cybersecurity", percentage: 85 },
  { name: "Web3 & dApps", percentage: 92 },
  { name: "Cloud Infrastructure", percentage: 88 },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">
            <span className="glitch" >
              OUR EXPERTISE
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mastering the technologies that will shape the future of digital innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      className="progress-bar h-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="h-[400px] w-full relative"
          >
            <SplineSkillsObject />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

