"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Zap, Clock, BarChart, CheckCircle, Cpu, Globe, Shield, Code } from "lucide-react"
import { companyName } from "@/lib/helper"

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quantum-Speed Systems",
      description: "Our neural-linked interfaces deliver processing power that breaks conventional barriers.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Netrunner Support",
      description: "Our cybernetic specialists are jacked in around the clock to troubleshoot any digital emergency.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Data-Driven Results",
      description: "We hack the metrics matrix to extract maximum performance from every digital asset.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Corporate Alliance",
      description: "Join our network of elite clients who trust us with their most sensitive digital operations.",
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Neural Integration",
      description: "Our systems sync directly with your cognitive framework for intuitive user experiences.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Grid Access",
      description: "Connect to our secure network nodes across all major metropolitan zones worldwide.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Military-Grade Security",
      description: "Impenetrable encryption protocols protect your data from corporate espionage and rogue AI.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Firmware Solutions",
      description: "Bespoke coding architecture tailored to your specific operational requirements.",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create glitch effect for title
      const glitchEffect = () => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 7 })
        tl.to(".about-title", {
          skewX: 10,
          textShadow: "3px 0 #ff00ff, -3px 0 #00ffff",
          duration: 0.2,
        })
          .to(".about-title", {
            skewX: -10,
            textShadow: "-3px 0 #ff00ff, 3px 0 #00ffff",
            duration: 0.2,
          })
          .to(".about-title", {
            skewX: 0,
            textShadow: "none",
            duration: 0.2,
          })
      }

      // Dark to light transition at the top
      gsap.fromTo(
        ".transition-gradient",
        {
          y: "-100%",
        },
        {
          y: "0%",
          duration: 2.5, // Slowed down
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top 60%", // Adjusted to make the transition last longer
            scrub: 2, // Slowed down scrub
          },
        },
      )

      // Main timeline for the about section
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom bottom",
          scrub: false,
        },
      })

      // Title animation with pin
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 20%",
          end: "+=400", // Extended end point for slower animation
          scrub: 2, // Slowed down scrub
          pin: true,
          pinSpacing: true,
        },
      })

      // Initial reveal of the title
      mainTl.fromTo(
        ".about-title",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5, // Slowed down
          ease: "power3.out",
          onComplete: () => glitchEffect(),
        },
      )

      // Title animation sequence
      titleTl
        .fromTo(
          ".about-title",
          {
            scale: 1,
            x: 0,
          },
          {
            scale: 0.8,
            x: "-25vw",
            duration: 2, // Slowed down
            ease: "power2.inOut",
          },
        )
        .to(
          ".about-title-bg",
          {
            width: "100%",
            duration: 1.2, // Slowed down
            ease: "power2.inOut",
          },
          "-=1.5", // Adjusted overlap
        )

      // Company description reveal
      mainTl.fromTo(
        ".company-description",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5, // Slowed down
          ease: "power3.out",
        },
        "-=0.8", // Adjusted overlap
      )

      // Enhanced feature card animations on scroll
      gsap.utils.toArray(".feature-box").forEach((el: any, i: number) => {
        // Create a timeline for each feature box
        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "center 50%", // Extended end point
            scrub: 1.5, // Slowed down scrub
            toggleActions: "play none none reverse",
          },
        })

        // Initial state
        gsap.set(el, {
          x: 100,
          opacity: 0,
          y: 50,
          rotationY: 15,
          transformOrigin: "left center",
        })

        // Animation sequence with delays between each card
        cardTl
          .to(el, {
            x: 0,
            opacity: 1,
            y: 0,
            duration: 0.8, // Slowed down
            ease: "power2.out",
            delay: i * 0.2, // Staggered delay based on index
          })
          .to(
            el,
            {
              rotationY: 0,
              duration: 0.6, // Slowed down
              ease: "back.out(1.7)",
            },
            "-=0.4", // Adjusted overlap
          )
          .fromTo(
            el.querySelector(".feature-icon"),
            {
              scale: 0.5,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6, // Slowed down
              ease: "back.out(2)",
            },
            "-=0.2", // Adjusted overlap
          )
          .fromTo(
            el.querySelector(".feature-line"),
            {
              width: "0%",
              opacity: 0,
            },
            {
              width: "100%",
              opacity: 1,
              duration: 0.8, // Slowed down
              ease: "power2.inOut",
            },
            "-=0.3", // Adjusted overlap
          )

        // Hover animation - slowed down
        el.addEventListener("mouseenter", () => {
          gsap.to(el, {
            y: -10,
            boxShadow: "0 15px 30px rgba(0, 200, 255, 0.15), 0 5px 15px rgba(255, 0, 255, 0.1)",
            duration: 0.6, // Slowed down
            ease: "power2.out",
          })

          // Glitch effect on hover
          gsap.to(el.querySelector("h3"), {
            skewX: 2,
            textShadow: "1px 0 #ff00ff, -1px 0 #00ffff",
            duration: 0.4, // Slowed down
          })

          // Icon animation
          gsap.to(el.querySelector(".feature-icon"), {
            rotate: "+=15",
            scale: 1.1,
            duration: 0.6, // Slowed down
          })
        })

        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            y: 0,
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
            duration: 0.6, // Slowed down
            ease: "power2.out",
          })

          gsap.to(el.querySelector("h3"), {
            skewX: 0,
            textShadow: "none",
            duration: 0.4, // Slowed down
          })

          // Reset icon
          gsap.to(el.querySelector(".feature-icon"), {
            rotate: 0,
            scale: 1,
            duration: 0.6, // Slowed down
          })
        })
      })

      // Background animation
      gsap.to(".about-bg", {
        backgroundPosition: "100% 100%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 3, // Slowed down scrub
        },
      })

      // Neon lines animation
      gsap.fromTo(
        ".neon-line",
        {
          width: "0%",
          opacity: 0,
        },
        {
          width: "100%",
          opacity: 1,
          duration: 2.5, // Slowed down
          ease: "power2.inOut",
          stagger: 0.4, // Increased stagger time
          scrollTrigger: {
            trigger: ".features-container",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 min-h-screen bg-white text-gray-800 relative overflow-hidden">
      {/* Dark to light transition gradient */}
      <div className="transition-gradient absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-black via-gray-800 to-white z-0"></div>

      {/* Animated background */}
      <div className="about-bg absolute inset-0 bg-gradient-to-r from-white via-cyan-50 to-white bg-[length:200%_200%] z-0"></div>

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

      {/* Title section with pin */}
      <div ref={titleRef} className="relative h-[30vh] flex items-center justify-center z-10 mt-[100px]">
        <div className="about-title-bg absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-cyan-100 to-purple-100 z-0"></div>
        <h1 className="about-title text-[8rem] font-extrabold text-center relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
          ABOUT
        </h1>
      </div>

      {/* Company description */}
      <div className="company-description relative z-10 mt-20 mb-16 max-w-3xl mx-auto px-8 text-center">
        <p className="text-xl text-cyan-700 font-medium leading-relaxed">
          {companyName || "CyberCore Industries"} operates at the bleeding edge of digital evolution. We don't just
          predict the future—we code it into existence.
        </p>
        <p className="mt-4 text-gray-600">
          Founded in 2077, we've been pushing the boundaries of what's possible in the digital realm. Our team of elite
          netrunners, code warriors, and digital architects craft solutions that transcend conventional limitations.
        </p>
        <div className="neon-line h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mt-8 mx-auto"></div>
      </div>

      {/* Features grid */}
      <div className="features-container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-8 max-w-6xl mx-auto mt-16">
        {features.map((feature, i) => (
          <div
            key={i}
            className="feature-box flex flex-col p-6 cursor-pointer transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-cyan-400"
          >
            <div className="feature-icon text-cyan-600 p-3 bg-cyan-50 rounded-md w-fit mb-4 transform transition-transform duration-300">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <div className="feature-line h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 mb-3"></div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom neon lines */}
      <div className="relative z-10 mt-20 px-8">
        <div className="neon-line h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 max-w-6xl mx-auto"></div>
        <div className="neon-line h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 max-w-4xl mx-auto mt-2"></div>
        <div className="neon-line h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 max-w-2xl mx-auto mt-2"></div>
      </div>
    </section>
  )
}
