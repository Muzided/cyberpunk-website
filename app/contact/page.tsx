"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import SplineContactObject from "@/components/spline-contact-object"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formState)
    // Here you would typically send the form data to your backend
    alert("Message sent! We'll get back to you soon.")
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
          <span className="glitch" >
            CONNECT
          </span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Reach out to us for collaborations, inquiries, or just to say hello
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-[500px] w-full relative rounded-lg overflow-hidden border border-primary/20"
        >
          <SplineContactObject />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-background/40 backdrop-blur-sm p-8 rounded-lg border border-primary/20 neon-border">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-primary/50 focus:border-primary"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-primary/50 focus:border-primary"
                />
              </div>
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-primary/50 focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-primary/50 focus:border-primary min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span>contact@neotech.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span>+1 (888) 555-TECH</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <span>Neo District, Cyber City, CC 10101</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

