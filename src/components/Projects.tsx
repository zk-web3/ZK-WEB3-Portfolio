import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [mainCategory, setMainCategory] = useState<string>('All');
  const [subCategory, setSubCategory] = useState<string>('All');

  const projects = [
    {
      id: 1,
      title: "Decentralix DEX",
      description: "A decentralized exchange platform built on Ethereum Testnet.",
      image: "https://i.imgur.com/cazHaB2.jpeg",
      tags: ["JavaScript", "DeFi"],
      githubUrl: "https://github.com/zk-web3/Decentralix-DEX-V2",
      liveUrl: "https://decentralix-dex-v2.vercel.app/"
    },
    {
      id: 2,
      title: "zkGasTracker",
      description: "Gas Tracker Of Multiple Chain.",
      image: "https://iili.io/3yClvlS.jpg",
      tags: ["JavaScript", "Tracker","Explorer"],
      githubUrl: "https://github.com/zk-web3/zkGasTracker",
      liveUrl: "https://zk-gas-tracker-zw2a.vercel.app/"
    },
    {
      id: 3,
      title: "zkVault NFT Marketplace",
      description: "NFT Market Place on Ethereum testnet.",
      image: "https://i.postimg.cc/D025x35d/1000090900.jpg",
      tags: ["TypeScript", "DeFi","JavaScript"],
      githubUrl: "https://github.com/zk-web3/zkVault-NFT-Marketplace",
      liveUrl: "https://zk-vault-nft-marketplace.vercel.app/"
    },
    {
      id: 4,
      title: "zkNews",
      description: "News Aggregator For Crypto.",
      image: "https://i.postimg.cc/h4ry4N74/web3-news.jpg",
      tags: ["JavaScript", "News"],
      githubUrl: "https://github.com/zk-web3/zknews",
      liveUrl: "https://zknews-v2.vercel.app"
    },
    {
      id: 5,
      title: "DeFi Dashboard With ENS Supported",
      description: "DeFi Dashboard With Wallet and ENS support.",
      image: "https://i.postimg.cc/RVh6Ybrb/defi-dashboad.jpg",
      tags: ["JavaScript", "DeFi", "Explorer"],
      githubUrl: "https://github.com/zk-web3/DeFi-Portfolio-Visualizer",
      liveUrl: "https://de-fi-portfolio-visualizer.vercel.app/"
    },
    {
      id: 6,
      title: "Fear & Greed Index",
      description: "Fear & Greed Index With Futuristic UI.",
      image: "https://i.postimg.cc/YChLCPn5/FVG.png",
      tags: ["JavaScript", "Index"],
      githubUrl: "https://github.com/zk-web3/F-G-Index",
      liveUrl: "https://fgindex-v2.vercel.app/"
    },
    {
      id: 7,
      title: "zkScan Multichain Analyzer",
      description: "Multichain Analyzer for EVM Chains.",
      image: "https://i.postimg.cc/qvTF9Qyy/explorer.jpg",
      tags: ["JavaScript", "DeFi", "Tracker"],
      githubUrl: "https://github.com/zk-web3/multioc",
      liveUrl: "https://multioc3.vercel.app/"
    },
    {
      id: 8,
      title: "Token Tracker On Javascript & TypeScript",
      description: "Token Tracker Built on JavaScript & TypeScript.",
      image: "https://i.postimg.cc/gj8FbNX6/Token-tarcker.png",
      tags: ["JavaScript","TypeScript", "Tracker","Web3"],
      githubUrl: "https://github.com/zk-web3/Rust-Token-Tracker",
      liveUrl: "https://rust-token-tracker.vercel.app/"
    },
    {
      id: 9,
      title: "Chain Tracker",
      description: "Chain Tracker On JavaScript & Typescript",
      image: "https://i.postimg.cc/xd4WkWLz/Multichainn.png",
      tags: ["Typescript", "JavaScript","Explorer","Index"],
      githubUrl: "https://github.com/zk-web3/rust-defi-dashboard",
      liveUrl: "https://rust-defi-dashboard.vercel.app/"
    },
    {
      id: 10,
      title: "Merkle Tree WL Tool",
      description: "Merkle Tool Built On Rust GUI.",
      image: "https://i.postimg.cc/XYHJmvPb/Merkle.png",
      tags: ["Typescript", "JavaScript", "Tools"],
      githubUrl: "https://github.com/zk-web3/merkle-tree-wl",
      liveUrl: "https://merkle-tree-wl.vercel.app/"
    },

    {
      id: 11,
      title: "zkToken Tracker (Rust Web Version)",
      description: "zkToken Tracker Built On Rust WebApp.",
      image: "https://i.postimg.cc/mgvyBjnj/RUST.png",
      tags: ["JavaScript", "Rust", "Explorer","ethereum","ether.js","Index","Tracker"],
      githubUrl: "https://github.com/zk-web3/rust-gui-token-tracker",
      liveUrl: "https://rust-gui-token-tracker.vercel.app/"
    },

    {
      id: 12,
      title: "zkChain Tracker",
      description: "zkChain Tracker Include L1 And L2 Chains.",
      image: "https://i.postimg.cc/qqZMHqmx/zkchain.png",
      tags: ["JavaScript", "TypeScript", "Explorer","ethereum","ether.js","Index","Next.js"],
      githubUrl: "https://github.com/zk-web3/chain-analyzer",
      liveUrl: "https://chain-analyzer-l1.vercel.app/"
    },
  ];

  


  const mainCategories = ["All", "JavaScript", "TypeScript", "Rust", "Python"];
  const subCategories = ["All", "DeFi", "Tracker", "News", "Index", "Explorer", "Tools"];

  const filteredProjects = projects.filter(project => {
    const matchMain = mainCategory === 'All' || project.tags.includes(mainCategory);
    const matchSub = subCategory === 'All' || project.tags.includes(subCategory);
    return matchMain && matchSub;
  });

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Filter by main tech stack and domain-specific categories.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {mainCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setMainCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium ${mainCategory === cat ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-700 text-gray-300 border-slate-600 hover:bg-slate-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {subCategories.map((sub) => (
            <button
              key={sub}
              onClick={() => setSubCategory(sub)}
              className={`px-4 py-2 rounded-full border text-sm font-medium ${subCategory === sub ? 'bg-purple-600 text-white border-purple-600' : 'bg-slate-700 text-gray-300 border-slate-600 hover:bg-slate-600'}`}
            >
              {sub}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-slate-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden h-52">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white">
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300">
                    Live Demo <ExternalLink size={18} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
