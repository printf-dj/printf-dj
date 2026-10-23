import React, { useEffect, useRef } from 'react';

interface ParallaxOrbsProps {
  reduceMotion: boolean;
}

export const ParallaxOrbs: React.FC<ParallaxOrbsProps> = ({ reduceMotion }) => {
  const orb1Ref = useRef<HTMLDivElement | null>(null);
  const orb2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduceMotion) {
      if (orb1Ref.current) orb1Ref.current.style.transform = 'none';
      if (orb2Ref.current) orb2Ref.current.style.transform = 'none';
      return;
    }

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX - window.innerWidth / 2;
      targetY = e.clientY - window.innerHeight / 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      const scrollY = window.scrollY || window.pageYOffset;

      if (orb1Ref.current) {
        const speed1 = 0.05;
        orb1Ref.current.style.transform = `translate3d(${currentX * speed1 * 0.5}px, ${scrollY * speed1 + currentY * speed1 * 0.5}px, 0)`;
      }

      if (orb2Ref.current) {
        const speed2 = -0.04;
        orb2Ref.current.style.transform = `translate3d(${currentX * speed2 * 0.5}px, ${scrollY * speed2 + currentY * speed2 * 0.5}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateParallax);
    };

    updateParallax();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [reduceMotion]);

  return (
    <>
      <div
        id="orb-1"
        ref={orb1Ref}
        className="bg-glow-orb w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-emerald-400 dark:bg-emerald-500 top-[-100px] left-[-100px]"
      />
      <div
        id="orb-2"
        ref={orb2Ref}
        className="bg-glow-orb w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-indigo-500 dark:bg-indigo-600 top-[25%] right-[-150px]"
      />
    </>
  );
};
