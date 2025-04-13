"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Zap, Clock, BarChart, CheckCircle } from "lucide-react"
import { companyName } from "@/lib/helper"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Super fast & reliable",
      description: "We deliver high-performance solutions that stand the test of time.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24 Hour Support",
      description: "Our dedicated team is always available to assist you whenever you need help.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "We Get the Results",
      description: "Our proven track record speaks for itself with measurable outcomes for our clients.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Trusted Partner",
      description: "We build long-term relationships based on transparency and mutual success.",
    },
  ]

  return (
    <section ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">
            <span className="glitch uppercase" >
              ABOUT {companyName} tech
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Click Flick Solutions, we specialize in delivering innovative digital solutions for both Web 3.0 and
              Web 2.0 ecosystems. Our expertise spans blockchain technologies like Ethereum, Polygon, and Tron,
              empowering decentralized applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              On the Web 2.0 front, we excel in MERN stack, Next.js, Laravel, WordPress development, along with
              cutting-edge design and SEO services. We're your trusted partner for creating seamless, user-centric
              solutions tailored to your success in the ever-evolving digital world.
            </p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">{feature.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg overflow-hidden border border-primary/20">
              <div className="absolute inset-0 bg-grid-small-white/[0.02]"></div>

              {/* Animated elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Circles */}
                <motion.div
                  className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-500/10"
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
                  className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-blue-500/10"
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

                {/* Tech words */}
                {["Blockchain", "Ethereum", "Next.js", "MERN", "Web3", "Polygon", "Laravel", "SEO"].map(
                  (word, index) => {
                    const randomX = Math.random() * 80 - 40
                    const randomY = Math.random() * 80 - 40
                    const randomDelay = Math.random() * 2
                    const randomDuration = 3 + Math.random() * 2

                    return (
                      <motion.div
                        key={index}
                        className="absolute text-primary/60 font-mono text-sm"
                        style={{
                          top: `${index * 12 + 10}%`,
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
                        {word}
                      </motion.div>
                    )
                  },
                )}

                {/* Central logo */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400 neon-text mb-2">
                    CLICK FLICK
                  </div>
                  <div className="text-sm text-muted-foreground">SOLUTIONS</div>

                  <motion.div
                    className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-2"
                    animate={{
                      width: ["8rem", "10rem", "8rem"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

