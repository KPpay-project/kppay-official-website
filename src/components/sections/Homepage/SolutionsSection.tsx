'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Wallet,
  FileText,
  ShoppingCart,
  Smartphone,
  Zap,
  Building2,
  Store,
  Heart,
  GraduationCap,
  Plug2,
  Database,
  Code,
  Headphones,
  BookOpen,
  LifeBuoy,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { images } from '@/types';

interface CardData {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
  link?: string;
}

interface ContentDataType {
  services: CardData[];
  industries: CardData[];
  integration: CardData[];
  support: CardData[];
}

interface ScrollPosition {
  atStart: boolean;
  atEnd: boolean;
  scrollPercentage: number;
}

const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof ContentDataType>('services');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    atStart: true,
    atEnd: false,
    scrollPercentage: 0,
  });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: 'services' as const, label: 'Our Services' },
    { id: 'industries' as const, label: 'Industries We Serve' },
    { id: 'integration' as const, label: 'Integration Solutions' },
    { id: 'support' as const, label: 'Support & Resources' },
  ];

  const contentData: ContentDataType = {
    services: [
      {
        title: 'Secure Payment Gateway',
        description:
          'Our comprehensive services cater to businesses of all sizes, whether online or in-store. We offer a secure payment gateway with advanced encryption, fraud detection, and seamless integration capabilities for your business.',
        image: images.solutions.payment,
        icon: <Shield className="w-6 h-6" />,
        link: '/services/payment-gateway',
      },
      {
        title: 'Digital Wallet',
        description:
          "KPpay's digital wallet offers a secure and convenient way to manage your finances. Store payment information, make purchases, transfer funds with ease, and enjoy contactless payments all from your mobile device.",
        image: images.solutions.wallet,
        icon: <Wallet className="w-6 h-6" />,
        link: '/services/digital-wallet',
      },
      {
        title: 'Online Bill Payments',
        description:
          "KPpay's online bill payment service simplifies the payment process for your customers. Businesses can easily integrate this service, allowing customers to pay utility bills, subscriptions, and more directly.",
        image: images.solutions.billPayment,
        icon: <FileText className="w-6 h-6" />,
        link: '/services/bill-payments',
      },
      {
        title: 'E-Commerce Solutions',
        description:
          "KPpay's e-commerce solutions empower businesses to effortlessly trade goods and services online. With our platform, businesses can expand their reach, manage inventory, and provide seamless checkout experiences.",
        image: images.solutions.ecommerce,
        icon: <ShoppingCart className="w-6 h-6" />,
        link: '/services/ecommerce',
      },
      {
        title: 'Mobile Wallet & Recharge',
        description:
          "KPpay's mobile wallet offers more than just payments. Users can send and receive money, pay bills, shop online or at stores, recharge mobile airtime, and even access instant digital loans with competitive rates.",
        image: images.solutions.mobileRecharge,
        icon: <Smartphone className="w-6 h-6" />,
        link: '/services/mobile-recharge',
      },
      {
        title: 'Instant Setup',
        description:
          'KPpay offers a hassle-free instant setup, allowing merchants to start accepting payments immediately. No complicated paperwork, no long waiting periods. Expand your business with ease and flexibility today.',
        image: images.solutions.instantSetup,
        icon: <Zap className="w-6 h-6" />,
        link: '/services/instant-setup',
      },
    ],
    industries: [],
    integration: [],
    support: [],
  };

  const activeContent = contentData[activeTab];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;

      const scrollPercentage =
        maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 100;

      setScrollPosition({
        atStart: scrollLeft < 10,
        atEnd: scrollLeft >= maxScroll - 10,
        scrollPercentage,
      });
    }
  };

  useEffect(() => {
    checkScroll();
  }, [activeTab, activeContent.length]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (expandedCard !== null) {
        const target = e.target as HTMLElement;
        if (!target.closest('.card-wrapper')) {
          setExpandedCard(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [expandedCard]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;

      const targetScroll =
        direction === 'right'
          ? container.scrollLeft + scrollAmount
          : container.scrollLeft - scrollAmount;

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });

      setTimeout(checkScroll, 350);
    }
  };

  const CardContent: React.FC<{ card: CardData; index: number }> = ({
    card,
    index,
  }) => {
    const isExpanded = expandedCard === index;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const getExpandPosition = () => {
      if (!scrollContainerRef.current || isMobile) return 'none';

      const cards =
        scrollContainerRef.current.querySelectorAll('.card-wrapper');
      const containerRect = scrollContainerRef.current.getBoundingClientRect();
      const currentCard = cards[index] as HTMLElement;
      const cardRect = currentCard?.getBoundingClientRect();

      if (!cardRect) return 'left';

      const visibleCards = Array.from(cards).filter((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        return (
          rect.left >= containerRect.left - 50 &&
          rect.right <= containerRect.right + 50
        );
      });

      const visibleIndex = visibleCards.indexOf(currentCard);
      const visibleCount = visibleCards.length;

      if (visibleCount >= 3) {
        if (visibleIndex === 0) return 'left';
        if (visibleIndex === visibleCount - 1) return 'right';
        return 'center';
      }

      if (visibleCount === 2) {
        return visibleIndex === 0 ? 'left' : 'right';
      }

      return 'left';
    };

    const expandPosition = getExpandPosition();

    const getExpandedStyle = () => {
      if (!isExpanded || isMobile) return {};

      const containerWidth = scrollContainerRef.current?.offsetWidth || 0;
      const expandedWidth =
        window.innerWidth >= 1024
          ? containerWidth * 0.9
          : containerWidth * 0.95;

      if (expandPosition === 'center') {
        return {
          width: `${expandedWidth}px`,
          position: 'absolute' as const,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
        };
      }

      if (expandPosition === 'right') {
        return {
          width: `${expandedWidth}px`,
          position: 'absolute' as const,
          right: 0,
          zIndex: 50,
        };
      }

      return {
        width: `${expandedWidth}px`,
        position: 'absolute' as const,
        left: 0,
        zIndex: 50,
      };
    };

    return (
      <div
        className="card-wrapper relative transition-all duration-700 ease-out flex-shrink-0"
        style={{
          zIndex: isExpanded ? 50 : 10,
          ...getExpandedStyle(),
        }}
      >
        <div
          className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-700 ease-out ${
            isExpanded
              ? 'shadow-2xl shadow-blue-500/20 scale-[1.02]'
              : 'shadow-lg hover:shadow-xl'
          }`}
          style={{
            border: '1px solid rgba(59, 130, 246, 0.1)',
            height: '320px',
          }}
        >
          <div
            className={`flex h-full transition-all duration-700 ease-out ${
              isExpanded ? 'flex-row' : 'flex-col'
            }`}
          >
            {/* Image Section */}
            <div
              className={`relative overflow-hidden transition-all duration-700 ease-out ${
                isExpanded ? 'w-1/2' : 'w-full h-40'
              }`}
            >
              <img
                src={card.image}
                alt={card.title}
                className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
                  isExpanded ? 'scale-105' : 'group-hover:scale-110'
                }`}
              />

              {/* Zoom Button - Only show when not expanded */}
              {!isExpanded && !isMobile && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedCard(index);
                  }}
                  className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg z-10"
                  aria-label="Expand card"
                >
                  <Maximize2 className="w-5 h-5 text-blue-600" />
                </button>
              )}
            </div>

            {/* Content Section */}
            <div
              className={`p-5 flex flex-col justify-center transition-all duration-700 ease-out bg-white relative ${
                isExpanded ? 'w-1/2' : 'w-full'
              }`}
            >
              {/* Minimize Button - Only show when expanded */}
              {isExpanded && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedCard(null);
                  }}
                  className="absolute top-3 right-3 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center hover:bg-blue-100 transition-all duration-300 hover:scale-110 shadow-md z-10"
                  aria-label="Minimize card"
                >
                  <Minimize2 className="w-4 h-4 text-blue-600" />
                </button>
              )}

              <h3
                className={`font-bold text-gray-900 mb-2 transition-all duration-700 ${
                  isExpanded ? 'text-xl' : 'text-lg group-hover:text-blue-600'
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`text-gray-600 leading-relaxed transition-all duration-700 ${
                  isExpanded
                    ? 'line-clamp-none text-sm'
                    : 'line-clamp-3 text-xs'
                }`}
              >
                {card.description}
              </p>
              {card.link && (
                <div
                  className={`mt-4 transition-all duration-700 ${
                    isExpanded
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group/link cursor-pointer">
                    Explore More
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="relative flex items-center py-8 overflow-hidden"
      style={{
        minHeight: 'calc(100vh - 80px)',
        background:
          'linear-gradient(180deg, #ffffff 0%, #f0f7ff 20%, #e0f0ff 40%, #f0f7ff 60%, #f8faff 80%, #ffffff 100%)',
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h2 className="heading-bebas-light text-4xl sm:text-5xl text-text-main-dark">
            KPPAY SOLUTIONS
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setExpandedCard(null);
              }}
              className={`relative px-2 pb-2 font-semibold text-base transition-all duration-500 group ${
                activeTab === tab.id
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              <span className="relative z-10">{tab.label}</span>
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 rounded-full transition-all duration-500 ${
                  activeTab === tab.id
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-60'
                }`}
                style={{
                  background:
                    'linear-gradient(90deg, #60a5fa 0%, #3b82f6 25%, #2563eb 50%, #3b82f6 75%, #60a5fa 100%)',
                  boxShadow:
                    activeTab === tab.id
                      ? '0 4px 12px rgba(59, 130, 246, 0.4)'
                      : 'none',
                }}
              />
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="relative px-16">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            disabled={scrollPosition.atStart}
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center transition-all duration-300 ${
              scrollPosition.atStart
                ? 'opacity-0 pointer-events-none scale-90'
                : 'opacity-100 hover:scale-110 hover:bg-blue-50 z-[60]'
            }`}
            style={{ border: '2px solid rgba(59, 130, 246, 0.1)' }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            disabled={scrollPosition.atEnd}
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center transition-all duration-300 ${
              scrollPosition.atEnd
                ? 'opacity-0 pointer-events-none scale-90'
                : 'opacity-100 hover:scale-110 hover:bg-blue-50 z-[60]'
            }`}
            style={{ border: '2px solid rgba(59, 130, 246, 0.1)' }}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[80%] md:auto-cols-[48%] lg:auto-cols-[32%] gap-5">
              {activeContent.map((card, index) => (
                <div key={`${activeTab}-${index}`} className="snap-start">
                  <CardContent card={card} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Progress Bar */}
          <div className="flex justify-center mt-8">
            <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500 rounded-full transition-all duration-300"
                style={{ width: `${scrollPosition.scrollPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default SolutionsSection;
