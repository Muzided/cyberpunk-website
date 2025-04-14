"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import QuoteSection from "@/components/quote-section"
import ServicesSection from "@/components/services-section"
import SkillsSection from "@/components/skills-section"
import TawkWidget from "@/components/TawkWidget"

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0])

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="fixed inset-0 bg-gradient-radial from-purple-500/10 to-transparent pointer-events-none -z-10"
        style={{ opacity: backgroundOpacity }}
      />

      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <ServicesSection />
      <SkillsSection />
      <TawkWidget/>

      
    </div>
  )
}

