import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HEX_RADIUS = 36; // Size of each hexagon
const HEX_GAP = 8; // Gap between hexagons
const ANIMATION_SPEED = 0.5; // Speed of hexagon movement

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    function drawHexagon(cx: number, cy: number, radius: number, glowColor: string, fillColor: string, phase: number) {
      ctx.save();
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = Math.PI / 3 * i + phase;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 16;
      ctx.strokeStyle = glowColor;
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 0.15;
      ctx.fillStyle = fillColor;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const hexHeight = Math.sqrt(3) * HEX_RADIUS;
      const xOffset = HEX_RADIUS * 1.5 + HEX_GAP;
      const yOffset = hexHeight + HEX_GAP;
      const phase = Math.sin(time / 60) * 0.2;

      for (let row = -2; row < Math.ceil(height / yOffset) + 2; row++) {
        for (let col = -2; col < Math.ceil(width / xOffset) + 2; col++) {
          // Offset every other row
          const x = col * xOffset + ((row % 2) * xOffset) / 2;
          const y = row * yOffset;
          // Animate hexagons with a wave
          const localPhase = phase + Math.sin((col + row) / 2 + time / 80) * 0.3;
          drawHexagon(
            x + width / 10,
            y + height / 10,
            HEX_RADIUS,
            'rgba(99,102,241,0.8)', // Neon blue glow
            'rgba(139,92,246,0.5)', // Purple fill
            localPhase
          );
        }
      }
      time += ANIMATION_SPEED;
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