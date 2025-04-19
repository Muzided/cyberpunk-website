"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion"
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
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  // Row refs for scroll-based animations
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)

  // Get scroll progress for the section with extended range
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Create smoother scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  })

  // Transform scroll progress into horizontal movement with reduced range
  const row1X = useTransform(smoothProgress, [0, 0.5], ["-50%", "0%"])
  const row2X = useTransform(smoothProgress, [0, 0.5], ["50%", "0%"])

  return (
    <section ref={sectionRef} className="py-20 min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="about-bg absolute inset-0 bg-gradient-to-r from-black via-purple-950/10 to-black bg-[length:200%_200%] z-0"></div>

      {/* Cyberpunk grid lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 200, 255, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 0, 255, 0.2) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-cyan-500 rounded-full filter blur-[100px] opacity-20 z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-purple-500 rounded-full filter blur-[100px] opacity-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title section */}
        <div ref={titleRef} className="relative h-[30vh] flex items-center justify-center z-10">
          <motion.div
            className="about-title-bg absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 z-0"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
          ></motion.div>
          <motion.h1
            className="text-[5rem] md:text-[8rem] font-extrabold text-center relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 services-title"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            SERVICES
          </motion.h1>
        </div>

        {/* Company description */}
        <motion.div
          className="relative z-10 mt-10 mb-16 max-w-3xl mx-auto px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-xl text-cyan-400 font-medium leading-relaxed">
            Cutting-edge solutions powered by advanced technology to transform your digital presence
          </p>
          <p className="mt-4 text-gray-400">
            Our team of elite specialists delivers innovative solutions that push the boundaries of what's possible in
            the digital realm.
          </p>
          <div className="neon-line h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mt-8 mx-auto"></div>
        </motion.div>

        {/* First row - moves right as you scroll */}
        <motion.div ref={row1Ref} style={{ x: row1X }} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                boxShadow: "0 0 25px rgba(0, 255, 255, 0.3)",
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              className="feature-box flex flex-col p-6 cursor-pointer transition-all duration-300 bg-gray-900/80 backdrop-blur-sm border border-cyan-900/50 rounded-lg hover:border-cyan-400 group"
            >
              <motion.div
                className="feature-icon text-cyan-400 p-3 bg-cyan-900/30 rounded-md w-fit mb-4 transform transition-transform duration-300"
                whileHover={{
                  rotate: 5,
                  scale: 1.1,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                {service.icon}
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <div className="feature-line h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 mb-3"></div>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Second row - moves left as you scroll */}
        <motion.div ref={row2Ref} style={{ x: row2X }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(3).map((service, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: (index + 0.5) * 0.2 }}
              whileHover={{
                y: -10,
                boxShadow: "0 0 25px rgba(255, 0, 255, 0.3)",
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              className="feature-box flex flex-col p-6 cursor-pointer transition-all duration-300 bg-gray-900/80 backdrop-blur-sm border border-purple-900/50 rounded-lg hover:border-purple-400 group"
            >
              <motion.div
                className="feature-icon text-purple-400 p-3 bg-purple-900/30 rounded-md w-fit mb-4 transform transition-transform duration-300"
                whileHover={{
                  rotate: 5,
                  scale: 1.1,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                {service.icon}
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <div className="feature-line h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 mb-3"></div>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom neon lines */}
        <motion.div
          className="relative z-10 mt-20 px-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        >
          <div className="neon-line h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 max-w-6xl mx-auto"></div>
          <div className="neon-line h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 max-w-4xl mx-auto mt-2"></div>
          <div className="neon-line h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 max-w-2xl mx-auto mt-2"></div>
        </motion.div>
      </div>

      {/* Add CSS for glitch effect */}
      <style jsx global>{`
        .services-title {
          animation: glitch 5s infinite alternate-reverse;
        }
        
        @keyframes glitch {
          0%, 100% { text-shadow: none; }
          20% { text-shadow: 3px 0 #ff00ff, -3px 0 #00ffff; }
          21% { text-shadow: none; }
          25% { text-shadow: -3px 0 #ff00ff, 3px 0 #00ffff; }
          26% { text-shadow: none; }
          45% { text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff; }
          46% { text-shadow: none; }
        }
        
        .neon-line {
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }
      `}</style>
    </section>
  )
}
