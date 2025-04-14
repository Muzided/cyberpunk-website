"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import BlogCard from "@/components/blog-card"


const blogPosts = [
  {
    id: 1,
    title: "The Future of Blockchain Technology",
    excerpt: "Exploring the next generation of decentralized applications and their impact on society.",
    date: "March 15, 2024",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Neural Interfaces: Merging Minds with Machines",
    excerpt: "How brain-computer interfaces are revolutionizing human-machine interaction.",
    date: "March 10, 2024",
    category: "Science",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Quantum Computing Breakthroughs",
    excerpt: "Recent advancements in quantum computing and what they mean for cybersecurity.",
    date: "March 5, 2024",
    category: "Computing",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "The Rise of Digital Identity",
    excerpt: "How blockchain and cryptography are reshaping personal identity in the digital age.",
    date: "February 28, 2024",
    category: "Cybersecurity",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Artificial Intelligence in Cyberpunk Fiction",
    excerpt: "Examining how AI is portrayed in cyberpunk literature and its parallels to modern technology.",
    date: "February 20, 2024",
    category: "Culture",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "The Ethics of Neural Enhancement",
    excerpt: "Exploring the moral implications of cognitive augmentation technologies.",
    date: "February 15, 2024",
    category: "Ethics",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function BlogPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
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
          <span className="glitch">
            NEURAL FEED
          </span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Dive into the latest insights on technology, blockchain, and digital innovation
        </p>
      </motion.div>

      <div className="max-w-md mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            className="pl-8 bg-background/50 border-primary/50 focus:border-primary focus:ring-primary"
          />
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <Button variant="outline" className="border-primary/50 hover:border-primary">
          Load More Articles
        </Button>
      </div>
    </div>
  )
}

