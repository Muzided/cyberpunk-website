export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  category: string;
  status?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "NEURAL INTERFACE PROTOCOL",
    description: "A revolutionary blockchain-based neural interface system enabling secure, decentralized brain-computer communication.",
    image: "/projects/blockchain-neural.jpg",
    technologies: ["Ethereum", "Neural Networks", "Web3", "Solidity"],
    link: "https://example.com/neural-interface",
    category: "AI & BLOCKCHAIN",
    status: "ACTIVE"
  },
  {
    id: "2",
    title: "QUANTUM SECURITY NETWORK",
    description: "Next-gen quantum-resistant blockchain protocol with advanced cryptographic security measures.",
    image: "/projects/quantum-blockchain.jpg",
    technologies: ["Quantum Computing", "Zero-Knowledge Proofs", "Layer 2"],
    link: "https://example.com/quantum-security",
    category: "SECURITY & CRYPTO",
    status: "IN DEVELOPMENT"
  },
  {
    id: "3",
    title: "CYBERPUNK METAVERSE",
    description: "Immersive blockchain-powered virtual world with NFT-based digital asset ownership and trading.",
    image: "/projects/metaverse-blockchain.jpg",
    technologies: ["Polygon", "NFT", "Web3", "VR"],
    link: "https://example.com/cyberpunk-metaverse",
    category: "METAVERSE & WEB3",
    status: "LIVE"
  },
  {
    id: "4",
    title: "AI SURVEILLANCE NETWORK",
    description: "Decentralized AI surveillance system with blockchain-based data verification and storage.",
    image: "/projects/ai-blockchain.jpg",
    technologies: ["AI", "IPFS", "Smart Contracts", "ML"],
    link: "https://example.com/ai-surveillance",
    category: "AI & SECURITY",
    status: "BETA"
  },
  {
    id: "5",
    title: "DIGITAL IDENTITY PROTOCOL",
    description: "Self-sovereign identity solution built on blockchain for secure and private authentication.",
    image: "/projects/identity-blockchain.jpg",
    technologies: ["DID", "ZK Proofs", "Ethereum", "Security"],
    link: "https://example.com/blockchain-id",
    category: "IDENTITY & SECURITY",
    status: "LIVE"
  },
  {
    id: "6",
    title: "AR BLOCKCHAIN INTERFACE",
    description: "Augmented reality interface for blockchain interactions and smart contract visualization.",
    image: "/projects/ar-blockchain.jpg",
    technologies: ["AR", "Ethereum", "Web3", "3D"],
    link: "https://example.com/ar-interface",
    category: "AR & BLOCKCHAIN",
    status: "IN DEVELOPMENT"
  }
]; 