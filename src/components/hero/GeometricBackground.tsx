import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';

export const GeometricBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Color mapper based on current active theme
    const getThemeColors = () => {
      if (theme === 'electric-blue') {
        return {
          primary: 'rgba(37, 99, 255, 0.18)',
          secondary: 'rgba(96, 165, 250, 0.08)',
          glow: 'rgba(37, 99, 255, 0.06)',
          line: 'rgba(59, 130, 246, 0.09)',
        };
      }
      if (theme === 'terminal') {
        return {
          primary: 'rgba(16, 185, 129, 0.18)',
          secondary: 'rgba(52, 211, 153, 0.08)',
          glow: 'rgba(16, 185, 129, 0.06)',
          line: 'rgba(16, 185, 129, 0.09)',
        };
      }
      // Crimson red default
      return {
        primary: 'rgba(225, 29, 72, 0.18)',
        secondary: 'rgba(251, 113, 133, 0.08)',
        glow: 'rgba(225, 29, 72, 0.06)',
        line: 'rgba(244, 63, 94, 0.09)',
      };
    };

    // System nodes
    const nodeCount = Math.min(32, Math.floor(width / 50));
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.9,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.5 + 1,
      });
    }

    let tick = 0;

    const render = () => {
      tick += 0.005;
      ctx.clearRect(0, 0, width, height);

      const colors = getThemeColors();

      // 1. Draw large abstract geometric planes
      const gradient = ctx.createRadialGradient(
        width * 0.65,
        height * 0.35,
        50,
        width * 0.65,
        height * 0.35,
        width * 0.6
      );
      gradient.addColorStop(0, colors.glow);
      gradient.addColorStop(0.5, 'transparent');
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Geometric blueprint polygon lines
      ctx.save();
      ctx.strokeStyle = colors.line;
      ctx.lineWidth = 1;

      // Diagonal structural planes
      const planeOffset = Math.sin(tick) * 15;
      ctx.beginPath();
      ctx.moveTo(width * 0.2, 0);
      ctx.lineTo(width * 0.7 + planeOffset, height * 0.8);
      ctx.lineTo(width * 0.9, height * 0.5);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(width * 0.45, 0);
      ctx.lineTo(width * 0.85, height * 0.65 + planeOffset * 0.5);
      ctx.stroke();
      ctx.restore();

      // 3. Update & render connected network nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors.primary;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = colors.line;
            ctx.lineWidth = Math.max(0.2, (1 - dist / 140) * 0.8);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
      
      {/* Subtle grid background overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Top vignette glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-theme-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-theme-accent-secondary/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
