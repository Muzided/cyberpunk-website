"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"

export default function QuoteSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1, rotate: [0, 10, 0, -10, 0] } : { scale: 0 }}
              transition={{
                scale: { duration: 0.5 },
                rotate: { duration: 1, delay: 0.5 },
              }}
              className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"
            >
              <Quote className="h-8 w-8 text-primary" />
            </motion.div>
          </div>

          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed"
          >
            <span className="relative">
              <span className="relative z-10">
                Patience, persistence and perspiration make an unbeatable combination for success.
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/20 -z-0"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-muted-foreground"
          >
            <span className="text-primary font-medium">Napoleon Hill</span> - Author
          </motion.div>

          <motion.div
            className="mt-10 w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: "5rem" } : { width: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          />
        </motion.div>
      </div>
    </section>
  )
}

