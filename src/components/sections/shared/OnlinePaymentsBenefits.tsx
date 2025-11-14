import React from 'react';
import Image from 'next/image';
import ReusableCTA from './ReusableCTA';
import { images } from '@/types';

const OnlinePaymentsBenefits = () => {
  const features = [
    {
      icon: images.onlinePaymentsIcons.instant,
      title: 'Instant Settlement',
      description:
        'Get paid instantly with real-time settlement to your account',
    },
    {
      icon: images.onlinePaymentsIcons.enterprise,
      title: 'Enterprise Security',
      description: 'PCI DSS level 1 compliance and advanced fraud protection',
    },
    {
      icon: images.onlinePaymentsIcons.global,
      title: 'Global Reach',
      description: 'Accept payments from customers worldwide in 150+ countries',
    },
  ];

  return (
    <section className="w-full bg-gray/900">
      {/* Why Choose Section */}
      <div className="py-12 md:py-16 lg:py-20">
        <div className="container-padding max-w-7xl mx-auto">
          {/* Section Header */}
          <h2 className="heading-bebas-light text-3xl md:text-4xl lg:text-5xl text-center mb-10 md:mb-12 lg:mb-16">
            Why Choose KP Pay Online Payments
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {features.map((feature, index) => {
              return (
                <div key={index} className="flex items-start text-left gap-2">
                  {/* Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-text-primary mb-2 md:mb-3">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-text-secondary max-w-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="pb-12 md:pb-16 lg:pb-20">
        <div className="container-padding max-w-7xl mx-auto">
          <ReusableCTA
            heading="Ready to start accepting payment?"
            description="Join thousands of businessess processing payment with KPapy. Get started in minutes."
            buttons={[
              {
                text: 'Start Integration Now',
                href: '/integration',
                variant: 'outlined-white',
                size: 'md',
                showArrow: true,
                className: 'bg-white text-brand-primary hover:bg-white/90',
              },
              {
                text: 'Contact Sales',
                href: '/sales',
                variant: 'outlined-white',
                size: 'md',
                showArrow: true,
              },
            ]}
            headingColor="text-text-inverse-primary"
            backgroundColor="bg-brand-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default OnlinePaymentsBenefits;
