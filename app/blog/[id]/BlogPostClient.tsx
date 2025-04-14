"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, Calendar, Eye, Clock, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import RelatedArticles from "@/components/blog/realated-articles"
import { Badge } from "@/components/ui/badge"
export const dynamicParams = true;

// Sample blog posts data (in a real app, this would come from an API or database)
const blogPosts = [
  {
    id: "1",
    title: "The Future of Blockchain Technology",
    excerpt: "Exploring the next generation of decentralized applications and their impact on society.",
    content: `
      <p>Blockchain technology has evolved significantly since the introduction of Bitcoin in 2009. What began as a novel approach to digital currency has expanded into a revolutionary framework with applications across numerous industries.</p>
      
      <h2>The Evolution of Blockchain</h2>
      <p>The first generation of blockchain technology focused primarily on cryptocurrency transactions. Bitcoin demonstrated the potential for a decentralized ledger to facilitate peer-to-peer transactions without intermediaries. However, its limitations in terms of scalability and functionality soon became apparent.</p>
      
      <p>Ethereum marked the second generation of blockchain technology with the introduction of smart contracts. These self-executing contracts with the terms directly written into code expanded blockchain's utility beyond simple transactions. Suddenly, developers could build decentralized applications (dApps) that automated complex processes across various domains.</p>
      
      <p>Now, we're witnessing the emergence of third-generation blockchain platforms that address previous limitations in scalability, interoperability, and sustainability. Projects like Polkadot, Cardano, and Solana are pushing the boundaries of what's possible with blockchain technology.</p>
      
      <h2>Beyond Cryptocurrency</h2>
      <p>While cryptocurrencies remain the most visible application of blockchain technology, the potential extends far beyond digital assets. Here are some transformative applications emerging across different sectors:</p>
      
      <h3>Supply Chain Management</h3>
      <p>Blockchain provides unprecedented transparency and traceability in supply chains. By recording each transaction and movement of goods on an immutable ledger, companies can verify the authenticity of products, reduce fraud, and quickly identify the source of contaminated or defective items.</p>
      
      <h3>Healthcare</h3>
      <p>In healthcare, blockchain can secure patient data while enabling controlled sharing among authorized providers. This improves coordination of care while maintaining privacy. Additionally, blockchain can help combat counterfeit pharmaceuticals by tracking medications from manufacturer to patient.</p>
      
      <h3>Voting Systems</h3>
      <p>Blockchain-based voting systems could potentially increase accessibility while reducing fraud. By creating a transparent, immutable record of votes, blockchain technology could help restore trust in democratic processes.</p>
      
      <h2>Challenges and Future Directions</h2>
      <p>Despite its potential, blockchain technology faces significant challenges. Scalability remains a concern, as most blockchain networks can process only a fraction of the transactions handled by traditional systems. Energy consumption, particularly for proof-of-work blockchains like Bitcoin, raises environmental concerns.</p>
      
      <p>Regulatory uncertainty also poses challenges for blockchain adoption. As governments around the world develop frameworks for blockchain and cryptocurrency, companies must navigate an evolving legal landscape.</p>
      
      <p>Looking ahead, we can expect continued innovation in consensus mechanisms, with a shift toward more energy-efficient alternatives to proof-of-work. Cross-chain interoperability will likely improve, enabling different blockchain networks to communicate and share data seamlessly.</p>
      
      <h2>Conclusion</h2>
      <p>Blockchain technology represents a fundamental shift in how we think about trust, transparency, and decentralization in digital systems. While challenges remain, the potential for blockchain to transform industries and create new economic models is immense. As the technology matures and adoption increases, we may find ourselves in a more decentralized, transparent, and efficient digital world.</p>
    `,
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "/placeholder.svg?height=600&width=1200",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Blockchain Specialist",
    },
    tags: ["Blockchain", "Web3", "Decentralization", "Technology"],
  },
  {
    id: "2",
    title: "Neural Interfaces: Merging Minds with Machines",
    excerpt: "How brain-computer interfaces are revolutionizing human-machine interaction.",
    content: `
      <p>The field of neural interfaces, also known as brain-computer interfaces (BCIs), is rapidly advancing, promising to transform how humans interact with technology. These devices establish a direct communication pathway between the brain and external devices, bypassing traditional interfaces like keyboards or touchscreens.</p>
      
      <h2>The Current State of Neural Interfaces</h2>
      <p>Neural interfaces have made remarkable progress in recent years. Invasive BCIs, which require surgical implantation of electrodes in or on the brain, have enabled paralyzed individuals to control robotic limbs or computer cursors using only their thoughts. Companies like Neuralink are developing more sophisticated implantable devices with thousands of electrodes that can record from and stimulate large numbers of neurons simultaneously.</p>
      
      <p>Non-invasive BCIs, which use external sensors to detect brain activity, have also advanced significantly. Electroencephalography (EEG) headsets have become more affordable and user-friendly, enabling applications ranging from gaming to meditation assistance. While these devices offer lower resolution than invasive alternatives, they provide accessibility without the risks of surgery.</p>
      
      <h2>Transformative Applications</h2>
      <p>The potential applications of neural interfaces span numerous domains:</p>
      
      <h3>Medical Rehabilitation</h3>
      <p>For individuals with paralysis or limb loss, neural interfaces offer the possibility of restored mobility through thought-controlled prosthetics or exoskeletons. These devices can interpret neural signals associated with intended movements and translate them into mechanical actions, potentially restoring independence to millions worldwide.</p>
      
      <h3>Communication</h3>
      <p>For people with conditions like ALS that impair speech and movement, neural interfaces can provide vital communication channels. By decoding neural patterns associated with speech or writing, these systems allow individuals to express themselves despite physical limitations.</p>
      
      <h3>Enhanced Human Capabilities</h3>
      <p>Beyond addressing medical conditions, neural interfaces could potentially enhance human cognitive abilities. Imagine accessing information directly from the internet through thought, learning new skills more rapidly, or communicating with others through a form of technologically-mediated telepathy.</p>
      
      <h2>Ethical Considerations</h2>
      <p>As neural interface technology advances, it raises profound ethical questions. Issues of privacy become particularly acute when devices can potentially access thoughts or memories. Who owns the neural data collected by these devices? How can we ensure that neural interfaces don't exacerbate social inequalities by creating cognitive divides between those who can afford enhancements and those who cannot?</p>
      
      <p>Questions of identity and autonomy also emerge. If our thoughts can directly influence the world through technology, how do we distinguish between intended and unintended actions? As neural interfaces become more sophisticated, the boundary between human and machine may blur, challenging our understanding of what it means to be human.</p>
      
      <h2>The Road Ahead</h2>
      <p>Despite remarkable progress, significant technical challenges remain. Improving the longevity and biocompatibility of implanted devices, increasing the resolution of non-invasive recording methods, and developing more sophisticated algorithms for interpreting neural signals are all active areas of research.</p>
      
      <p>Regulatory frameworks will need to evolve to address the unique challenges posed by neural interfaces. Balancing innovation with safety and ethical considerations will require collaboration between technologists, ethicists, policymakers, and the public.</p>
      
      <h2>Conclusion</h2>
      <p>Neural interfaces represent one of the most exciting frontiers in human-computer interaction. By establishing direct communication between minds and machines, they promise to transform how we interact with technology and potentially what it means to be human. As this technology continues to advance, thoughtful consideration of its implications will be essential to ensuring that it develops in ways that benefit humanity while respecting fundamental values of autonomy, privacy, and equality.</p>
    `,
    date: "March 10, 2024",
    readTime: "10 min read",
    category: "Science",
    image: "/placeholder.svg?height=600&width=1200",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Neurotechnology Researcher",
    },
    tags: ["Neural Interfaces", "BCI", "Neuroscience", "AI"],
  },
  {
    id: "3",
    title: "Quantum Computing Breakthroughs",
    excerpt: "Recent advancements in quantum computing and what they mean for cybersecurity.",
    content: `
      <p>Quantum computing represents a paradigm shift in computational power, leveraging the principles of quantum mechanics to perform calculations that would be practically impossible for classical computers. Recent breakthroughs in this field are accelerating the timeline for practical quantum applications, with profound implications for cybersecurity and beyond.</p>
      
      <h2>Understanding Quantum Computing</h2>
      <p>Unlike classical computers that use bits (0s and 1s) as their fundamental units of information, quantum computers use quantum bits or "qubits." Thanks to the quantum properties of superposition and entanglement, qubits can exist in multiple states simultaneously and exhibit correlations that have no classical equivalent. This enables quantum computers to explore multiple solutions to a problem at once, potentially providing exponential speedups for certain types of calculations.</p>
      
      <p>Quantum computers excel at specific tasks, including factoring large numbers, searching unsorted databases, and simulating quantum systems. These capabilities have significant implications for fields ranging from cryptography to drug discovery.</p>
      
      <h2>Recent Breakthroughs</h2>
      <p>The past few years have seen remarkable progress in quantum computing:</p>
      
      <h3>Quantum Supremacy</h3>
      <p>In 2019, Google claimed to have achieved "quantum supremacy" when its 53-qubit Sycamore processor performed a specific calculation in 200 seconds that would reportedly take the world's most powerful supercomputer thousands of years. While this demonstration had limited practical utility, it represented a significant milestone in proving that quantum computers could outperform classical systems for certain tasks.</p>
      
      <h3>Error Correction</h3>
      <p>One of the greatest challenges in quantum computing is managing errors that arise from qubits' extreme sensitivity to environmental disturbances. Recent advances in quantum error correction codes and fault-tolerant architectures are bringing us closer to reliable quantum computation. In 2021, researchers demonstrated logical qubits with error rates lower than their constituent physical qubits, a crucial step toward scalable quantum computers.</p>
      
      <h3>Increasing Qubit Counts and Coherence Times</h3>
      <p>Companies like IBM, Google, and IonQ have steadily increased both the number of qubits in their systems and the coherence times (how long qubits maintain their quantum states). IBM's roadmap aims for a 1,000+ qubit system by 2023, with plans for even larger systems thereafter.</p>
      
      <h2>Implications for Cybersecurity</h2>
      <p>Perhaps the most immediate and significant impact of quantum computing will be on cybersecurity. Many of today's encryption methods rely on the computational difficulty of problems like factoring large numbers—precisely the type of problem where quantum computers excel.</p>
      
      <p>Shor's algorithm, when implemented on a sufficiently powerful quantum computer, could break widely used public-key cryptography systems like RSA and ECC. This would compromise the security of internet communications, financial transactions, and sensitive data storage.</p>
      
      <p>In response, the field of post-quantum cryptography is developing encryption methods resistant to quantum attacks. The National Institute of Standards and Technology (NIST) is currently evaluating candidate algorithms for standardization, with final selections expected in the coming years.</p>
      
      <h2>Beyond Cybersecurity</h2>
      <p>While cybersecurity implications often dominate discussions of quantum computing, the technology promises transformative applications across numerous fields:</p>
      
      <h3>Drug Discovery and Materials Science</h3>
      <p>Quantum computers can efficiently simulate molecular and chemical interactions, potentially revolutionizing drug discovery and materials development. This could accelerate the creation of new medications, catalysts, batteries, and superconductors.</p>
      
      <h3>Optimization Problems</h3>
      <p>From supply chain logistics to financial portfolio optimization, quantum algorithms could provide significant advantages for complex optimization problems that impact numerous industries.</p>
      
      <h3>Artificial Intelligence</h3>
      <p>Quantum machine learning algorithms may offer advantages for certain AI tasks, potentially enabling more powerful pattern recognition and data analysis capabilities.</p>
      
      <h2>The Road Ahead</h2>
      <p>Despite impressive progress, practical, error-corrected quantum computers capable of solving real-world problems at scale remain years away. Challenges in scaling qubit counts while maintaining coherence and reducing error rates are substantial but not insurmountable.</p>
      
      <p>The quantum computing ecosystem continues to grow, with increasing investment from governments, corporations, and venture capital. This influx of resources is accelerating development and expanding the pool of quantum talent.</p>
      
      <h2>Conclusion</h2>
      <p>Quantum computing stands at an inflection point, transitioning from theoretical possibility to practical reality. While fully realized quantum computers remain on the horizon, recent breakthroughs suggest that their arrival may come sooner than previously anticipated. Organizations across sectors should begin preparing for a quantum future, particularly in cybersecurity where the implications are most immediate. As this technology continues to advance, it promises to unlock new frontiers in computation and scientific discovery that we are only beginning to imagine.</p>
    `,
    date: "March 5, 2024",
    readTime: "12 min read",
    category: "Computing",
    image: "/placeholder.svg?height=600&width=1200",
    author: {
      name: "Dr. Michael Quantum",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Quantum Computing Researcher",
    },
    tags: ["Quantum Computing", "Cybersecurity", "Technology", "Computing"],
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



export default function BlogPostClient() {
  const params = useParams()
  const router = useRouter()
  const [viewCount, setViewCount] = useState(0)
  const [post, setPost] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Import the blog posts data
    const loadBlogPosts = async () => {
        const { blogPosts } = await import("@/app/data/blog-post")
      // Removed unnecessary setBlogPosts call

      // Find the post
      const foundPost = blogPosts.find((p) => p.id.toString() === params.id)

      if (foundPost) {
        setPost(foundPost)
        // Simulate a view count increment
        setViewCount(Math.floor(Math.random() * 1000) + 100)
      } else {
        // Handle post not found
        router.push("/blog")
      }

      setIsLoading(false)
    }

    loadBlogPosts()
  }, [params.id, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Button onClick={() => router.push("/blog")}>Back to Blog</Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative h-full flex flex-col justify-end pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Button variant="ghost" size="sm" className="mb-4" onClick={() => router.push("/blog")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>

            <Badge className="mb-4 bg-primary/80 hover:bg-primary text-white">{post.category}</Badge>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 neon-text">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {post.author && (
                <div className="flex items-center">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                    <Image
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-medium text-foreground">{post.author.name}</span>
                    <span className="block text-xs">{post.author.role}</span>
                  </div>
                </div>
              )}

              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>

              {post.readTime && (
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              )}

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
            {post.tags && (
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
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{post.author.name}</h4>
                    <p className="text-sm text-muted-foreground">{post.author.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  An expert in {post.category.toLowerCase()} with years of experience in the field. Passionate about
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
      <RelatedArticles currentPostId={post.id} />
    </div>
  )
}
