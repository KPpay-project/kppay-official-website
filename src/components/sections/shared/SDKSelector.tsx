// src/components/sections/shared/SDKSelector.tsx
import { cn, SDKCard, SDKOption } from '@/types';

interface SDKSelectorProps {
  heading?: string;
  options?: SDKOption[];
  className?: string;
}

export const SDKSelector: React.FC<SDKSelectorProps> = ({
  heading,
  options = [],
  className,
}) => {
  // Don't render if no options
  if (!options || options.length === 0) {
    return null;
  }

  return (
    <section
      className={cn('py-12 md:py-16 lg:py-20 bg-surface-primary', className)}
    >
      <div className="container-padding max-w-7xl mx-auto">
        {/* Desktop: Side-by-side layout | Mobile/Tablet: Stacked */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          {/* Heading - Left side on desktop (vertically centered), top on mobile/tablet */}
          {heading && heading.trim() !== '' && (
            <div className="lg:w-1/3 lg:flex-shrink-0">
              <h2 className="heading-bebas-light text-3xl md:text-3xl lg:text-5xl text-left text-text-primary">
                {heading}
              </h2>
            </div>
          )}

          {/* SDK Cards - Right side on desktop, below heading on mobile/tablet */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {options.map((option) => (
              <SDKCard key={option.id} option={option} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
