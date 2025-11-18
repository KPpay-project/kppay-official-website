// src/components/sections/shared/QuickIntegrationSteps.tsx
'use client';
import * as React from 'react';
import { cn } from '@/types';
import { Copy, Check } from 'lucide-react';

interface IntegrationStep {
  number: string;
  title: string;
  description: string;
  code?: string;
}

interface QuickIntegrationStepsProps {
  heading?: string;
  steps?: IntegrationStep[];
  className?: string;
}

export const QuickIntegrationSteps: React.FC<QuickIntegrationStepsProps> = ({
  heading = 'Quick Integration',
  steps = [],
  className,
}) => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  // Don't render if no steps
  if (!steps || steps.length === 0) {
    return null;
  }

  const handleCopy = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section
      className={cn('py-12 md:py-16 lg:py-20 bg-brand-primary', className)}
    >
      <div className="container-padding max-w-7xl mx-auto">
        {/* Heading */}
        {heading && heading.trim() !== '' && (
          <h2 className="heading-bebas text-4xl md:text-5xl lg:text-6xl text-center text-text-inverse-primary mb-12 md:mb-16 lg:mb-20">
            {heading}
          </h2>
        )}

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              {/* Step Number with Connecting Line */}
              <div className="flex items-center mb-6">
                {/* Number */}
                <div className="text-text-inverse-primary heading-bebas text-6xl md:text-7xl leading-none">
                  {step.number}
                </div>

                {/* Connecting Line - Hidden on last item on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-[2px] bg-text-inverse-primary/30 mx-4" />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-text-main-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-text-main-white/80 mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Code Block */}
                {step.code && (
                  <div className="mt-auto relative group">
                    <code className="block bg-brand-secondary/50 text-text-inverse-secondary text-xs md:text-sm px-2 py-3 pr-12 rounded font-mono whitespace-pre-wrap break-all">
                      {step.code}
                    </code>

                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopy(step.code!, index)}
                      className="absolute top-2 right-2 p-2 rounded bg-brand-secondary/80 hover:bg-brand-secondary transition-colors duration-200"
                      aria-label="Copy code"
                    >
                      {copiedIndex === index ? (
                        <Check className="w-4 h-4 text-text-inverse-secondary" />
                      ) : (
                        <Copy className="w-4 h-4 text-text-main-white/60 group-hover:text-text-main-white transition-colors" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickIntegrationSteps;
