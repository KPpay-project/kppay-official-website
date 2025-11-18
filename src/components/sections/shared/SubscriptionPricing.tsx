import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/types';

export default function SubscriptionPricing() {
  const features = [
    'All billing features included',
    'Unlimited subscription plans',
    'Customer portal included',
    'Advanced analytics dashboard',
  ];

  return (
    <div className="min-h-screen bg-surface-secondary flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Heading */}
        <div>
          <h1 className="heading-bebas-light text-5xl md:text-6xl mb-4 leading-tight">
            SIMPLE SUBSCRIPTION PRICING
          </h1>
          <p className="text-base text-text-secondary">
            One transparent rate for all subscription transactions
          </p>
        </div>

        {/* Right Side - Pricing Card */}
        <div className="bg-surface-primary rounded-xl p-8 shadow-sm">
          {/* Rate */}
          <div className="mb-6">
            <div className="text-5xl font-bold text-text-primary mb-1">
              2.9%
            </div>
            <div className="text-brand-primary font-semibold text-sm mb-1">
              + 30¢ per transaction
            </div>
            <div className="text-text-secondary text-sm">
              No setup fees or monthly charges
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <Check
                    className="w-4 h-4 text-brand-primary"
                    strokeWidth={2.5}
                  />
                </div>
                <span className="text-text-secondary text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button variant="primary" size="md" fullWidth>
            Get started for free
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
