import React from 'react';
import Image from 'next/image';
import { images } from '@/types';

const PartnersSection: React.FC = () => {
  const partners = [
    { name: 'Ecobank', logo: images.partners.ecobank },
    { name: 'Desjardins', logo: images.partners.desjardins },
    { name: 'Airtel', logo: images.partners.airtel },
    { name: 'Safaricom', logo: images.partners.safaricom },
    { name: 'NSIA', logo: images.partners.nsia },
    { name: 'BSIC', logo: images.partners.bsic },
    { name: 'MTN', logo: images.partners.mtn },
    { name: 'Vodacom', logo: images.partners.vodacom },
    { name: 'CIC', logo: images.partners.cic },
    { name: 'Bank of Africa', logo: images.partners.bankOfAfrica },
    { name: 'Orange', logo: images.partners.orange },
    { name: 'BIIC', logo: images.partners.biic },
    { name: 'Société Générale', logo: images.partners.societeGenerale },
    { name: 'Flutterwave', logo: images.partners.flutterwave },
    { name: 'Banque Atlantique', logo: images.partners.banqueAtlantique },
    { name: 'FBN Bank', logo: images.partners.FBNBank },
    { name: 'ICIC Bank', logo: images.partners.ICICBank },
    { name: 'Standbic Bank', logo: images.partners.StanbicBank },
    { name: 'UBA Bank', logo: images.partners.UBABank },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-surface-primary">
      {/* Container */}
      <div className="container-padding max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="heading-bebas-light text-2xl sm:text-3xl lg:text-4xl text-text-main-dark">
            OUR AMAZING PARTNERS
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 rounded-lg transition-all duration-300 w-24 sm:w-28 lg:w-32 group"
            >
              <div className="relative w-full h-12 sm:h-14 lg:h-16">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain mix-blend-multiply opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
