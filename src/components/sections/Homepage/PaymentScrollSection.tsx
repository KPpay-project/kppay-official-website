'use client';

import { useState, useEffect } from 'react';
import {
  Globe,
  Users,
  Clock,
  Shield,
  Zap,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const PaymentScrollSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isContentHovered, setIsContentHovered] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [borderKey, setBorderKey] = useState(0);
  const [isSectionHovered, setIsSectionHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasEntered(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll on mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 1024; // lg breakpoint
    if (!isMobile || isSectionHovered) return; // Don't auto-scroll when hovered

    const AUTO_SCROLL_INTERVAL = 4000; // ⚡ CHANGE THIS VALUE TO ADJUST SPEED (in milliseconds)
    // 4000 = 4 seconds between slides
    // Increase for slower, decrease for faster

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === slides.length - 1) {
          return 0; // Loop back to first slide
        }
        return prev + 1;
      });
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [isSectionHovered]);

  const slides = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=900&fit=crop',
      imagePosition: 'left',
      icon: Globe,
      iconColor: 'from-blue-500 to-blue-700',
      title: 'Send Money Worldwide',
      description:
        'Transfer funds across 180+ countries with real-time exchange rates and zero hidden fees.',
      stats: ['180+ Countries', 'Real-time Rates', 'Instant Transfer'],
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=900&fit=crop',
      imagePosition: 'right',
      icon: Users,
      iconColor: 'from-blue-600 to-blue-800',
      title: 'Split Bills Effortlessly',
      description:
        'Split payments instantly with friends and track every transaction without the awkward conversations.',
      stats: ['Group Payments', 'Payment Requests', 'Auto Reminders'],
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=900&fit=crop',
      imagePosition: 'left',
      icon: Zap,
      iconColor: 'from-blue-500 to-slate-700',
      title: 'Get Paid Internationally',
      description:
        'Receive your salary from anywhere in the world with support for 50+ currencies at the best rates.',
      stats: ['50+ Currencies', 'Low Fees', 'Same-day Deposits'],
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=900&fit=crop',
      imagePosition: 'right',
      icon: Shield,
      iconColor: 'from-slate-600 to-slate-800',
      title: 'Bank-Level Security',
      description:
        'Protected by military-grade encryption and multi-factor authentication. Your money is safe with us.',
      stats: ['256-bit Encryption', '2FA Security', '$250K Insured'],
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600&h=900&fit=crop',
      imagePosition: 'left',
      icon: Clock,
      iconColor: 'from-blue-600 to-blue-900',
      title: '99.99% Uptime',
      description:
        "Always on, always ready. Built on the world's most reliable cloud infrastructure for you.",
      stats: ['99.99% Uptime', '24/7 Support', 'Zero Downtime'],
    },
  ];

  const handleNavigate = (dir: 'next' | 'prev') => {
    if (dir === 'next') {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;

  return (
    <section
      className={`relative min-h-screen flex items-center transition-all duration-1000 ${
        hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        background:
          'linear-gradient(180deg, #ffffff 0%, #f0f7ff 20%, #e0f0ff 40%, #f0f7ff 60%, #f8faff 80%, #ffffff 100%)',
      }}
      onMouseEnter={() => setIsSectionHovered(true)}
      onMouseLeave={() => setIsSectionHovered(false)}
    >
      {/* Animated Background */}
      <div
        className={`absolute inset-0 opacity-50 transition-all duration-0 ${
          isContentHovered ? 'blur-xs' : 'blur-0'
        }`}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1560fc" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="lg2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#1560fc" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="lg3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.9" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Horizontal data streams */}
          {[...Array(6)].map((_, i) => (
            <g key={`horiz-${i}`}>
              <path
                d={`M 0 ${i * 180} L 400 ${i * 180} L 400 ${
                  i * 180 + 100
                } L 800 ${i * 180 + 100} L 800 ${i * 180} L 1200 ${
                  i * 180
                } L 1200 ${i * 180 + 100} L 1920 ${i * 180 + 100}`}
                stroke="url(#lg1)"
                strokeWidth="3.5"
                fill="none"
                filter="url(#glow)"
                strokeDasharray="1500"
                strokeDashoffset="1500"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="1500"
                  to="-1500"
                  dur={`${isContentHovered ? (5 + i * 0.8) * 3 : 5 + i * 0.8}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;0.9;1;0.9;0.7;1"
                  dur={`${isContentHovered ? (4 + i * 0.4) * 3 : 4 + i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </path>
            </g>
          ))}

          {/* Pulsing connection nodes */}
          {[...Array(30)].map((_, i) => {
            const x = (i * 234) % 1920;
            const y = (i * 167) % 1080;
            return (
              <g key={`node-${i}`}>
                <circle
                  cx={x}
                  cy={y}
                  r="5"
                  fill={
                    i % 3 === 0
                      ? '#1560fc'
                      : i % 3 === 1
                      ? '#3b82f6'
                      : '#06b6d4'
                  }
                  filter="url(#glow)"
                >
                  <animate
                    attributeName="opacity"
                    values="0;0.9;0.5;0.9;0"
                    dur={`${
                      isContentHovered ? (4 + i * 0.3) * 3 : 4 + i * 0.3
                    }s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.1}s`}
                  />
                  <animate
                    attributeName="r"
                    values="3;7;3;5;3"
                    dur={`${
                      isContentHovered ? (4 + i * 0.3) * 3 : 4 + i * 0.3
                    }s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.1}s`}
                  />
                </circle>
                <circle
                  cx={x}
                  cy={y}
                  r="10"
                  fill="none"
                  stroke={
                    i % 3 === 0
                      ? '#1560fc'
                      : i % 3 === 1
                      ? '#3b82f6'
                      : '#06b6d4'
                  }
                  strokeWidth="1.5"
                  opacity="0.6"
                >
                  <animate
                    attributeName="r"
                    values="8;18;8"
                    dur={`${
                      isContentHovered ? (5 + i * 0.3) * 3 : 5 + i * 0.3
                    }s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.1}s`}
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;0;0.6"
                    dur={`${
                      isContentHovered ? (5 + i * 0.3) * 3 : 5 + i * 0.3
                    }s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.1}s`}
                  />
                </circle>
                <circle
                  cx={x}
                  cy={y}
                  r="15"
                  fill="none"
                  stroke={
                    i % 3 === 0
                      ? '#1560fc'
                      : i % 3 === 1
                      ? '#3b82f6'
                      : '#06b6d4'
                  }
                  strokeWidth="1"
                  opacity="0.4"
                >
                  <animate
                    attributeName="r"
                    values="12;25;12"
                    dur={`${
                      isContentHovered ? (6 + i * 0.3) * 3 : 6 + i * 0.3
                    }s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.1}s`}
                  />
                  <animate
                    attributeName="opacity"
                    values="0.4;0;0.4"
                    dur={`${
                      isContentHovered ? (6 + i * 0.3) * 3 : 6 + i * 0.3
                    }s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.1}s`}
                  />
                </circle>
              </g>
            );
          })}

          {/* Circuit board patterns */}
          {[...Array(4)].map((_, i) => (
            <g key={`circuit-${i}`}>
              <path
                d={`M ${i * 480} 200 L ${i * 480 + 200} 200 L ${
                  i * 480 + 200
                } 400 L ${i * 480 + 400} 400 M ${i * 480 + 200} 400 L ${
                  i * 480 + 200
                } 600 L ${i * 480 + 400} 600`}
                stroke="url(#lg2)"
                strokeWidth="4"
                fill="none"
                filter="url(#glow)"
                strokeLinecap="round"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0 1000;1000 0;0 1000"
                  dur={`${isContentHovered ? (6 + i * 1) * 3 : 6 + i * 1}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.4;1;0.4"
                  dur={`${isContentHovered ? (4 + i * 0.6) * 3 : 4 + i * 0.6}s`}
                  repeatCount="indefinite"
                />
              </path>
            </g>
          ))}
        </svg>
      </div>

      {/* Main Content */}
      <div
        className="relative h-full flex items-center justify-center py-4"
        style={{ zIndex: 2 }}
      >
        <div className="w-[80%] md:w-[70%] h-full flex items-center px-4 lg:px-0">
          <div
            key={currentSlide}
            className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-500 ${
              currentSlideData.imagePosition === 'right'
                ? 'lg:grid-flow-dense'
                : ''
            }`}
            style={{
              animation: hasEntered ? 'slideIn 0.5s ease-out' : 'none',
            }}
          >
            {/* Image Column */}
            <div
              className={`relative h-[150px] md:h-[420px] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] w-full lg:w-[85%] ${
                currentSlideData.imagePosition === 'right'
                  ? 'lg:col-start-2'
                  : ''
              }`}
              style={{
                boxShadow:
                  '0 25px 50px -12px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)',
                margin:
                  currentSlideData.imagePosition === 'right'
                    ? '0 0 0 auto'
                    : '0 auto 0 0',
                animation: hasEntered
                  ? `fadeInScale 0.8s ease-out ${0.2}s both`
                  : 'none',
              }}
            >
              <img
                src={currentSlideData.image}
                alt={currentSlideData.title}
                className="w-full h-full object-cover object-center"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.iconColor} opacity-15 mix-blend-overlay`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
                style={{
                  animation: 'scanLine 3s linear infinite',
                }}
              />
            </div>

            {/* Content Column */}
            <div
              className={`bg-white p-8 py-12 rounded-md relative z-10 ${
                currentSlideData.imagePosition === 'right'
                  ? 'lg:col-start-1 lg:row-start-1'
                  : ''
              }`}
              style={{
                boxShadow:
                  'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
                animation: hasEntered
                  ? `fadeInScale 0.8s ease-out ${0.4}s both`
                  : 'none',
              }}
              onMouseEnter={() => {
                setIsContentHovered(true);
                setBorderKey((prev) => prev + 1);
              }}
              onMouseLeave={() => setIsContentHovered(false)}
            >
              {/* Border flash effect on hover - plays once through all corners */}
              {isContentHovered && (
                <div
                  key={borderKey}
                  className="absolute inset-0 pointer-events-none rounded-md overflow-hidden"
                >
                  <div
                    className="absolute w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent top-0 left-0"
                    style={{
                      animation: 'borderTop 0.3s ease-out forwards',
                    }}
                  />
                  <div
                    className="absolute w-[3px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent top-0 right-0"
                    style={{
                      animation: 'borderRight 0.3s ease-out 0.3s forwards',
                    }}
                  />
                  <div
                    className="absolute w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent bottom-0 right-0"
                    style={{
                      animation: 'borderBottom 0.3s ease-out 0.6s forwards',
                    }}
                  />
                  <div
                    className="absolute w-[3px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent bottom-0 left-0"
                    style={{
                      animation: 'borderLeft 0.3s ease-out 0.9s forwards',
                    }}
                  />
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${currentSlideData.iconColor} shadow-lg relative transition-transform duration-300 hover:scale-110 hover:rotate-6`}
                >
                  <Icon className="w-6 h-6 text-white relative z-10" />
                  <div
                    className="absolute inset-0 rounded-xl bg-blue-400/30"
                    style={{
                      animation: 'pulse 2s ease-in-out infinite',
                    }}
                  />
                </div>
                <h3
                  className={`text-3xl lg:text-4xl font-black bg-gradient-to-r ${currentSlideData.iconColor} bg-clip-text text-transparent`}
                >
                  {currentSlideData.title}
                  {isContentHovered && (
                    <span
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/50 to-blue-500/0 pointer-events-none"
                      style={{
                        animation: '3.5s ease-in-out infinite',
                        mixBlendMode: 'overlay',
                      }}
                    />
                  )}
                </h3>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed mb-5 font-medium">
                {currentSlideData.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {currentSlideData.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 shadow-sm relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:border-blue-400/40"
                    style={{
                      animation: `fadeInUp 0.4s ease-out ${
                        0.6 + index * 0.1
                      }s both`,
                    }}
                  >
                    <span className="text-xs font-bold text-slate-700 relative z-10">
                      {stat}
                    </span>
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        animation: 'shimmer 1.5s ease-in-out infinite',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Buttons - Left and Right */}
        <button
          onClick={() => handleNavigate('prev')}
          className={`lg:hidden absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-xl flex items-center justify-center z-50 overflow-hidden group transition-all duration-300 hover:scale-110 active:scale-95 ${
            hasEntered
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-8'
          }`}
          style={{
            transitionDelay: '0.6s',
          }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white relative z-10" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-blue-600/50"
            style={{
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
        </button>

        <button
          onClick={() => handleNavigate('next')}
          className={`lg:hidden absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-xl flex items-center justify-center z-50 overflow-hidden group transition-all duration-300 hover:scale-110 active:scale-95 ${
            hasEntered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
          style={{
            transitionDelay: '0.6s',
          }}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white relative z-10" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-blue-600/50"
            style={{
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
        </button>

        {/* Desktop Navigation Arrow */}
        <button
          onClick={() => handleNavigate('next')}
          className={`hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 w-12 h-28 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 shadow-2xl items-center justify-center z-50 overflow-hidden group transition-all duration-300 hover:scale-105 active:scale-95 ${
            hasEntered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
          style={{
            transitionDelay: '0.6s',
          }}
          aria-label="Next slide"
        >
          <ChevronDown className="w-6 h-6 text-white transition-transform duration-300 relative z-10" />
          <div
            className="absolute inset-0 bg-gradient-to-b from-blue-400/50 to-blue-600/50"
            style={{
              animation: 'flowDown 2s linear infinite',
            }}
          />
        </button>
      </div>

      {/* Progress Lines */}
      <div
        className={`hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2 z-50 bg-slate-900/80 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-blue-500/20 transition-all duration-700 ${
          hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          transitionDelay: '0.8s',
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="transition-all duration-300 relative hover:scale-110 active:scale-90 cursor-pointer"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? 'w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg shadow-blue-500/50'
                  : 'w-8 h-0.5 bg-slate-600 rounded-full hover:bg-slate-500'
              }`}
            />
            {index === currentSlide && (
              <div
                className="absolute inset-0 bg-blue-400 rounded-full blur-md"
                style={{
                  animation: 'glow 2s ease-in-out infinite',
                }}
              />
            )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scanLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes flowDown {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        @keyframes borderTop {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(100%); opacity: 1; }
        }

        @keyframes borderRight {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(100%); opacity: 1; }
        }

        @keyframes borderBottom {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(-100%); opacity: 1; }
        }

        @keyframes borderLeft {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(-100%); opacity: 1; }
        }

        @keyframes titleShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
};

export default PaymentScrollSection;
