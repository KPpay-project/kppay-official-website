import {
  FeatureShowcaseSection,
  GlobalReachSection,
  HeroSection,
  images,
  PartnersSection,
  PaymentScrollSection,
  SecurePaymentsSection,
  ServicesSection,
  SolutionsSection,
  TestimonialsSection,
  WhyChooseKPpay,
} from '@/types';

export const metadata = {
  title: 'Kppay - The Safest and Most Reliable Money Transaction Platform',
  description:
    'Send money globally, receive payments, deposit and request funds, invest and exchange across multiple currencies with low fees, speed and safety.',
};

export default function HomePage() {
  return (
    <main className="page-transition">
      <HeroSection />
      <GlobalReachSection />

      {/* Instant Setup - Light theme, Image Left */}
      {/* <FeatureShowcaseSection
        title="INSTANT SETUP"
        description="Merchants start receiving payment quickly without operational disruption for fast time to value"
        ctaText="Get started for free"
        ctaHref="#"
        imageSrc={images.homepage.setup1}
        imageAlt="Account setup interface"
        layout="image-right"
        theme="light"
      /> */}

      {/* Send Money - Blue theme, Image Right */}
      {/* <FeatureShowcaseSection
        title="SEND AND RECEIVE MONEY FROM ACROSS THE WORLD"
        description="We share common trends and strategies for improving your rental income and making sure you stay in high demand."
        ctaText="Start a free trial"
        ctaHref="#"
        imageSrc={images.homepage.setup2}
        imageAlt="International money transfer interface"
        layout="image-left"
        theme="blue"
      /> */}

      {/* Multiple Accounts - Light theme, Image Left */}
      {/* <FeatureShowcaseSection
        title="CREATE MULTIPLE ACCOUNTS IN DIFFERENT CURRENCIES"
        description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino."
        ctaText="Get started for free"
        ctaHref="#"
        imageSrc={images.homepage.setup1}
        imageAlt="Multi-currency accounts"
        layout="image-right"
        theme="light"
      /> */}

      {/* API Integration - Blue theme, Image Right */}
      {/* <FeatureShowcaseSection
        title="EASY API INTEGRATION"
        description="We share common trends and strategies for improving your rental income and making sure you stay in high demand."
        ctaText="Start a free trial"
        ctaHref="#"
        imageSrc={images.homepage.setup2}
        imageAlt="API integration interface"
        layout="image-left"
        theme="blue"
      /> */}

      {/* Multiple Accounts - Light theme, Image Left */}
      {/* <FeatureShowcaseSection
        title="CREATE MULTIPLE ACCOUNTS IN DIFFERENT CURRENCIES"
        description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino."
        ctaText="Get started for free"
        ctaHref="#"
        imageSrc={images.homepage.setup1}
        imageAlt="Multi-currency accounts"
        layout="image-right"
        theme="light"
      /> */}

      {/* Bills Payment - Blue theme, Image Right */}
      {/* <FeatureShowcaseSection
        title="RECHARGE & PAY BILLS FROM ANY COUNTRY"
        description="We share common trends and strategies for improving your rental income and making sure you stay in high demand."
        ctaText="Start a free trial"
        ctaHref="#"
        imageSrc={images.homepage.setup3}
        imageAlt="Bills payment interface"
        layout="image-right"
        theme="blue"
      /> */}

      {/* Our Services section */}
      {/* <ServicesSection /> */}

      {/* Solutions Section */}
      <SolutionsSection />

      {/* Why Choose Us */}
      <WhyChooseKPpay />

      {/* Secure Payment Section */}
      <SecurePaymentsSection />

      {/* Partners section */}
      <PartnersSection />

      {/* Payment Scroll Section */}
      {/* <PaymentScrollSection /> */}

      {/* Testimonials Section */}
      <TestimonialsSection />
    </main>
  );
}
