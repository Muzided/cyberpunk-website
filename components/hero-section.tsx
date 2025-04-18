"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import BlockchainNetwork from "@/components/blockchain-network"
import SplineHeroObject from "./spline-hero-object"
import { companyName } from "@/lib/helper"

export default function HeroSection() {
 

  return (
    <section  className="relative min-h-screen flex md:flex-row flex-col items-center justify-center pt-20 px-4 md:px-20">
      <div className="    items-center justify-center   w-1/2">
        <div className="w-full flex flex-col gap-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="glitch block" >
                {companyName} 
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400 neon-text">
                TECH SOLUTIONS
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Pioneering the digital frontier with blockchain-powered solutions and immersive experiences for the
            connected world of tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white group"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
     <div className="h-[600px]   w-1/2   border-blue-300/5 rounded-xl  from-transparent to-slate-900/50 " >
      <SplineModalSection/>
      </div>
      
    </section>
  )
}


const SplineModalSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  return (

    <section ref={ref} className="relative  h-[600px] rounded-xl  flex items-start pt-30">
      <div className="absolute inset-0 overflow-hidden rounded-xl ">
        <motion.div style={{ opacity }} className="h-full w-full">
          <SplineHeroObject />
        </motion.div>
      </div>
    </section>
  )
}
