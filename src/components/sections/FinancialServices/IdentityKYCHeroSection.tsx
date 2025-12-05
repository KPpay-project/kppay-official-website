import { ROUTES } from '@/config/constants';
import React from 'react';
import { Button, images } from '@/types';
import Image from 'next/image';

const IdentityKYCHeroSection = () => {
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
              <h1 className="hero-heading px-4">
                Identity and KYC Verification
              </h1>
              <p className="hero-description px-4">
                KP Pay Gateway processes payments across cards, mobile money,
                and bank transfers with intelligent routing and local currency
                support across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="md"
                  href="#start-verification"
                >
                  Start Verification
                </Button>
                <Button
                  variant="outlined-white"
                  size="md"
                  href={ROUTES.RESOURCES}
                >
                  API Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* How Verification Works Section */}
        <div className="relative min-h-screen flex items-center justify-center py-10">
          <div className="container-padding w-full">
            <h2 className="hero-heading text-center mb-16">
              How Verification Works
            </h2>

            {/* Steps Container - Responsive */}
            <div className="max-w-5xl mx-auto">
              {/* Desktop Layout */}
              <div className="hidden md:flex md:flex-col">
                {/* Numbers Row with Lines */}
                <div className="flex items-center justify-center mb-8">
                  <span className="hero-heading">1</span>
                  <div className="w-32 lg:w-40 h-0.5 bg-white/30 mx-4"></div>
                  <span className="hero-heading">2</span>
                  <div className="w-32 lg:w-40 h-0.5 bg-white/30 mx-4"></div>
                  <span className="hero-heading">3</span>
                  <div className="w-32 lg:w-40 h-0.5 bg-white/30 mx-4"></div>
                  <span className="hero-heading">4</span>
                </div>

                {/* Content Row - Aligned under numbers */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center px-2">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Document Collection
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Add KP Pay SDK to your iOS or Android project using
                      package managers
                    </p>
                  </div>

                  <div className="text-center px-2">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      AI Verification
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Configure the SDK with your API keys and payment
                      preferences
                    </p>
                  </div>

                  <div className="text-center px-2">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Biometric Check
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Create payment sessions and handle successful transactions
                    </p>
                  </div>

                  <div className="text-center px-2">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Risk Assessment
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Receive payment confirmations and update your app&apos;s
                      state
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile/Tablet Layout - Centered */}
              <div className="md:hidden space-y-12 px-6">
                {/* Step 1 */}
                <div className="text-center border-l-2 border-white/30 pl-8 pr-4 py-4">
                  <span className="hero-heading block mb-4">1</span>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Document Collection
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
                    Add KP Pay SDK to your iOS or Android project using package
                    managers
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center border-r-2 border-white/30 pr-8 pl-4 py-4">
                  <span className="hero-heading block mb-4">2</span>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    AI Verification
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
                    Configure the SDK with your API keys and payment preferences
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center border-l-2 border-white/30 pl-8 pr-4 py-4">
                  <span className="hero-heading block mb-4">3</span>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Biometric Check
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
                    Create payment sessions and handle successful transactions
                  </p>
                </div>

                {/* Step 4 */}
                <div className="text-center border-r-2 border-white/30 pr-8 pl-4 py-4">
                  <span className="hero-heading block mb-4">4</span>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Risk Assessment
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
                    Receive payment confirmations and update your app&apos;s
                    state
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentityKYCHeroSection;
