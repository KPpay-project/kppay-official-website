/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/types';

const CareersHero = () => {
  return (
    <section className="relative -mt-24 bg-gradient-to-br from-[#4a7dde] via-[#3d5ba8] to-[#8b3540] py-32 md:py-40 lg:py-48 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Floating tech elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="container-padding max-w-7xl mx-auto relative z-10 px-8 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="hero-heading mb-6 px-6 sm:px-8 md:px-0">
            Build The Future <br className="md:hidden" />
            Of Payments With Us
          </h1>

          {/* Description */}
          <p className="hero-description max-w-3xl mx-auto mb-10 px-6 sm:px-8 md:px-0">
            Join our team of innovators and builders who are transforming the
            financial landscape. At KPPAY, you'll work on cutting-edge
            technology that empowers millions of businesses and individuals.
          </p>

          {/* CTA Button */}
          <Button
            variant="primary"
            size="lg"
            href="#open-positions"
            className="bg-white text-brand-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all font-bold"
          >
            View Open Positions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
