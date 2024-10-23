// LoadingPage.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface LoadingPageProps {
  onLoadingComplete?: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 15;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Animate out loading screen
      const tl = gsap.timeline({
        onComplete: () => {
          setIsLoading(false);
          onLoadingComplete?.();
        },
      });

      tl.to('.loading-screen', {
        y: '-100%',
        duration: 1,
        ease: 'power4.inOut',
        delay: 0.5,
      });
    }
  }, [progress, onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black loading-screen">
      <div className="relative w-full max-w-lg px-8">
        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-4xl font-bold text-white md:text-6xl"
        >
          Tunggu sebentar
          <span className="text-white">.</span>
          <span className="text-white">.</span>
          <span className="text-white">.</span>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="h-2 overflow-hidden bg-gray-800 rounded-full">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.01 }}
          />
        </div>

        {/* Progress Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-xl text-white"
        >
          {Math.round(progress)}%
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingPage;
