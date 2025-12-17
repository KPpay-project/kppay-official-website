import React from 'react';
import Image from 'next/image';
import { images } from '@/types';

const PartnersCategoriesSection = () => {
  // Financial Partners - banks and financial institutions
  const financialPartners = [
    { name: 'Banque Atlantique', logo: images.partners.banqueAtlantique },
    { name: 'Ecobank', logo: images.partners.ecobank },
    { name: 'ICIC Bank', logo: images.partners.ICICBank },
    { name: 'Stanbic Bank', logo: images.partners.StanbicBank },
    { name: 'BIIC', logo: images.partners.biic },
    { name: 'CIC', logo: images.partners.cic },
    { name: 'Desjardins', logo: images.partners.desjardins },
    { name: 'Bank of Africa', logo: images.partners.bankOfAfrica },
    { name: 'BSIC', logo: images.partners.bsic },
    { name: 'BNI', logo: images.partners.bni },
  ];

  // Telecom and Technology Partners
  const telecomPartners = [
    { name: 'Vodacom', logo: images.partners.vodacom },
    { name: 'MTN', logo: images.partners.mtn },
    { name: 'Safaricom', logo: images.partners.safaricom },
    { name: 'Flutterwave', logo: images.partners.flutterwave },
    { name: 'Orange', logo: images.partners.orange },
    { name: 'Moov', logo: images.partners.moov },
  ];

  return (
    <section className="relative -mt-20 pb-20">
      <div className="container-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-primary rounded-2xl shadow-lg px-8 sm:px-12 lg:px-16 py-16">
          {/* Financial Partners */}
          <div className="mb-20">
            <h2 className="heading-bebas-light text-4xl md:text-5xl text-text-main-dark text-center mb-12">
              FINANCIAL PARTNERS
            </h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {financialPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 transition-all duration-300 w-28 md:w-32 lg:w-36 group"
                >
                  <div className="relative w-full h-14 md:h-16">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain mix-blend-multiply opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Telecom and Technology Partners */}
          <div className="mb-20">
            <h2 className="heading-bebas-light text-4xl md:text-5xl text-text-main-dark text-center mb-12">
              TELECOM AND TECHNOLOGY PARTNERS
            </h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {telecomPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 transition-all duration-300 w-28 md:w-32 lg:w-36 group"
                >
                  <div className="relative w-full h-14 md:h-16">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain mix-blend-multiply opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div>
            <h2 className="heading-bebas-light text-3xl md:text-4xl text-text-main-dark text-center mb-16">
              JOIN AFRICA&apos;S LARGEST PAYMENT NETWORK
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {/* Stat 1 */}
              <div className="text-center">
                <div className="heading-bebas-light text-4xl md:text-5xl text-text-main-dark mb-3">
                  50+
                </div>
                <p className="text-base text-text-main-dark">
                  Countries Covered
                </p>
              </div>

              {/* Stat 2 */}
              <div className="text-center">
                <div className="heading-bebas-light text-4xl md:text-5xl text-text-main-dark mb-3">
                  200M+
                </div>
                <p className="text-base text-text-main-dark">Connected Users</p>
              </div>

              {/* Stat 3 */}
              <div className="text-center">
                <div className="heading-bebas-light text-4xl md:text-5xl text-text-main-dark mb-3">
                  $100B+
                </div>
                <p className="text-base text-text-main-dark">Annual Volume</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCategoriesSection;
