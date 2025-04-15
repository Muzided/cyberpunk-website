// app/services/api.ts

// Define the Blog Post interface based on your API response
export interface BlogPost {
    _id: string;
    id: string;
    title: string;
    content: string;
    excerpt: string;
    featuredImage: string;
    status: string;
    author: {
      _id: string;
      name: string;
      email: string;
      profileImage: string;
    };
    categories: string[];
    tags: string[];
    viewCount: number;
    isFeature: boolean;
    createdAt: string;
    updatedAt: string;
    slug: string;
    seo: {
      metaTitle: string;
      metaDescription: string;
      keywords: string[];
    };
  }
  
  interface ApiResponse {
    success: boolean;
    count?: number;
    pagination?: object;
    data: BlogPost[] | BlogPost;
  }
  
  const API_URL = "https://api.midnightclub.site/api";
  
  // Fetch all blog posts with optional query parameters
  export async function fetchBlogPosts(limit = 5, sort = "-createdAt"): Promise<BlogPost[]> {
    try {
      const response = await fetch(`${API_URL}/posts?limit=${limit}&sort=${sort}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch blog posts: ${response.status}`);
      }
      
      const result: ApiResponse = await response.json();
      
      if (!result.success) {
        throw new Error("API returned unsuccessful response");
      }
      
      return Array.isArray(result.data) ? result.data : [result.data];
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      throw error;
    }
  }
  
  // Fetch a single blog post by ID
  export async function fetchBlogPostById(id: string): Promise<BlogPost> {
    try {
      const response = await fetch(`${API_URL}/posts/${id}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch blog post: ${response.status}`);
      }
      
      const result: ApiResponse = await response.json();
      
      if (!result.success) {
        throw new Error("API returned unsuccessful response");
      }
      
      return result.data as BlogPost;
    } catch (error) {
      console.error(`Error fetching blog post with ID ${id}:`, error);
      throw error;
    }
  }
  
  // Format date string to a more readable format
  export function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  // Get primary category from categories array
  export function getPrimaryCategory(categories: string[]): string {
    return categories && categories.length > 0 ? categories[0] : "Uncategorized";
  }