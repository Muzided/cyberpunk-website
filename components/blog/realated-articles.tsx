// components/blog/realated-articles.tsx
"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { fetchBlogPosts, BlogPost, formatDate, getPrimaryCategory } from "../../services/api"
import { Badge } from "@/components/ui/badge"

interface RelatedArticlesProps {
  currentPostId: string;
}

export default function RelatedArticles({ currentPostId }: RelatedArticlesProps) {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadRelatedPosts = async () => {
      try {
        setIsLoading(true)
        // Fetch more posts than needed, so we can filter out the current one
        const posts = await fetchBlogPosts(10)
        
        // Filter out the current post and limit to 3 related posts
        const filtered = posts
          .filter(post => post._id !== currentPostId)
          .slice(0, 3)
        
        setRelatedPosts(filtered)
      } catch (error) {
        console.error("Error loading related posts:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadRelatedPosts()
  }, [currentPostId])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  if (relatedPosts.length === 0) {
    return null // Don't show the section if no related posts
  }

  return (
    <div className="container mx-auto px-4 py-12 border-t border-primary/20">
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="group"
          >
            <Link href={`/blog/${post._id}`}>
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={post.featuredImage || "/placeholder.svg?height=200&width=400"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <Badge className="mb-2" variant="outline">
                {getPrimaryCategory(post.categories)}
              </Badge>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-2">{formatDate(post.createdAt)}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}