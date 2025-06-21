import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const projects: Project[] = [
    {
      id: 1,
      title: "Decentralix DEX",
      description: "A decentralized exchange platform built on Ethereum Testnet that enables token swaps with minimal fees and maximum security.",
      image: "https://i.imgur.com/cazHaB2.jpeg",
      tags: ["Solidity", "React", "Web3.js", "Ethereum"],
      githubUrl: "https://github.com/zk-web3/Decentralix-DEX-V2",
      liveUrl: "https://decentralix-dex-v2.vercel.app/"
    },
    {
      id: 2,
      title: "zkGasTracker",
      description: "Gas Tracker Of Multiple Chain including Ethereum, Optimism, Arbitrum and Polygon using API services in back-end.",
      image: "https://iili.io/3yClvlS.jpg",
      tags: ["Blockchain", "API", "gasTracker", "JavaScript", "TypeScript"],
      githubUrl: "https://github.com/zk-web3/zkGasTracker",
      liveUrl: "https://zk-gas-tracker-zw2a.vercel.app/"
    },
    {
      id: 3,
      title: "zkVault NFT Marketplace",
      description: "zkVault A Full NFT Market Place On Ethereum testnet Networks, Including Creating, Buying & Selling Of NFTs.",
      image: "https://i.postimg.cc/D025x35d/1000090900.jpg",
      tags: ["Uniswap", "Layer-2", "DeFi", "TypeScript"],
      githubUrl: "https://github.com/zk-web3/zkVault-NFT-Marketplace",
      liveUrl: "https://zk-vault-nft-marketplace.vercel.app/"
    },
    {
      id: 4,
      title: "zkNews",
      description: "News Aggregator For Crypto, Blockchain, And Web3.",
      image: "https://i.postimg.cc/h4ry4N74/web3-news.jpg",
      tags: ["News", "Crypto", "Blockchain", "Web3"],
      githubUrl: "https://github.com/zk-web3/zknews",
      liveUrl: "https://zknews-v2.vercel.app"
    },
    {
      id: 5,
      title: "DeFi Dashboard With ENS Supported",
      description: "Built Using API Of Infura, Zapper And Other RPC APIs To Get Data Of A Wallet & ENS Name.",
      image: "https://i.postimg.cc/RVh6Ybrb/defi-dashboad.jpg",
      tags: ["DeFi", "Explorer", "Blockchain"],
      githubUrl: "https://github.com/zk-web3/DeFi-Portfolio-Visualizer",
      liveUrl: "https://de-fi-portfolio-visualizer.vercel.app/"
    },
    {
      id: 6,
      title: "Fear & Greed Index (Futuristic Version)",
      description: "Fear & Greed Index With Futuristic UI And Data.",
      image: "https://i.postimg.cc/YChLCPn5/FVG.png",
      tags: ["F G Index", "Crypto Index", "Indexation"],
      githubUrl: "https://github.com/zk-web3/F-G-Index",
      liveUrl: "https://fgindex-v2.vercel.app/"
    },
    {
      id: 7,
      title: "zkScan Multichain Analyzer",
      description: "zkScan A Multichain Analyzer For Multiple EVM Chains Of Wallet Address.",
      image: "https://i.postimg.cc/qvTF9Qyy/explorer.jpg",
      tags: ["Analyzer", "DeFi", "Explorer"],
      githubUrl: "https://github.com/zk-web3/multioc",
      liveUrl: "https://multioc3.vercel.app/"
    },
    {
      id: 8,
      title: "Token Tracker (Rust)",
      description: "Token Tracker On Rust, Built On GUI Using Rust Library.",
      image: "https://i.postimg.cc/gj8FbNX6/Token-tarcker.png",
      tags: ["Rust", "GUI", "Token Tracker"],
      githubUrl: "https://github.com/zk-web3/Rust-Token-Tracker",
      liveUrl: "https://rust-token-tracker.vercel.app/"
    },
    {
      id: 9,
      title: "Chain Tracker (Rust)",
      description: "Chain Tracker On Rust Built On GUI With Rust Library And Tools",
      image: "https://i.postimg.cc/xd4WkWLz/Multichainn.png",
      tags: ["Rust", "Explorer", "DeFi Dashboard"],
      githubUrl: "https://github.com/zk-web3/rust-defi-dashboard",
      liveUrl: "https://rust-defi-dashboard.vercel.app/"
    },
    {
      id: 10,
      title: "Merkle Tree WL Tool",
      description: "Merkle Tree WL Tool Used For Airdrop And WL Built On Rust Using GUI Tools.",
      image: "https://i.postimg.cc/XYHJmvPb/Merkle.png",
      tags: ["Rust", "Merkle", "WL & Airdrop Tool"],
      githubUrl: "https://github.com/zk-web3/merkle-tree-wl",
      liveUrl: "https://merkle-tree-wl.vercel.app/"
    },
    {
      id: 11, title: "Project 11", description: "Placeholder", image: "", tags: [], githubUrl: "", liveUrl: ""
    },
    {
      id: 12, title: "Project 12", description: "Placeholder", image: "", tags: [], githubUrl: "", liveUrl: ""
    },
    {
      id: 13, title: "Project 13", description: "Placeholder", image: "", tags: [], githubUrl: "", liveUrl: ""
    },
    {
      id: 14, title: "Project 14", description: "Placeholder", image: "", tags: [], githubUrl: "", liveUrl: ""
    },
    {
      id: 15, title: "Project 15", description: "Placeholder", image: "", tags: [], githubUrl: "", liveUrl: ""
    }
  ];

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags))).filter(Boolean);
  const categories = ['All', ...allTags];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(selectedCategory));

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my recent blockchain and Web3 projects. (Some may not work due to API key restrictions on public GitHub)
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-slate-700 text-gray-300 border-slate-600 hover:bg-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-blue-500/10"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden h-52">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                    style={{
                      transform: activeProject === project.id ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white text-sm">
                    No Image
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white">
                    <Github size={18} className="mr-1" />
                    Code
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300">
                    Live Demo <ExternalLink size={18} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/DecentralixBase?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors duration-300"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
