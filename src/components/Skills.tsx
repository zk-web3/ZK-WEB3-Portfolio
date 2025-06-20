import React, { useEffect, useRef } from 'react';

type Skill = {
  name: string;
  level: number;
  color: string;
};

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  const skillsData: Skill[] = [
    { name: "Solidity", level: 90, color: "#5E81AC" },
    { name: "Smart Contracts", level: 95, color: "#81A1C1" },
    { name: "React", level: 85, color: "#8FBCBB" },
    { name: "Web3.js/ethers.js", level: 92, color: "#88C0D0" },
    { name: "DeFi Protocols", level: 88, color: "#A3BE8C" },
    { name: "TypeScript", level: 80, color: "#B48EAD" },
    { name: "Hardhat/Truffle", level: 85, color: "#D08770" },
    { name: "Blockchain Architecture", level: 90, color: "#EBCB8B" },
    { name: "Rust", level: 90, color: "#EBCB8B" },
  ];


  const blockchainTechnologies = [
    "Ethereum", "Polygon", "Solana", "Avalanche", "BSC", "Taiko",
    "IPFS", "Chainlink", "The Graph", "Uniswap", "Aave", "Compound"
  ];
  
  const tools = [
    "MetaMask", "Remix IDE", "Ganache", "OpenZeppelin", "Infura", "Alchemy",
    "Etherscan", "dApp Testing", "Gas Optimization", "Security Auditing"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.skill-progress-bar');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${skillsData[index].level}%`;
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            With a strong foundation in blockchain development and Web3 technologies, I specialize in building secure and efficient decentralized applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div ref={skillsRef}>
            <h3 className="text-2xl font-bold text-white mb-8">Technical Proficiency</h3>
            <div className="space-y-6">
              {skillsData.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="skill-progress-bar h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: "0%", 
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}40`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-6">Blockchain Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {blockchainTechnologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg transition-all duration-300 hover:bg-blue-500/20 hover:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Tools & Methodologies</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg transition-all duration-300 hover:bg-purple-500/20 hover:text-purple-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;