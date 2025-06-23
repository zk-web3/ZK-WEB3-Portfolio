import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white flex items-center">
            <span className="text-blue-500">Z</span>
            <span className="text-purple-500">K</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-4">
              <a href="https://github.com/zk-web3?tab=repositories" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/zeeshan-khan-028a7a1a5/" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/cryptozkta" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <ul className="pt-4 pb-2 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-6 pt-2 pb-4">
            <a href="https://github.com/zk-web3?tab=repositories" target="_blank" rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/zeeshan-khan-028a7a1a5/" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/cryptozkta" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;