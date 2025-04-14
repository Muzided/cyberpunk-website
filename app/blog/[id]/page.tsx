// This function runs at build time on the server
export async function generateStaticParams() {
    // Import your blog posts data
    // Note: This import is only used during build
    const { blogPosts } = await import("@/app/data/blog-post")
  
    return blogPosts.map((post:any) => ({
      id: post.id.toString(),
    }))
  }
  
  import BlogPostClientPage from "./BlogPostClient"
  
  export default function BlogPostPage() {
    return <BlogPostClientPage />
  }
  