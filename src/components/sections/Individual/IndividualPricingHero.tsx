import { images } from '@/types';
import Image from 'next/image';
import {
  Users,
  Star,
  Heart,
  Shield,
  TrendingUp,
  BarChart3,
} from 'lucide-react';

const IndividualPricingHero = () => {
  return (
    <section className="relative -mt-24 overflow-hidden">
      {/* Hero Container */}
      <div className="relative h-[650px] sm:h-[550px] md:h-[600px]">
        {/* Background Gradient */}
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

        {/* Content Layer */}
        <div className="relative z-10 container-padding pt-32 sm:pt-0 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <h1 className="hero-heading">
              Payment Made Simple
              <br />
              For Individuals
            </h1>
            <p className="hero-description">
              Experience modern payment designed for your personal financial
              needs. From instant payments to smart savings, we have got you
              covered.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-text-main-white px-4 mb-8 md:mb-0">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">User rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">
                  Over 2M+ satisfied customers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">
                  Available in 50 countries
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="relative -mt-20 z-20 container-padding max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Enterprise Infrastructure */}
          <div className="bg-surface-primary rounded-2xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Enterprise Infrastructure
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Scalable, secure, and reliable platform built for enterprise
              demands
            </p>
          </div>

          {/* Advanced Security */}
          <div className="bg-surface-primary rounded-2xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Advanced Security
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Scalable, secure, and reliable platform built for enterprise
              demands
            </p>
          </div>

          {/* Analytics and Reporting */}
          <div className="bg-surface-primary rounded-2xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Analytics and Reporting
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Scalable, secure, and reliable platform built for enterprise
              demands
            </p>
          </div>

          {/* Global Operations */}
          <div className="bg-surface-primary rounded-2xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Global Operations
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Scalable, secure, and reliable platform built for enterprise
              demands
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualPricingHero;
