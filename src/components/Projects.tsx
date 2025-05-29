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

  const projects: Project[] = [
    {
      id: 1,
      title: "Decentralix DEX",
      description: "A decentralized exchange platform built on Ethereum Testnet that enables token swaps with minimal fees and maximum security. Features include liquidity pools, yield farming, and token staking mechanisms.",
      image: "https://i.imgur.com/cazHaB2.jpeg",
      tags: ["Solidity", "React", "Web3.js", "Ethereum"],
      githubUrl: "https://github.com/DecentralixBase/Decentralix-DEX-V2",
      liveUrl: "https://decentralix-dex-v2.vercel.app/"
    },
    {
      id: 2,
      title: "zkGasTracker",
      description: "Gas Tracker Of Multiple Chain, Inlcuding Ethereum, Optimism, Arbitrum And Polygon Using API Services In Back-end",
      image: "https://iili.io/3yClvlS.jpg",
      tags: ["Blockchain", "API", "gasTracker", "JavaScript", "TypeScript, Block Explorer"],
      githubUrl: "https://github.com/DecentralixBase/zkGasTracker",
      liveUrl: "https://zk-gas-tracker-zw2a.vercel.app/"
    },
    {
      id: 3,
      title: "zkVault NFT Marketplace",
      description: "zkVault A Full NFT Market Place On Ethereum testnet Networks, Including Creating,Buying & Selling Of NFTs.",
      image: "https://i.postimg.cc/D025x35d/1000090900.jpg",
      tags: ["Uniswap", "Layer-2", "DeFi", "TypeScript"],
      githubUrl: "https://github.com/DecentralixBase/zkVault-NFT-Marketplace",
      liveUrl: "https://zk-vault-nft-marketplace.vercel.app/"
    }
  ];

  const handleProjectHover = (id: number | null) => {
    setActiveProject(id);
  };

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my recent blockchain and Web3 projects, showcasing innovative solutions and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-slate-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-blue-500/10"
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={() => handleProjectHover(null)}
            >
              <div className="relative overflow-hidden h-52">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform: activeProject === project.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={18} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors duration-300"
          >
            <Github size={20} className="mr-2" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;