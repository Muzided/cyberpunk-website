"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

// Sample blog posts data (in a real app, this would come from an API or database)
const blogPosts = [
  {
    id: "1",
    title: "The Future of Blockchain Technology",
    excerpt: "Exploring the next generation of decentralized applications and their impact on society.",
    date: "March 15, 2024",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "2",
    title: "Neural Interfaces: Merging Minds with Machines",
    excerpt: "How brain-computer interfaces are revolutionizing human-machine interaction.",
    date: "March 10, 2024",
    category: "Science",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    title: "Quantum Computing Breakthroughs",
    excerpt: "Recent advancements in quantum computing and what they mean for cybersecurity.",
    date: "March 5, 2024",
    category: "Computing",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "4",
    title: "The Rise of Digital Identity",
    excerpt: "How blockchain and cryptography are reshaping personal identity in the digital age.",
    date: "February 28, 2024",
    category: "Cybersecurity",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "5",
    title: "Artificial Intelligence in Cyberpunk Fiction",
    excerpt: "Examining how AI is portrayed in cyberpunk literature and its parallels to modern technology.",
    date: "February 20, 2024",
    category: "Culture",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "6",
    title: "The Ethics of Neural Enhancement",
    excerpt: "Exploring the moral implications of cognitive augmentation technologies.",
    date: "February 15, 2024",
    category: "Ethics",
    image: "/placeholder.svg?height=400&width=600",
  },
]

interface RelatedArticlesProps {
  currentPostId: string
}

export default function RelatedArticles({ currentPostId }: RelatedArticlesProps) {
  // Get 3 related articles (excluding the current one)
  const relatedPosts = blogPosts.filter((post) => post.id !== currentPostId).slice(0, 3)

  return (
    <section className="py-16 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 neon-text">
            <span className="glitch" data-text="RELATED ARTICLES">
              RELATED ARTICLES
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continue exploring our latest insights on technology and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.id}`} className="block">
                <div className="bg-background/40 backdrop-blur-sm rounded-lg overflow-hidden border border-primary/20 h-full transition-all duration-300 hover:border-primary/50 card-glow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-primary/80 text-white text-xs px-2 py-1 rounded">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center text-primary font-medium">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
