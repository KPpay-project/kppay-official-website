import { ROUTES } from '@/config/constants';
import React from 'react';
import { Button, images } from '@/types';
import Image from 'next/image';

const FinancialConnectionsHeroSection = () => {
  return (
    <section className="relative -mt-24 overflow-hidden">
      {/* Background Gradient - covers entire section */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero.gradient}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20 z-[1]"></div>

      {/* Hero Container */}
      <div className="relative z-10">
        {/* Top Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="container-padding px-6 sm:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="hero-heading px-4">Financial Connections</h1>
              <p className="hero-description px-4">
                KP Pay Gateway processes payments across cards, mobile money,
                and bank transfers with intelligent routing and local currency
                support across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="md"
                  href={ROUTES.PAYMENT_INFRA_CONNECT}
                >
                  Start Connecting
                </Button>
                <Button
                  variant="outlined-white"
                  size="md"
                  href={ROUTES.RESOURCES}
                >
                  Integration Guide
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative flex items-center justify-center -mt-32 pb-20">
          <div className="container-padding w-full">
            {/* Stats Container - White Card */}
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-12">
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-4 md:gap-8">
                {/* Stat 1 */}
                <div className="text-center">
                  <div className="hero-heading !text-gray-900 mb-2">200+</div>
                  <div className="text-base text-gray-600 font-medium">
                    Financial Institutions
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="text-center">
                  <div className="hero-heading !text-gray-900 mb-2">50+</div>
                  <div className="text-base text-gray-600 font-medium">
                    Countries
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="text-center">
                  <div className="hero-heading !text-gray-900 mb-2">99.9%</div>
                  <div className="text-base text-gray-600 font-medium">
                    Uptime
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="text-center">
                  <div className="hero-heading !text-gray-900 mb-2">10M+</div>
                  <div className="text-base text-gray-600 font-medium">
                    Connected Accounts
                  </div>
                </div>
              </div>

              {/* Mobile/Tablet Layout */}
              <div className="md:hidden grid grid-cols-2 gap-8">
                {/* Stat 1 */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    200+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Financial Institutions
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Countries
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Uptime
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    10M+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Connected Accounts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialConnectionsHeroSection;
