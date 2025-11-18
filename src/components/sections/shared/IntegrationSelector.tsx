// src/components/sections/shared/IntegrationSelector.tsx
import * as React from 'react';
import { cn, IntegrationCard, type IntegrationSelectorProps } from '@/types';

export const IntegrationSelector: React.FC<IntegrationSelectorProps> = ({
  heading,
  options = [],
  className,
}) => {
  // Don't render anything if no options are provided
  if (!options || options.length === 0) {
    return null;
  }

  // Determine grid columns based on number of options
  const getGridColumns = () => {
    const count = options.length;
    if (count === 3) return 'lg:grid-cols-3';
    if (count === 4) return 'lg:grid-cols-4';
    return 'lg:grid-cols-3'; // 5+ items or default
  };

  return (
    <section
      className={cn('py-12 md:py-16 lg:py-20 bg-surface-primary', className)}
    >
      <div className="container-padding max-w-7xl mx-auto">
        {/* Only render heading if it exists and is not empty */}
        {heading && heading.trim() !== '' && (
          <h2 className="heading-bebas text-4xl md:text-5xl text-center text-text-primary mb-10 md:mb-12">
            {heading}
          </h2>
        )}

        {/* Integration Cards Grid */}
        <div
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 gap-6',
            getGridColumns()
          )}
        >
          {options.map((option) => (
            <IntegrationCard key={option.id} option={option} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSelector;
