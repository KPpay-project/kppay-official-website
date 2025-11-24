import React from 'react';
import { Button } from '@/types'; // Your Button import
import { ArrowRight } from 'lucide-react';

interface ButtonConfig {
  text: string;
  href: string;
  variant?:
    | 'primary'
    | 'outlined'
    | 'outlined-white'
    | 'ghost'
    | 'secondary'
    | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showArrow?: boolean;
  target?: '_blank' | '_self';
}

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

interface ReusableCTAProps {
  heading: string;
  description: string;
  benefits?: Benefit[];
  buttons: ButtonConfig[];
  headingColor?: string;
  backgroundColor?: string;
}

const ReusableCTA: React.FC<ReusableCTAProps> = ({
  heading,
  description,
  benefits = [],
  buttons = [],
  headingColor = 'text-text-main-white',
  backgroundColor = 'bg-brand-primary',
}) => {
  return (
    <section className="w-full py-4 md:py-6">
      <div className="max-w-7xl mx-auto">
        <div
          className={`${backgroundColor} py-8 md:py-12 px-6 md:px-8 lg:px-10 rounded-md`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
            {/* Left Content */}
            <div className="flex-1 min-w-0">
              <h2
                className={`heading-bebas-light text-3xl md:text-4xl ${headingColor} mb-3`}
              >
                {heading}
              </h2>
              <p className="text-text-main-white/90 text-sm md:text-base mb-5">
                {description}
              </p>

              {/* Benefits List - Single line on desktop */}
              {benefits.length > 0 && (
                <div className="flex flex-col lg:flex-row lg:flex-wrap gap-y-2 lg:gap-x-5 text-xs md:text-sm">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-text-main-white"
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        <span className="whitespace-nowrap">
                          {benefit.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full lg:w-auto">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  href={button.href}
                  variant={button.variant}
                  size={button.size}
                  className={button.className}
                  target={button.target}
                >
                  {button.text}
                  {button.showArrow && <ArrowRight className="w-4 h-4" />}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReusableCTA;
