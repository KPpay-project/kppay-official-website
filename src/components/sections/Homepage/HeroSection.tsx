'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button, images } from '@/types';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(-1); // -1 means show center content
  const [isDesktop, setIsDesktop] = useState(false);

  const setupImages = [
    images.homepage.setup1,
    images.homepage.setup3,
    images.homepage.setup2,
  ];

  // Check if desktop
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Slideshow loop logic (only on desktop)
  useEffect(() => {
    if (!isDesktop) return;

    const timer = setTimeout(
      () => {
        if (currentImageIndex === -1) {
          // Start slideshow after initial center display with vector lines
          setCurrentImageIndex(0);
        } else if (currentImageIndex < setupImages.length - 1) {
          // Move to next image
          setCurrentImageIndex((prev) => prev + 1);
        } else {
          // After last image, return to center, then restart
          setCurrentImageIndex(-1);
        }
      },
      currentImageIndex === -1 ? 15000 : 8000
    ); // Center with vectors: 15s, each image: 8s

    return () => clearTimeout(timer);
  }, [currentImageIndex, isDesktop, setupImages.length]);

  const showSlideshow = currentImageIndex >= 0 && isDesktop;

  const getImageVariants = (index: number) => {
    const directions = [
      // Image 0 (setup1) - from bottom
      {
        enter: { y: '50%', opacity: 0, scale: 0.8 } as const,
        center: { y: 0, opacity: 1, scale: 1 } as const,
        exit: { y: '-20%', opacity: 0, scale: 0.9 } as const,
      },
      // Image 1 (setup3) - from right
      {
        enter: { x: '80%', opacity: 0, scale: 0.85 } as const,
        center: { x: 0, opacity: 1, scale: 1 } as const,
        exit: { x: '-30%', opacity: 0, scale: 0.9 } as const,
      },
      // Image 2 (setup2) - pop from center
      {
        enter: { scale: 0.5, opacity: 0 } as const,
        center: { scale: 1, opacity: 1 } as const,
        exit: { scale: 0.7, opacity: 0 } as const,
      },
    ];

    const direction = directions[index];

    return {
      enter: direction.enter,
      center: {
        ...direction.center,
        transition: {
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
      },
      exit: {
        ...direction.exit,
        transition: {
          duration: 1,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
      },
    };
  };

  return (
    <section className="relative -mt-24 overflow-hidden">
      {/* Hero Container */}
      <div className="relative h-[680px] sm:h-[700px] md:h-[750px] lg:h-[800px]">
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-[0]"></div>

        {/* Main Dashboard Image - Background Layer */}
        <motion.div
          className="absolute top-[120px] left-0 right-0 bottom-[80px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={images.hero.main}
            alt="KP Pay Platform Dashboard"
            fill
            className="object-contain object-center"
            priority
          />
        </motion.div>

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 z-[1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={images.hero.gradient}
            alt=""
            fill
            className="object-cover opacity-90 mix-blend-multiply"
            priority
          />
        </motion.div>

        {/* Additional gradient for depth */}
        <motion.div
          className="absolute inset-0 z-[2] bg-gradient-to-b from-black/30 via-transparent to-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        ></motion.div>

        {/* Animated Tech Vector Lines - Moves between left and right on desktop, always left on mobile */}
        <motion.div
          className="absolute top-0 w-full lg:w-1/2 h-full z-[3] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{
            left: showSlideshow ? 'auto' : 0,
            right: showSlideshow ? 0 : 'auto',
            opacity: 1,
          }}
          transition={{ duration: 0.4, opacity: { duration: 0.5 } }}
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 800">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: '#a855f7', stopOpacity: 0.6 }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: '#ec4899', stopOpacity: 0.6 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }}
                />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Animated circuit-like lines */}
            <motion.path
              d="M 50 100 L 150 100 L 150 200 L 250 200"
              stroke="url(#grad1)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.path
              d="M 400 150 L 300 150 L 300 300 L 200 300"
              stroke="url(#grad1)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2.5,
                delay: 0.3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.path
              d="M 100 400 L 200 400 L 200 500 L 350 500"
              stroke="url(#grad1)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2.2,
                delay: 0.6,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.path
              d="M 450 400 L 350 400 L 350 550 L 200 550"
              stroke="url(#grad1)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2.8,
                delay: 0.9,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.path
              d="M 50 650 L 150 650 L 150 700 L 300 700"
              stroke="url(#grad1)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2.4,
                delay: 1.2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Glowing nodes */}
            <motion.circle
              cx="250"
              cy="200"
              r="5"
              fill="#ec4899"
              filter="url(#glow)"
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="200"
              cy="300"
              r="5"
              fill="#a855f7"
              filter="url(#glow)"
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
            />
            <motion.circle
              cx="350"
              cy="500"
              r="5"
              fill="#3b82f6"
              filter="url(#glow)"
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, delay: 1, repeat: Infinity }}
            />
          </svg>
        </motion.div>

        {/* Slideshow Images (Desktop Only) */}
        {showSlideshow && (
          <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[35%] h-[65%] z-[4]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={getImageVariants(currentImageIndex).enter}
                animate={getImageVariants(currentImageIndex).center}
                exit={getImageVariants(currentImageIndex).exit}
                className="absolute inset-0"
              >
                {/* Puffy glow behind */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-pink-500/50 blur-[70px] scale-110"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1.1, 1.15, 1.1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="relative w-full h-full">
                  <Image
                    src={setupImages[currentImageIndex]}
                    alt={`Setup ${currentImageIndex + 1}`}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Content Layer */}
        <AnimatePresence mode="wait">
          {showSlideshow ? (
            <motion.div
              key="left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 container-padding pt-24 sm:pt-0 h-full flex flex-col items-start justify-center lg:pl-16"
            >
              <div className="text-left max-w-xl lg:max-w-2xl">
                <h1 className="hero-heading whitespace-normal">
                  THE SAFEST AND MOST RELIABLE MONEY TRANSACTION PLATFORM
                </h1>

                <p className="hero-description">
                  Send money globally, receive payments, deposit and request
                  funds, invest and exchange across multiple currencies with low
                  fees, speed and safety.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    href="https://dev.d32yml5hzs7qtc.amplifyapp.com/onboarding/create-account"
                  >
                    Get started for free
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button variant="outlined-white" size="lg" href="/about">
                    Learn more
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 container-padding pt-24 sm:pt-0 h-full flex flex-col items-center justify-center"
            >
              <div className="text-center">
                <h1 className="hero-heading">
                  THE SAFEST AND MOST RELIABLE
                  <br />
                  MONEY TRANSACTION PLATFORM
                </h1>

                <p className="hero-description">
                  Send money globally, receive payments, deposit and request
                  funds, invest
                  <br className="hidden sm:block" />
                  and exchange across multiple currencies with low fees, speed
                  and safety.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    href="https://dev.d32yml5hzs7qtc.amplifyapp.com/onboarding/create-account"
                  >
                    Get started for free
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button variant="outlined-white" size="lg" href="/about">
                    Learn more
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
