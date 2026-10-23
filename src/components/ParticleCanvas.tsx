import React, { useEffect, useRef } from 'react';

interface ParticleCanvasProps {
  reduceMotion: boolean;
}

export const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ reduceMotion }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = document.documentElement.clientWidth || window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let animationFrameId: number;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = document.documentElement.clientWidth || window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const count = window.innerWidth < 768 ? 25 : 50;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1,
      });
    }

    const loop = () => {
      if (reduceMotion) {
        ctx.clearRect(0, 0, width, height);
        animationFrameId = requestAnimationFrame(loop);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.classList.contains('dark');

      ctx.fillStyle = isDark ? 'rgba(16, 185, 129, 0.55)' : 'rgba(79, 70, 229, 0.85)';
      ctx.strokeStyle = isDark ? 'rgba(52, 211, 153, 0.12)' : 'rgba(99, 102, 241, 0.35)';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dxMouse = mouseX - p.x;
        const dyMouse = mouseY - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 140) {
          p.x -= (dxMouse / distMouse) * 0.8;
          p.y -= (dyMouse / distMouse) * 0.8;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.lineWidth = (1 - dist / 130) * (isDark ? 1.2 : 1.6);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [reduceMotion]);

  return <canvas id="bg-canvas" ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
};
