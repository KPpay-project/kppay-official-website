// src/components/layout/Header.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Button, images } from '@/types';
import {
  Menu,
  X,
  ChevronDown,
  Smartphone,
  CreditCard,
  RotateCcw,
  Store,
  Shield,
  Zap,
  Link2,
  Layers,
  Code,
  Building,
  Users,
  ShieldCheck,
  UserCheck,
  Calendar,
  Key,
  Monitor,
  Wallet,
  Banknote,
  Receipt,
  FileText,
  BarChart3,
  TrendingUp,
  Lock,
  Globe,
  Settings,
  CheckCircle,
  ArrowRight,
  Download,
  Upload,
  Search,
  Bell,
  Package,
  ShoppingCart,
  Percent,
  Database,
  Server,
  Cloud,
  Briefcase,
  Target,
  Award,
  Star,
  Heart,
  Eye,
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface HeaderProps {
  variant?: 'light' | 'dark';
}

export default function Header({ variant = 'light' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const isLight = variant === 'light';
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const closingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (closingTimeoutRef.current) {
      clearTimeout(closingTimeoutRef.current);
      closingTimeoutRef.current = null;
    }
    setIsClosing(false);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsClosing(true);
      closingTimeoutRef.current = setTimeout(() => {
        setMegaMenuOpen(false);
        setIsClosing(false);
      }, 150);
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (closingTimeoutRef.current) {
        clearTimeout(closingTimeoutRef.current);
      }
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(false);
  };

  const openMobileSubMenu = () => {
    setMobileSubMenuOpen(true);
  };

  const closeMobileSubMenu = () => {
    setMobileSubMenuOpen(false);
  };

  const useSolidBg = isScrolled || mobileMenuOpen;
  const useWhiteText = !isScrolled && !isLight && !mobileMenuOpen;

  return (
    <>
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes slide-down-fade {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-slide-down-fade {
          animation: slide-down-fade 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-slide-up-fade-out {
          animation: slide-up-fade-out 0.15s cubic-bezier(0.4, 0, 1, 1) forwards;
        }

        @keyframes slide-up-fade-out {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-slide-left {
          animation: slide-left 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      {isScrolled && (
        <div
          className="fixed top-0 left-0 right-0 pointer-events-none z-60 transition-all duration-300"
          style={{
            height: isScrolled ? '72px' : '88px',
            backdropFilter: 'blur(70px)',
            WebkitBackdropFilter: 'blur(70px)',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, transparent 100%)',
          }}
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-70 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <nav
          className={`header-container transition-all duration-300 ${
            useSolidBg ? 'bg-surface-secondary' : 'header-light-bg'
          }`}
        >
          <div
            className={`max-w-7xl mx-auto px-6 transition-all duration-300 ${
              isScrolled ? 'py-2' : 'py-3'
            }`}
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <div
                  className={`relative transition-all duration-300 ${
                    isScrolled
                      ? 'w-[100px] h-[28px] md:w-[85px] md:h-[24px] lg:w-[120px] lg:h-[32px]'
                      : 'w-[120px] h-[32px] md:w-[95px] md:h-[26px] lg:w-[140px] lg:h-[40px]'
                  }`}
                >
                  <Image
                    src={
                      useWhiteText ? images.logos.primary : images.logos.primary
                    }
                    alt="KPPAY Logo"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              <div className="hidden md:flex items-center gap-2 lg:gap-8">
                <Link
                  href="/about"
                  className={`font-medium text-xs lg:text-sm transition-colors ${
                    useWhiteText
                      ? 'text-text-main-white hover:text-brand-primary'
                      : 'text-text-primary hover:text-brand-primary'
                  }`}
                >
                  About
                </Link>

                <div
                  className="relative flex items-center gap-1 py-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    className={`font-medium text-xs lg:text-sm transition-colors cursor-default ${
                      useWhiteText
                        ? 'text-text-main-white hover:text-brand-primary'
                        : 'text-text-primary hover:text-brand-primary'
                    }`}
                  >
                    Product
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-all duration-300 ${
                      megaMenuOpen ? 'rotate-180' : ''
                    } ${
                      useWhiteText
                        ? 'text-text-main-white'
                        : 'text-text-primary'
                    }`}
                  />
                </div>

                <Link
                  href="/individual"
                  className={`font-medium text-xs lg:text-sm transition-colors ${
                    useWhiteText
                      ? 'text-text-main-white hover:text-brand-primary'
                      : 'text-text-primary hover:text-brand-primary'
                  }`}
                >
                  Individual
                </Link>

                <Link
                  href="/enterprise"
                  className={`font-medium text-xs lg:text-sm transition-colors ${
                    useWhiteText
                      ? 'text-text-main-white hover:text-brand-primary'
                      : 'text-text-primary hover:text-brand-primary'
                  }`}
                >
                  Enterprise
                </Link>

                <Link
                  href="/resources-and-documentation"
                  className={`font-medium text-xs lg:text-sm transition-colors ${
                    useWhiteText
                      ? 'text-text-main-white hover:text-brand-primary'
                      : 'text-text-primary hover:text-brand-primary'
                  }`}
                >
                  Resources
                </Link>

                <Link
                  href="/faqs"
                  className={`font-medium text-xs lg:text-sm transition-colors ${
                    useWhiteText
                      ? 'text-text-main-white hover:text-brand-primary'
                      : 'text-text-primary hover:text-brand-primary'
                  }`}
                >
                  FAQs
                </Link>
              </div>

              <div className="hidden md:flex items-center gap-1.5 lg:gap-3">
                <div className="hidden lg:block">
                  <LanguageSwitcher />
                </div>
                <div className="block md:block lg:hidden">
                  <LanguageSwitcher variant="mobile" />
                </div>
                <Button
                  variant={useWhiteText ? 'outlined-white' : 'outlined'}
                  size="sm"
                  href="https://dev.d32yml5hzs7qtc.amplifyapp.com/onboarding/login?user=user"
                  className="md:text-xs md:px-2.5 md:py-1.5 lg:text-sm lg:px-4 lg:py-2"
                  target="_self"
                >
                  Log in
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  href="https://dev.d32yml5hzs7qtc.amplifyapp.com/onboarding/create-account"
                  className="md:text-xs md:px-2.5 md:py-1.5 lg:text-sm lg:py-2"
                  target="_self"
                >
                  Sign up
                </Button>
              </div>

              <div className="md:hidden flex items-center gap-3">
                <LanguageSwitcher variant="mobile" />
                <button
                  className="md:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? (
                    <X className="text-text-primary w-6 h-6" />
                  ) : (
                    <Menu
                      className={`w-6 h-6 ${
                        useWhiteText
                          ? 'text-text-main-white'
                          : 'text-text-main-dark'
                      }`}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Product Mega Menu - Consolidated */}
      {megaMenuOpen && !mobileMenuOpen && (
        <>
          <div
            className={`fixed inset-0 z-60 bg-text-main-dark/20 transition-opacity duration-150 ${
              isClosing ? 'opacity-0' : 'opacity-100 animate-fade-in'
            }`}
            onClick={() => {
              setIsClosing(true);
              setTimeout(() => {
                setMegaMenuOpen(false);
                setIsClosing(false);
              }, 150);
            }}
          />
          <div
            className={`hidden md:block fixed left-1/2 -translate-x-1/2 w-full max-w-7xl rounded-lg border border-border-secondary bg-surface-primary shadow-xl z-70 transition-all duration-300 ${
              isScrolled ? 'top-[69px]' : 'top-[78px]'
            } ${
              isClosing
                ? 'animate-slide-up-fade-out'
                : 'animate-slide-down-fade'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="px-12 py-12">
              <div className="relative mb-8">
                <div className="grid grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-text-tertiary uppercase text-xs font-semibold tracking-wider mb-2">
                      PAYMENTS
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      Accept payments online and in person
                    </p>
                  </div>
                  <div>
                    <h3 className="text-text-tertiary uppercase text-xs font-semibold tracking-wider mb-2">
                      FINANCIAL SERVICES
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      Complete payment processing solutions
                    </p>
                  </div>
                  <div>
                    <h3 className="text-text-tertiary uppercase text-xs font-semibold tracking-wider mb-2">
                      FINANCIAL TOOLS
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      Identity verification and connections
                    </p>
                  </div>
                  <div>
                    <h3 className="text-text-tertiary uppercase text-xs font-semibold tracking-wider mb-2">
                      DEVELOPER & ENTERPRISE
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      Tools and resources for developers
                    </p>
                  </div>
                </div>
                <hr className="absolute bottom-0 left-0 right-0 border-t border-border-secondary" />
              </div>

              <div className="grid grid-cols-4 gap-8">
                <div className="space-y-6">
                  <Link
                    href="/payments/online-payments"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <CreditCard className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Online Payments
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Accept payments online
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/payments/point-of-sale"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <Store className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Point of Sale
                        </h4>
                        <p className="text-sm text-text-secondary">
                          In-person payment processing
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/payments/mobile-payments"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <Smartphone className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Mobile Payments
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Accept payments on mobile
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/payments/recurring-billing"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <RotateCcw className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Recurring Billing
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Automated subscription management
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="space-y-6">
                  <Link
                    href="/payment-infrastructure/payment-gateway"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <Zap className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Payment Gateway
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Fast and secure processing
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/payment-infrastructure/subscriptions"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <RotateCcw className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Subscriptions
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Recurring payment management
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/payment-infrastructure/connect-platforms"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <Link2 className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Connect Platforms
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Multi-party payment orchestration
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/payment-infrastructure/virtual-cards"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <CreditCard className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Virtual Cards
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Issue virtual cards instantly
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/payment-infrastructure/pos-terminal"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <Store className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          POS Terminal
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Smart point-of-sale solutions
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="space-y-6">
                  <Link
                    href="/financial-services/identity-kyc"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <UserCheck className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Identity and KYC
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Identity verification and compliance
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/financial-services/financial-connections"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <Layers className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Financial Connections
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Connect to accounts securely
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/financial-services/analytics"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <BarChart3 className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Analytics
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Insights into your financial data
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/financial-services/reporting"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <FileText className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Reporting
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Comprehensive reporting
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/financial-services/compliance"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <Shield className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Compliance
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Compliant financial regulations
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="space-y-6">
                  <Link
                    href="/resources-and-documentation"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <Code className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          API Documentation
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Complete API reference and guides
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/developer-enterprise/enterprise-infrastructure"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <Building className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Enterprise Infrastructure
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Scalable enterprise solutions
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/developer-enterprise/partners-program"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <Users className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Partners Program
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Join our partner ecosystem
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/developer-enterprise/trust-security"
                    className="block group"
                    onClick={() => setMegaMenuOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <Shield className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Trust and Security
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Security certifications and compliance
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Mobile Menu - Main */}
      {mobileMenuOpen && !mobileSubMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-surface-primary z-[40] animate-slide-up">
          <div className="flex flex-col h-full justify-center px-6 pb-8 pt-36">
            <div className="flex flex-col gap-8 text-2xl px-6">
              <Link
                href="/about"
                className="font-medium text-text-primary hover:text-brand-primary transition-colors"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <button
                onClick={openMobileSubMenu}
                className="font-medium flex items-center justify-between text-text-primary hover:text-brand-primary transition-colors"
              >
                Product
                <ChevronDown className="w-6 h-6 -rotate-90" />
              </button>
              <Link
                href="/individual"
                className="font-medium text-text-primary hover:text-brand-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Individual
              </Link>
              <Link
                href="/enterprise"
                className="font-medium text-text-primary hover:text-brand-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Enterprise
              </Link>
              <Link
                href="/resources-and-documentation"
                className="font-medium text-text-primary hover:text-brand-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Resources
              </Link>
              <Link
                href="/faqs"
                className="font-medium text-text-primary hover:text-brand-primary transition-colors"
                onClick={closeMobileMenu}
              >
                FAQs
              </Link>
            </div>
            <div className="mt-auto flex flex-col gap-4 px-6">
              <Button
                variant="outlined"
                size="md"
                href="https://dev.d32yml5hzs7qtc.amplifyapp.com/onboarding/login?user=user"
                fullWidth
                target="_self"
              >
                Log in
              </Button>
              <Button
                variant="primary"
                size="md"
                href="https://dev.d32yml5hzs7qtc.amplifyapp.com/onboarding/create-account"
                fullWidth
                target="_self"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu - Product Submenu */}
      {mobileSubMenuOpen && mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-surface-primary z-[80] overflow-y-auto animate-slide-left">
          <div className="sticky top-0 bg-surface-primary border-b border-border-secondary z-10">
            <div className="flex items-center justify-between px-6 py-5">
              <button
                onClick={closeMobileSubMenu}
                className="flex items-center gap-2 text-text-primary hover:text-brand-primary transition-colors"
                aria-label="Go back"
              >
                <ChevronDown className="w-5 h-5 rotate-90" />
                <span className="font-medium text-lg">Back</span>
              </button>
              <button
                onClick={closeMobileMenu}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-text-primary" />
              </button>
            </div>
          </div>

          <div className="px-6 py-8 space-y-10">
            <div>
              <h3 className="text-text-tertiary uppercase text-xs font-semibold tracking-wider mb-3">
                PAYMENTS
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                Accept payments online and in person
              </p>
              <div className="space-y-6">
                {[
                  {
                    href: '/payments/online-payments',
                    icon: CreditCard,
                    title: 'Online Payments',
                    desc: 'Accept payments online',
                  },
                  {
                    href: '/payments/point-of-sale',
                    icon: Store,
                    title: 'Point of Sale',
                    desc: 'In-person payment processing',
                  },
                  {
                    href: '/payments/mobile-payments',
                    icon: Smartphone,
                    title: 'Mobile Payments',
                    desc: 'Accept payments on mobile',
                  },
                  {
                    href: '/payments/recurring-billing',
                    icon: RotateCcw,
                    title: 'Recurring Billing',
                    desc: 'Automated subscription management',
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block group"
                    onClick={closeMobileMenu}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <item.icon className="w-6 h-6 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary text-lg mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-text-tertiary uppercase text-xs font-semibold tracking-wider mb-3">
                FINANCIAL SERVICES
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                Complete payment processing solutions
              </p>
              <div className="space-y-6">
                {[
                  {
                    href: '/payment-infrastructure/payment-gateway',
                    icon: Zap,
                    title: 'Payment Gateway',
                    desc: 'Fast and secure processing',
                  },
                  {
                    href: '/payment-infrastructure/subscriptions',
                    icon: Cloud,
                    title: 'Subscriptions',
                    desc: 'Recurring payment management',
                  },
                  {
                    href: '/payment-infrastructure/connect-platforms',
                    icon: Link2,
                    title: 'Connect Platforms',
                    desc: 'Multi-party payment orchestration',
                  },
                  {
                    href: '/payment-infrastructure/virtual-cards',
                    icon: Key,
                    title: 'Virtual Cards',
                    desc: 'Issue virtual cards instantly',
                  },
                  {
                    href: '/payment-infrastructure/pos-terminal',
                    icon: MapPin,
                    title: 'POS Terminal',
                    desc: 'Smart point-of-sale solutions',
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block group"
                    onClick={closeMobileMenu}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <item.icon className="w-6 h-6 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary text-lg mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-text-tertiary uppercase text-xs font-semibold tracking-wider mb-3">
                FINANCIAL TOOLS
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                Identity verification and connections
              </p>
              <div className="space-y-6">
                {[
                  {
                    href: '/financial-services/identity-kyc',
                    icon: UserCheck,
                    title: 'Identity and KYC',
                    desc: 'Identity verification and compliance',
                  },
                  {
                    href: '/financial-services/financial-connections',
                    icon: Layers,
                    title: 'Financial Connections',
                    desc: 'Connect to bank accounts securely',
                  },
                  {
                    href: '/financial-services/analytics',
                    icon: BarChart3,
                    title: 'Analytics',
                    desc: 'Deep insights into your financial data',
                  },
                  {
                    href: '/financial-services/reporting',
                    icon: FileText,
                    title: 'Reporting',
                    desc: 'Comprehensive financial reporting',
                  },
                  {
                    href: '/financial-services/compliance',
                    icon: Shield,
                    title: 'Compliance',
                    desc: 'Stay compliant with financial regulations',
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block group"
                    onClick={closeMobileMenu}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <item.icon className="w-6 h-6 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary text-lg mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-text-tertiary uppercase text-xs font-semibold tracking-wider mb-3">
                DEVELOPER & ENTERPRISE
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                Tools and resources for developers
              </p>
              <div className="space-y-6">
                {[
                  {
                    href: '/resources-and-documentation',
                    icon: Code,
                    title: 'API Documentation',
                    desc: 'Complete API reference and guides',
                  },
                  {
                    href: '/developer-enterprise/enterprise-infrastructure',
                    icon: Building,
                    title: 'Enterprise Infrastructure',
                    desc: 'Scalable enterprise solutions',
                  },
                  {
                    href: '/developer-enterprise/partners-program',
                    icon: Users,
                    title: 'Partners Program',
                    desc: 'Join our partner ecosystem',
                  },
                  {
                    href: '/developer-enterprise/trust-security',
                    icon: Shield,
                    title: 'Trust and Security',
                    desc: 'Security certifications and compliance',
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block group"
                    onClick={closeMobileMenu}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <item.icon className="w-6 h-6 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary text-lg mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
