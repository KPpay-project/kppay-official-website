import React from 'react';
import Image from 'next/image';
import { images } from '@/types';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Secure Payment Gateway',
      description:
        "Our comprehensive services cater to businesses of all sizes, whether online or in-store. We offer a secure payment gateway, digital wallet, bill payment solutions, and mobile recharge options, empowering businesses to operate smoothly and efficiently in today's fast-paced digital environment.",
      icon: images.services.secure,
    },
    {
      title: 'Digital Wallet',
      description:
        "KPpay's digital wallet offers a secure and convenient way to manage your finances. Store payment information, make purchases, and transfer funds with ease, all from your mobile device. Enjoy the flexibility of a cashless lifestyle, while keeping your transactions secure.",
      icon: images.services.wallet,
    },
    {
      title: 'Online Bill Payments',
      description:
        "KPpay's online bill payment service simplifies the payment process for your customers. Businesses can easily integrate this service, allowing customers to pay bills directly from their bank accounts, credit cards, or other payment methods, ensuring timely and secure transactions.",
      icon: images.services.bill,
    },
    {
      title: 'E-Commerce Solutions',
      description:
        "KPpay's e-commerce solutions empower businesses to effortlessly trade goods and services online. With our platform, businesses can expand their reach, offering customers a seamless shopping experience with secure and efficient transaction processing.",
      icon: images.services.ecommerce,
    },
    {
      title: 'Mobile Wallet & Recharge',
      description:
        "KPpay's mobile wallet offers more than just payments. Users can send and receive money, pay bills, shop online or at stores, and even access instant digital loans. Enjoy complete financial management, all in one app.",
      icon: images.services.wallet,
    },
    {
      title: 'Instant Setup',
      description:
        'KPpay offers a hassle-free instant setup, allowing merchants to start accepting payments immediately. Expand your business with ease and flexibility, as our platform adapts to your needs without disrupting your operations.',
      icon: images.services.secure,
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-surface-primary">
      <div className="container-padding max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-bebas-light text-3xl sm:text-4xl text-text-main-dark">
            OUR SERVICES
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex gap-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-surface-inverse-dark-bg rounded-lg flex items-center justify-center p-2.5">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
