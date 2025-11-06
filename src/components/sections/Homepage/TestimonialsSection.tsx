'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { images } from '@/types';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
}

const TestimonialsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ashley Cooper',
      image: images.testimonials.Ashley,
      rating: 5,
      text: 'I really like the system at this management, i love recommending this software to you guys',
    },
    {
      id: 2,
      name: 'Jackline Fare',
      image: images.testimonials.Jack,
      rating: 5,
      text: '"We align our success with the success of our customers which is why our offering transcends our software".',
    },
    {
      id: 3,
      name: 'John Cooper',
      image: images.testimonials.John,
      rating: 4,
      text: 'Outstanding service and seamless integration. KPpay has transformed how we handle payments.',
    },
    {
      id: 4,
      name: 'Ashley Cooper',
      image: images.testimonials.Ashley,
      rating: 5,
      text: "The best payment solution we've ever used. Fast, reliable, and incredibly easy to implement.",
    },
    {
      id: 5,
      name: 'Jackline Fare',
      image: images.testimonials.Jack,
      rating: 5,
      text: 'Exceptional platform with top-notch security. Our customers trust us more because of KPpay.',
    },
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      const newScrollPosition =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-surface-secondary overflow-hidden">
      {/* Container */}
      <div className="container-padding max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="heading-bebas text-3xl sm:text-4xl lg:text-5xl mb-0"
            style={{ color: 'var(--color-text-primary)' }}
          >
            OUR USERS LOVE OUR APP AND ARE <span> </span>
            <br className="hidden sm:block" />
            SAYING GOOD THINGS
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mr-6 sm:-mr-8 lg:-mr-12 pr-6 sm:pr-8 lg:pr-12"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="shrink-0 w-[85%] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] snap-start"
              >
                <div className="bg-brand-primary rounded-xl p-5 sm:p-6 relative h-full flex flex-col">
                  {/* Testimonial Text */}
                  <p className="text-white text-sm leading-relaxed mb-6 flex-grow">
                    {testimonial.text}
                  </p>

                  {/* User Info and Quote Icon Container */}
                  <div className="flex items-end justify-between">
                    {/* User Info */}
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">
                          {testimonial.name}
                        </h4>
                        <div className="flex gap-0.5 mt-0.5">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <svg
                              key={index}
                              className={`w-3 h-3 ${
                                index < testimonial.rating
                                  ? 'text-yellow-400'
                                  : 'text-white/30'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quote Icon */}
                    <div className="relative w-20 h-16 shrink-0">
                      <Image
                        src={images.testimonials.quotes}
                        alt="Quote"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-gray/20 flex items-center justify-center text-gray-500 hover:bg-white/10 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-gray/20 flex items-center justify-center text-gray-500 hover:bg-white/10 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hide scrollbar globally for this section */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
