import React from 'react';
import { Button, ROUTES } from '@/types';

const TrustSecurityHeroSection = () => {
  return (
    <section className="relative -mt-24 overflow-hidden">
      {/* Background Gradient - CSS gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-green"></div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20 z-[1]"></div>

      {/* Hero Container */}
      <div className="relative z-10">
        {/* Top Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="container-padding px-6 sm:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="hero-heading px-4">Trust and Security Centre</h1>
              <p className="hero-description px-4">
                KP Pay Gateway processes payments across cards, mobile money,
                and bank transfers with intelligent routing and local currency
                support across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="md" href={ROUTES.DEV_TRUST_SECURITY}>
                  Security Overview
                </Button>
                <Button
                  variant="outlined-white"
                  size="md"
                  href={ROUTES.RESOURCES}
                >
                  Compliance Reports
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative flex items-center justify-center -mt-32 pb-20">
          <div className="container-padding w-full">
            {/* Stats Container - White Card */}
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-12">
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-4 md:gap-8">
                {/* Stat 1 */}
                <div className="text-center">
                  <div className="hero-heading !text-gray-900 mb-2">99.99%</div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Uptime SLA
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Processing $2B+ annually for 500+ enterprise clients
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="text-center">
                  <div className="hero-heading !text-gray-900 mb-2">
                    256-BIT
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Encryption
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Operations across 50+ countries with local compliance
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="text-center">
                  <div className="hero-heading !text-gray-900 mb-2">
                    &lt;60S
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Incident Response
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Dedicated support team with 99.9% uptime guarantee
                  </p>
                </div>

                {/* Stat 4 */}
                <div className="text-center">
                  <div className="hero-heading !text-gray-900 mb-2">100%</div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Compliance
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Dedicated support team with 99.9% uptime guarantee
                  </p>
                </div>
              </div>

              {/* Mobile/Tablet Layout */}
              <div className="md:hidden grid grid-cols-2 gap-8">
                {/* Stat 1 */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    99.99%
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Uptime SLA
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Processing $2B+ annually for 500+ enterprise clients
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    256-BIT
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Encryption
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Operations across 50+ countries with local compliance
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    &lt;60S
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Incident Response
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Dedicated support team with 99.9% uptime guarantee
                  </p>
                </div>

                {/* Stat 4 */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    100%
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Compliance
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Dedicated support team with 99.9% uptime guarantee
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

export default TrustSecurityHeroSection;
