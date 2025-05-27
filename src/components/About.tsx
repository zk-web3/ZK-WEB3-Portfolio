import React from 'react';
import { Code2, Database, Globe, Lock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              Blockchain Developer & Web3 Enthusiast
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm Zeeshan Khan, a passionate blockchain developer with expertise in building 
              decentralized applications and smart contracts. With a strong foundation in Web3 
              technologies, I specialize in creating secure, efficient, and innovative solutions 
              for the decentralized web.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              My journey in blockchain development has led me to work on various projects 
              including DEX platforms, testnet implementations, and liquidity provision solutions. 
              I'm committed to advancing the adoption of blockchain technology through robust 
              and user-friendly applications.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p className="text-blue-400 font-semibold mb-1">Experience</p>
                <p className="text-white text-lg">3+ Years</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p className="text-blue-400 font-semibold mb-1">Projects</p>
                <p className="text-white text-lg">15+ Completed</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p className="text-blue-400 font-semibold mb-1">Clients</p>
                <p className="text-white text-lg">10+ Satisfied</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p className="text-blue-400 font-semibold mb-1">Contributions</p>
                <p className="text-white text-lg">25+ Open Source</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="bg-blue-500/20 p-3 rounded-full w-fit mb-4">
                  <Code2 size={24} className="text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Smart Contracts</h4>
                <p className="text-gray-400">
                  Developing secure and optimized smart contracts for various blockchain platforms.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="bg-purple-500/20 p-3 rounded-full w-fit mb-4">
                  <Database size={24} className="text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">DeFi Applications</h4>
                <p className="text-gray-400">
                  Building decentralized finance applications with focus on security and user experience.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="bg-green-500/20 p-3 rounded-full w-fit mb-4">
                  <Globe size={24} className="text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Web3 Integration</h4>
                <p className="text-gray-400">
                  Integrating Web3 technologies with traditional web applications for seamless experiences.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="bg-amber-500/20 p-3 rounded-full w-fit mb-4">
                  <Lock size={24} className="text-amber-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Blockchain Security</h4>
                <p className="text-gray-400">
                  Implementing robust security measures and auditing blockchain applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;