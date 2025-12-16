'use client';
import { ROUTES } from '@/config/constants';

import { useState } from 'react';
import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  Mail,
} from 'lucide-react';
import Image from 'next/image';
import { images } from '@/types';

interface FooterProps {
  variant?: 'light' | 'dark';
}

export default function Footer({ variant = 'dark' }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });

  const isLight = variant === 'light';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: '🎉 Successfully subscribed!',
        });
        setEmail('');
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to subscribe. Please try again.',
        });
      }
    } catch (error) {
      console.error('Newsletter error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      className={`py-12 md:py-16 ${
        isLight ? 'bg-white' : 'bg-brand-secondary'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Left Section - Logo, Newsletter & Social */}
          <div className="lg:col-span-3 text-center lg:text-left">
            {/* Logo */}
            <Link href="/" className="inline-block mb-6">
              <div
                className={`rounded-sm p-4 relative w-[120px] h-[35px] mx-auto lg:mx-0 ${
                  isLight ? 'bg-gray-100' : 'bg-white/60'
                }`}
              >
                <Image
                  src={images.logos.primary}
                  alt="KP Pay Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Newsletter Section */}
            <div className="mb-6">
              <h3
                className={`font-semibold mb-3 ${
                  isLight ? 'text-gray-900' : 'text-white'
                }`}
              >
                Stay Updated
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={`w-full px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 transition-all text-sm ${
                    isLight
                      ? 'bg-gray-100 text-gray-900 placeholder:text-gray-500 focus:ring-blue-500'
                      : 'bg-white text-gray-900 placeholder:text-gray-500 focus:ring-blue-400'
                  }`}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>{isSubmitting ? 'Subscribing...' : 'Subscribe'}</span>
                </button>

                {submitStatus.type && (
                  <div
                    className={`p-2 rounded-lg text-xs ${
                      submitStatus.type === 'success'
                        ? isLight
                          ? 'bg-green-100 text-green-700'
                          : 'bg-green-500/20 text-green-300'
                        : isLight
                        ? 'bg-red-100 text-red-700'
                        : 'bg-red-500/20 text-red-300'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-9 h-9 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="w-9 h-9 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="w-9 h-9 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="https://t.me"
                target="_blank"
                className="w-9 h-9 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Send className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="w-9 h-9 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Right Section - Navigation Columns */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {/* Company Column */}
            <div>
              <h3
                className={`font-semibold mb-4 ${
                  isLight ? 'text-gray-900' : 'text-white'
                }`}
              >
                Company
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href={ROUTES.ABOUT}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.CAREERS}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.BLOG}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Newsroom
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.ENTERPRISE}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.CONTACT}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products Column */}
            <div>
              <h3
                className={`font-semibold mb-4 ${
                  isLight ? 'text-gray-900' : 'text-white'
                }`}
              >
                Products
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href={ROUTES.PAYMENTS_ONLINE}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Global Payments
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.PAYMENT_INFRA_VIRTUAL_CARDS}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Virtual Cards
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.FINANCIAL_CONNECTIONS}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Currency Exchange
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.PAYMENT_INFRA_CONNECT}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Business Payment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Developers Column */}
            <div>
              <h3
                className={`font-semibold mb-4 ${
                  isLight ? 'text-gray-900' : 'text-white'
                }`}
              >
                Developers
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href={ROUTES.RESOURCES}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    API Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.RESOURCES}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    SDKs & Libraries
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.RESOURCES}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Webhooks
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.RESOURCES}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Developer Community
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources & Support Column */}
            <div>
              <h3
                className={`font-semibold mb-4 ${
                  isLight ? 'text-gray-900' : 'text-white'
                }`}
              >
                Resources & Support
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href={ROUTES.FAQS}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.BLOG}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.RESOURCES}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.RESOURCES}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.CONTACT}
                    className={`transition-colors text-sm ${
                      isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8">
          {/* Legal Links - Horizontal with borders */}
          <div
            className={`border-t border-b py-6 ${
              isLight ? 'border-gray-200' : 'border-white/20'
            }`}
          >
            <div
              className={`flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-sm ${
                isLight ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              <Link
                href={ROUTES.LEGAL_TERMS}
                className={`transition-colors ${
                  isLight ? 'hover:text-gray-900' : 'hover:text-white'
                }`}
              >
                Terms and Condition
              </Link>
              <span className={isLight ? 'text-gray-400' : 'text-white/40'}>
                |
              </span>
              <Link
                href={ROUTES.LEGAL_PRIVACY}
                className={`transition-colors ${
                  isLight ? 'hover:text-gray-900' : 'hover:text-white'
                }`}
              >
                Privacy Policy
              </Link>
              <span className={isLight ? 'text-gray-400' : 'text-white/40'}>
                |
              </span>
              <Link
                href={ROUTES.LEGAL_COOKIE_POLICY}
                className={`transition-colors ${
                  isLight ? 'hover:text-gray-900' : 'hover:text-white'
                }`}
              >
                Cookie Policy
              </Link>
              <span className={isLight ? 'text-gray-400' : 'text-white/40'}>
                |
              </span>
              <Link
                href={ROUTES.LEGAL_INTELLECTUAL_PROPERTY}
                className={`transition-colors ${
                  isLight ? 'hover:text-gray-900' : 'hover:text-white'
                }`}
              >
                Intellectual Property Policy
              </Link>
              <span className={isLight ? 'text-gray-400' : 'text-white/40'}>
                |
              </span>
              <Link
                href={ROUTES.LEGAL_AML}
                className={`transition-colors ${
                  isLight ? 'hover:text-gray-900' : 'hover:text-white'
                }`}
              >
                Anti-Money Laundry Policy
              </Link>
              <span className={isLight ? 'text-gray-400' : 'text-white/40'}>
                |
              </span>
              <Link
                href={ROUTES.LEGAL_ANTI_CORRUPTION}
                className={`transition-colors ${
                  isLight ? 'hover:text-gray-900' : 'hover:text-white'
                }`}
              >
                Anti-Corruption Policy
              </Link>
              <span className={isLight ? 'text-gray-400' : 'text-white/40'}>
                |
              </span>
              <Link
                href={ROUTES.LEGAL_GIFT_POLICY}
                className={`transition-colors ${
                  isLight ? 'hover:text-gray-900' : 'hover:text-white'
                }`}
              >
                Gift Policy
              </Link>
            </div>
          </div>

          {/* Copyright & Last Updated - Outside border */}
          <div
            className={`flex flex-col sm:flex-row justify-between items-center gap-4 text-sm pt-6 ${
              isLight ? 'text-gray-600' : 'text-white/70'
            }`}
          >
            <p>© {currentYear} KP Pay. All rights reserved.</p>
            <p>Last updated: {currentDate}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
