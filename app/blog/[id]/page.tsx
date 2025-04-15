// app/blog/[id]/page.tsx
"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, Calendar, Eye, Clock, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import RelatedArticles from "@/components/blog/realated-articles"
import { Badge } from "@/components/ui/badge"
import { fetchBlogPostById, BlogPost, formatDate } from "../../../services/api"

export const dynamicParams = true;

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const [viewCount, setViewCount] = useState(0)
  const [post, setPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadBlogPost = async () => {
      try {
        setIsLoading(true)
        const postId = Array.isArray(params.id) ? params.id[0] : params.id || "";
        if (!postId) {
          throw new Error("Post ID is missing");
        }
        const fetchedPost = await fetchBlogPostById(postId);
        
        setPost(fetchedPost)
        // Use the actual viewCount or set a random one for display
        setViewCount(fetchedPost.viewCount || Math.floor(Math.random() * 1000) + 100)
        setError(null)
      } catch (err) {
        console.error("Error loading blog post:", err)
        setError("Failed to load the article. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    if (params.id) {
      loadBlogPost()
    }
  }, [params.id, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">{error || "Article not found"}</h1>
        <Button onClick={() => router.push("/blog")}>Back to Blog</Button>
      </div>
    )
  }

  // Calculate estimated read time based on content length (rough estimate)
  const readTime = `${Math.max(1, Math.ceil(post.content.length / 1000))} min read`;
  
  // Get primary category for display
  const primaryCategory = post.categories && post.categories.length > 0 
    ? post.categories[0] 
    : "Uncategorized";

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <Image 
            src={post.featuredImage || "/placeholder.svg?height=400&width=600"} 
            alt={post.title} 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative h-full flex flex-col justify-end pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Button variant="ghost" size="sm" className="mb-4" onClick={() => router.push("/blog")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>

            <Badge className="mb-4 bg-primary/80 hover:bg-primary text-white">{primaryCategory}</Badge>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 neon-text">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {post.author && (
                <div className="flex items-center">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                    <Image
                      src={post.author.profileImage || "/placeholder.svg?height=32&width=32"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-medium text-foreground">{post.author.name}</span>
                  </div>
                </div>
              )}

              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(post.createdAt)}</span>
              </div>

              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{readTime}</span>
              </div>

              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                <span>{viewCount} views</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="prose prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline" className="border-primary/50 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Share and Save */}
            <div className="mt-8 flex justify-between items-center border-t border-b border-primary/20 py-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Share2 className="mr-2 h-4 w-4" />
                Share Article
              </Button>

              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Bookmark className="mr-2 h-4 w-4" />
                Save for Later
              </Button>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-4"
          >
            {/* Author Bio */}
            {post.author && (
              <div className="bg-background/40 backdrop-blur-sm p-6 rounded-lg border border-primary/20 mb-8">
                <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={post.author.profileImage || "/placeholder.svg?height=64&width=64"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{post.author.name}</h4>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  An expert in {primaryCategory.toLowerCase()} with years of experience in the field. Passionate about
                  sharing knowledge and insights on emerging technologies.
                </p>
              </div>
            )}

            {/* Newsletter Signup */}
            <div className="bg-background/40 backdrop-blur-sm p-6 rounded-lg border border-primary/20 mb-8">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to our newsletter to receive the latest articles and updates.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 bg-background/50 border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button className="w-full bg-primary hover:bg-primary/90">Subscribe</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Articles */}
      <RelatedArticles currentPostId={post._id} />
    </div>
  )
}