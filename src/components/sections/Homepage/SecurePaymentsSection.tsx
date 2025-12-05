import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button, images, ROUTES } from '@/types';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start gap-4">
      {/* Icon Container */}
      <div className="shrink-0 w-12 h-12 rounded-xl bg-surface-secondary flex items-center justify-center p-2">
        <div className="relative w-full h-full">
          <Image src={icon} alt={title} fill className="object-contain" />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <h3 className="text-base font-semibold text-text-primary mb-2">
          {title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const SecurePaymentsSection: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      icon: images.features.api,
      title: 'Easy API Integration',
      description:
        "Integrate KPpay's Currency Cloud API with ease, allowing you to leverage powerful tools without the need for extensive capital investment or complex platform development. We've taken care of the regulatory compliance, so you can focus on scaling your business.",
    },
    {
      icon: images.features.currency,
      title: 'Dynamic Currency Exchange',
      description:
        "Offer your customers the flexibility to pay in their home currency, avoiding hidden fees and surprises. With KPpay's Dynamic Currency Conversion, every transaction is clear, transparent, and hassle-free, making global travel and spending easier.",
    },
    {
      icon: images.features.flexible,
      title: 'Flexible Online Payments',
      description:
        "KPpay empowers businesses in retail and hospitality with a versatile payment solution that adapts to their needs. Whether you're a boutique shop or a large hotel chain, KPpay's flexible online payment system helps you grow without limits, offering your customers the convenience they desire.",
    },
    {
      icon: images.features.payment,
      title: 'Unified Payment Platform',
      description:
        "Simplify your payment processes with KPpay's Unified Payment Platform. Whether you're handling in-store transactions, online payments, or subscription services, KPpay integrates everything into one seamless system, reducing complexity and improving efficiency.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-surface-secondary/50">
      {/* Container */}
      <div className="container-padding max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="heading-bebas text-3xl sm:text-4xl lg:text-5xl text-text-main-dark mb-4">
            SECURE & FAST
            <br />
            INTERNATIONAL PAYMENTS
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8">
            Whether you&apos;re using local payment methods or international
            systems like SWIFT, KPpay ensures every transaction is seamless.
            Benefit from automation, transparent fees, precise payment tracking,
            and multiple payout options that put you in control.
          </p>
          <Button variant="primary" size="md" href={ROUTES.PAYMENTS_ONLINE}>
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurePaymentsSection;
