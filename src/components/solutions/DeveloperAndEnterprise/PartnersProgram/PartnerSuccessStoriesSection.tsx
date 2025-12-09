import React from 'react';
import { Quote } from 'lucide-react';

const PartnerSuccessStoriesSection = () => {
  const testimonials = [
    {
      partnerName: 'TechFlow Solutions',
      partnerType: 'Technology Partner',
      partnerCategory: 'E-commerce Platform',
      logoInitials: 'TF',
      logoColor: 'bg-blue-600',
      badge: 'VERIFIED PARTNER',
      metrics: [
        { label: 'revenue increase', value: '300%' },
        { label: 'merchants onboarded', value: '5,000+' },
        { label: 'countries expanded', value: '15' },
      ],
      quote:
        'Partnering with KP Pay transformed our platform and opened doors to African markets we never thought possible.',
      author: 'Sarah Johnson',
      position: 'CEO, TechFlow Solutions',
    },
    {
      partnerName: 'PaymentPro Consulting',
      partnerType: 'Referral Partner',
      partnerCategory: 'Business Consulting',
      logoInitials: 'PP',
      logoColor: 'bg-blue-700',
      badge: 'VERIFIED PARTNER',
      metrics: [
        { label: 'monthly commissions', value: '$50K' },
        { label: 'successful referrals', value: '100+' },
        { label: 'client satisfaction', value: '98%' },
      ],
      quote:
        'KP Pay\'s partner program is the most lucrative and supportive program we\'ve ever joined.',
      author: 'Michael Chen',
      position: 'Managing Partner',
    },
    {
      partnerName: 'FinanceFirst Bank',
      partnerType: 'Channel Partner',
      partnerCategory: 'White-label Solution',
      logoInitials: 'FI',
      logoColor: 'bg-blue-800',
      badge: 'VERIFIED PARTNER',
      metrics: [
        { label: 'new customers', value: '10,000+' },
        { label: 'cost reduction', value: '40%' },
        { label: 'revenue streams', value: 'New' },
      ],
      quote:
        'The white-label solution allowed us to offer modern payment services without the development overhead.',
      author: 'David Okonkwo',
      position: 'Head of Digital Banking',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-bebas-light text-3xl md:text-4xl text-[#1a1a2e] mb-4">
            Partner Success Stories
          </h2>
        </div>

        {/* Testimonials - Vertical Stack */}
        <div className="space-y-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              {/* Card Layout */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left Side: Logo, Name, Category, Metrics */}
                  <div className="lg:w-5/12 flex flex-col gap-4">
                    {/* Logo, Name and Badge Row */}
                    <div className="flex items-start gap-3">
                      <div
                        className={`${testimonial.logoColor} w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-white font-bold text-base">
                          {testimonial.logoInitials}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="heading-bebas-light text-xl text-[#1a1a2e] mb-0.5 uppercase">
                          {testimonial.partnerName}
                        </h3>
                        <p className="text-sm text-brand-primary font-medium">
                          {testimonial.partnerType}
                        </p>
                      </div>
                      <span className="text-[10px] font-semibold text-brand-primary bg-blue-50 px-2.5 py-1 rounded-full whitespace-nowrap">
                        {testimonial.badge}
                      </span>
                    </div>

                    {/* Category */}
                    <p className="text-sm text-brand-primary font-medium -mt-2">
                      {testimonial.partnerCategory}
                    </p>

                    {/* Metrics - Horizontal on large screens */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-2.5 mt-2">
                      {testimonial.metrics.map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className="bg-green-50 rounded-md p-3 flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center gap-2"
                        >
                          <div className="heading-bebas-light text-xl md:text-2xl text-green-700 md:min-w-[70px] lg:min-w-[80px]">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-600 leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Quote */}
                  <div className="lg:w-7/12 flex flex-col justify-center">
                    <div className="relative">
                      <Quote className="absolute -top-1 left-0 w-7 h-7 text-brand-primary/20" />
                      <p className="text-[15px] md:text-base text-[#1a1a2e]/90 leading-relaxed pl-9">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSuccessStoriesSection;
