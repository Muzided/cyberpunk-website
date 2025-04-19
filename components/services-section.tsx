"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Database, Shield, Cpu, Globe, Layers, BarChart3 } from "lucide-react"

const services = [
  {
    icon: <Database className="h-10 w-10" />,
    title: "Blockchain Solutions",
    description: "Secure, transparent, and efficient blockchain implementations for modern business needs.",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Cybersecurity",
    description: "Advanced protection systems to safeguard your digital assets and infrastructure.",
  },
  {
    icon: <Cpu className="h-10 w-10" />,
    title: "AI Integration",
    description: "Cutting-edge artificial intelligence solutions to automate and enhance your operations.",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Web3 Development",
    description: "Next-generation web applications built on decentralized technologies.",
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "Digital Transformation",
    description: "Comprehensive strategies to evolve your business for the digital age.",
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics solutions.",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">
            <span className="glitch" >
              OUR SERVICES
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge solutions powered by advanced technology to transform your digital presence
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-background/40 backdrop-blur-sm p-6 rounded-lg border border-primary/20 "
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

