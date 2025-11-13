'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { images, Button } from '@/types';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const setupImages = [
    images.homepage.setup1,
    images.homepage.setup3,
    images.homepage.setup2,
  ];

  // Check if desktop (1024px and above - excludes tablets)
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Auto-slide carousel - smoother timing
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % setupImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [setupImages.length]);

  // Get the 3 visible images (left, center, right)
  const getVisibleImages = () => {
    const prevIndex =
      (currentIndex - 1 + setupImages.length) % setupImages.length;
    const nextIndex = (currentIndex + 1) % setupImages.length;

    return {
      left: setupImages[prevIndex],
      center: setupImages[currentIndex],
      right: setupImages[nextIndex],
    };
  };

  const visibleImages = getVisibleImages();

  return (
    <section className="relative -mt-24 overflow-visible">
      {/* Hero Container */}
      <div className="relative h-[680px] sm:h-[700px] md:h-[750px] lg:h-[800px] overflow-visible">
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

        {/* Animated Tech Vector Lines - Left side */}
        <motion.div
          className="absolute left-0 top-0 w-full lg:w-1/2 h-full z-[3] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
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

        {/* Content Layer - Pushed down more on mobile */}
        <div className="relative z-[4] container-padding pt-40 sm:pt-36 md:pt-40 lg:pt-44 h-full flex flex-col items-center">
          <div className="text-center">
            <h1 className="hero-heading">
              THE SAFEST AND MOST RELIABLE
              <br />
              MONEY TRANSACTION PLATFORM
            </h1>

            <p className="hero-description mt-4 md:mt-6">
              Send money globally, receive payments, deposit and request funds,
              invest
              <br className="hidden sm:block" />
              and exchange across multiple currencies with low fees, speed and
              safety.
            </p>

            <div className="flex flex-row items-center justify-center gap-4 mt-6 md:mt-8">
              <Button variant="primary" size="md" className="md:size-lg">
                Get started for free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outlined-white" size="md" className="md:size-lg">
                Learn more
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Carousel - Desktop Only (3 Images) */}
        {isDesktop && (
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-[85%] lg:max-w-[1000px] xl:max-w-[1200px] z-[50] px-6">
            <div className="relative w-full flex items-center justify-center gap-3 mt-8">
              {/* Left Image */}
              <motion.div
                key={`left-${currentIndex}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[30%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={visibleImages.left}
                  alt="Setup preview"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Center Image - Largest */}
              <motion.div
                key={`center-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[42%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={visibleImages.center}
                  alt="Setup featured"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Right Image */}
              <motion.div
                key={`right-${currentIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[30%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={visibleImages.right}
                  alt="Setup preview"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {setupImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom Carousel - Mobile & Tablet (1 Image with side previews) */}
        {!isDesktop && (
          <div className="absolute -bottom-24 left-0 right-0 z-[50] px-6">
            <div className="relative w-full max-w-md mx-auto mt-8">
              {/* Container for all images */}
              <div className="relative h-[300px] sm:h-[350px]">
                {/* Left preview image - 80% height with blur edge */}
                <motion.div
                  key={`left-hint-${currentIndex}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[35%] rounded-xl overflow-hidden shadow-lg z-[1]"
                  style={{ height: '70%' }}
                >
                  <Image
                    src={visibleImages.left}
                    alt="Previous"
                    fill
                    className="object-cover"
                  />
                  {/* Subtle glow edge */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-purple-500/20 backdrop-blur-[1px]"></div>
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(168,85,247,0.3)]"></div>
                </motion.div>

                {/* Center main image - 100% height */}
                <motion.div
                  key={`center-mobile-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[85%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl z-[2]"
                >
                  <Image
                    src={visibleImages.center}
                    alt="Setup featured"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>

                {/* Right preview image - 80% height with blur edge */}
                <motion.div
                  key={`right-hint-${currentIndex}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-[35%] rounded-xl overflow-hidden shadow-lg z-[1]"
                  style={{ height: '70%' }}
                >
                  <Image
                    src={visibleImages.right}
                    alt="Next"
                    fill
                    className="object-cover"
                  />
                  {/* Subtle glow edge */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-pink-500/20 backdrop-blur-[1px]"></div>
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(236,72,153,0.3)]"></div>
                </motion.div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {setupImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-white'
                        : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
