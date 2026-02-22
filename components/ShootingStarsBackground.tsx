'use client';
import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars';

const ShootingStarsBackground = () => {
  return (
    <StarsBackground
      starColor="#ffffff"
      className="fixed inset-0 w-screen h-screen -z-10 bg-[#060608]"
    />
  );
};

export default ShootingStarsBackground;