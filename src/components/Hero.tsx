import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const DOTS = 18; // Number of floating dots
const COLORS = [
  'rgba(99,102,241,0.7)', // Neon blue
  'rgba(139,92,246,0.7)', // Neon purple
  'rgba(56,189,248,0.7)', // Cyan
  'rgba(236,72,153,0.7)', // Pink
];

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Dot definition
    const dots = Array.from({ length: DOTS }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 8 + 8,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      glow: Math.random() * 18 + 18,
    }));

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function drawGradient() {
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#1e293b'); // slate-900
      grad.addColorStop(0.5, '#312e81'); // indigo-900
      grad.addColorStop(1, '#7c3aed'); // purple-600
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    }

    function drawDots() {
      for (const dot of dots) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.shadowColor = dot.color;
        ctx.shadowBlur = dot.glow;
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = dot.color;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.restore();
      }
    }

    function updateDots() {
      for (const dot of dots) {
        dot.x += dot.dx;
        dot.y += dot.dy;
        // Bounce off edges
        if (dot.x < -dot.r) dot.x = width + dot.r;
        if (dot.x > width + dot.r) dot.x = -dot.r;
        if (dot.y < -dot.r) dot.y = height + dot.r;
        if (dot.y > height + dot.r) dot.y = -dot.r;
      }
    }

    function animate() {
      drawGradient();
      drawDots();
      updateDots();
      animationFrameId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900 to-slate-800"
      ></canvas>
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="text-center">
          <div className="mb-4 inline-block">
            <span className="text-sm bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
              Blockchain Developer
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Zeeshan <span className="text-blue-500">Khan</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12">
            Building decentralized applications and blockchain solutions for the Web3 ecosystem
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border border-gray-600 hover:border-white text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;