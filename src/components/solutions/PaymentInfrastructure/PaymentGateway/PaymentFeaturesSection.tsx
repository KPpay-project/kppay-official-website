import React from 'react';
import { ShoppingCart } from 'lucide-react';

const PaymentFeaturesSection = () => {
  return (
    <section className="bg-surface-primary py-20">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Accept Payments Section */}
        <div className="text-center mb-16">
          <h2 className="hero-heading-dark mb-4">
            Accept Payments How Your
            <br />
            Customers Want to Pay
          </h2>
          <p className="text-text-secondary text-sm max-w-2xl mx-auto">
            Support all major payment methods with optimized conversion rates
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Cards */}
          <div className="bg-surface-secondary rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-4">
              <ShoppingCart className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Cards
            </h3>
            <p className="text-sm text-text-secondary">
              Visa Card, Mastercard, Amex
            </p>
          </div>

          {/* Mobile Money */}
          <div className="bg-surface-secondary rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-4">
              <ShoppingCart className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Mobile Money
            </h3>
            <p className="text-sm text-text-secondary">MTN, Orange, Moov</p>
          </div>

          {/* Bank Transfer */}
          <div className="bg-surface-secondary rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-4">
              <ShoppingCart className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Bank Transfer
            </h3>
            <p className="text-sm text-text-secondary">MTN, Orange, Moov</p>
          </div>

          {/* Mobile Money */}
          <div className="bg-surface-secondary rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-4">
              <ShoppingCart className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Mobile Money
            </h3>
            <p className="text-sm text-text-secondary">MTN, Orange, Moov</p>
          </div>
        </div>

        {/* Built for African Markets Section */}
        <div className="text-center mb-16">
          <h2 className="hero-heading-dark mb-4">Built for African Markets</h2>
          <div className="space-y-2 text-sm text-text-secondary max-w-2xl mx-auto">
            <p>
              High authorization rates with smart routing Multi-currency support
              (USD, XOF, NGN)
            </p>
            <p>
              Real-time fraud protection Instant settlement to local accounts
            </p>
            <p>
              Mobile-first checkout experience Comprehensive reporting and
              analytics
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="hero-heading-dark mb-2">15+</div>
            <p className="text-sm text-text-secondary">Countries</p>
          </div>
          <div className="text-center">
            <div className="hero-heading-dark mb-2">99.9%</div>
            <p className="text-sm text-text-secondary">Uptime</p>
          </div>
          <div className="text-center">
            <div className="hero-heading-dark mb-2">95%</div>
            <p className="text-sm text-text-secondary">Auto Rate</p>
          </div>
          <div className="text-center">
            <div className="hero-heading-dark mb-2">50+</div>
            <p className="text-sm text-text-secondary">Currencies</p>
          </div>
        </div>

        {/* Integration Options Section */}
        <div className="text-center mb-12">
          <h2 className="hero-heading-dark mb-4">
            Integration Options for
            <br />
            Every Business
          </h2>
          <p className="text-text-secondary text-sm max-w-2xl mx-auto">
            Choose the integration that fits your timeline and technical needs
          </p>
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Setup */}
          <div className="border-2 border-border-secondary rounded-2xl p-8">
            <div className="inline-block px-3 py-1 bg-surface-secondary rounded-md text-xs font-semibold text-text-secondary mb-3">
              5 min
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Quick Setup
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Get started in minutes with our simple API
            </p>
            <button className="w-full py-3 px-6 rounded-full border-2 border-text-primary text-text-primary font-semibold hover:bg-text-primary hover:text-white transition-colors">
              Get Started
            </button>
          </div>

          {/* Drop-in UI */}
          <div className="border-2 border-border-secondary rounded-2xl p-8">
            <div className="inline-block px-3 py-1 bg-surface-secondary rounded-md text-xs font-semibold text-text-secondary mb-3">
              10 min
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Drop-in UI
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Pre-built checkout components
            </p>
            <button className="w-full py-3 px-6 rounded-full border-2 border-text-primary text-text-primary font-semibold hover:bg-text-primary hover:text-white transition-colors">
              Get Started
            </button>
          </div>

          {/* Full Custom */}
          <div className="border-2 border-border-secondary rounded-2xl p-8">
            <div className="inline-block px-3 py-1 bg-surface-secondary rounded-md text-xs font-semibold text-text-secondary mb-3">
              1 Day
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Full Custom
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Complete API integration
            </p>
            <button className="w-full py-3 px-6 rounded-full border-2 border-text-primary text-text-primary font-semibold hover:bg-text-primary hover:text-white transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentFeaturesSection;
