import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-bold text-white flex items-center mb-4">
              <span className="text-blue-500">Z</span>
              <span className="text-purple-500">K</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Building innovative blockchain solutions for the decentralized future. Specializing in DeFi, smart contracts, and Web3 integration.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/zk-web3?tab=repositories"
                className="bg-slate-800 hover:bg-slate-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                target="_blank" rel="noopener noreferrer"
              >
                <Github className="text-gray-400 hover:text-white transition-colors duration-300" size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/zeeshan-khan-028a7a1a5/"
                className="bg-slate-800 hover:bg-slate-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                target="_blank" rel="noopener noreferrer"
              >
                <Linkedin className="text-gray-400 hover:text-white transition-colors duration-300" size={20} />
              </a>
              <a
                href="https://x.com/cryptozkta"
                className="bg-slate-800 hover:bg-slate-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                target="_blank" rel="noopener noreferrer"
              >
                <Twitter className="text-gray-400 hover:text-white transition-colors duration-300" size={20} />
              </a>
              <a
                href="https://instagram.com/l_khan_zeeshan_786_l"
                className="bg-slate-800 hover:bg-slate-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                target="_blank" rel="noopener noreferrer"
              >
                <Instagram className="text-pink-400 hover:text-white transition-colors duration-300" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                New Delhi, India
              </li>
              <li>
                <a href="mailto:zk2143973@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  zk2143973@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+91 9058822896" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +91 9058822896
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Zeeshan Khan. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-slate-800 hover:bg-slate-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="text-gray-400 hover:text-white transition-colors duration-300" size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;