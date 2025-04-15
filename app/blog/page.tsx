// app/blog/page.tsx
"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import BlogCard from "@/components/blog-card"
import { fetchBlogPosts, BlogPost } from "../../services/api"

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [limit, setLimit] = useState<number>(5)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        setIsLoading(true)
        const posts = await fetchBlogPosts(limit)
        setBlogPosts(posts)
        setError(null)
      } catch (err) {
        setError("Failed to load blog posts. Please try again later.")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadBlogPosts()
  }, [limit])

  const handleLoadMore = () => {
    setLimit(prevLimit => prevLimit + 5)
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

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : error ? (
        <div className="text-center py-10">
          <p className="text-red-500">{error}</p>
          <Button 
            onClick={() => setBlogPosts([])} 
            className="mt-4"
          >
            Try Again
          </Button>
        </div>
      ) : (
        <>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <BlogCard key={post._id} post={{
                id: post._id,
                title: post.title,
                excerpt: post.excerpt,
                date: new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }),
                category: post.categories[0] || "Uncategorized",
                image: post.featuredImage || "/placeholder.svg?height=400&width=600",
                // Add any other properties your BlogCard component expects
              }} />
            ))}
          </motion.div>

          {blogPosts.length > 0 && (
            <div className="mt-12 text-center">
              <Button 
                variant="outline" 
                className="border-primary/50 hover:border-primary"
                onClick={handleLoadMore}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Load More Articles"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}