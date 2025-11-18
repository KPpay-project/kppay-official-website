// src/components/sections/shared/IntegrationCard.tsx
import * as React from 'react';
import { Button, cn, type IntegrationCardProps } from '@/types';

export const IntegrationCard: React.FC<IntegrationCardProps> = ({
  option,
  className,
}) => {
  const {
    icon,
    title,
    description,
    timeToIntegrate,
    complexity,
    features,
    ctaText,
    ctaHref,
    onCtaClick,
  } = option;

  // Check if button should be rendered
  const shouldRenderButton = ctaText && ctaHref;

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Beginner':
        return 'text-success';
      case 'Advanced':
        return 'text-text-primary';
      default:
        return 'text-text-primary';
    }
  };

  return (
    <div
      className={cn(
        'bg-surface-secondary rounded-lg p-6 flex flex-col h-full',
        className
      )}
    >
      {/* Card Header - Light Gray Background - Fixed height area */}
      <div className="flex-shrink-0">
        {/* Icon */}
        {icon && (
          <div className="w-14 h-14 flex items-center justify-center mb-4 text-brand-primary">
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary mb-2 min-h-[1.75rem]">
          {title}
        </h3>

        {/* Description - Fixed height to accommodate 2 lines */}
        {description && (
          <p className="text-sm text-text-secondary leading-relaxed mb-4 min-h-[2.5rem]">
            {description}
          </p>
        )}

        {/* Metadata Badges - with borders */}
        {(timeToIntegrate || complexity) && (
          <div className="flex items-start gap-6 text-xs mb-6">
            {/* Time to Integrate */}
            {timeToIntegrate && (
              <div className="flex flex-col border border-border-secondary rounded px-3 py-2">
                <span className="text-brand-primary uppercase tracking-wide mb-1 font-medium text-[10px]">
                  Time to Integrate
                </span>
                <span className="font-semibold text-text-primary text-xs">
                  {timeToIntegrate}
                </span>
              </div>
            )}

            {/* Complexity */}
            {complexity && (
              <div className="flex flex-col border border-border-secondary rounded px-3 py-2">
                <span className="text-brand-primary uppercase tracking-wide mb-1 font-medium text-[10px]">
                  Complexity
                </span>
                <span
                  className={cn(
                    'font-semibold text-xs',
                    getComplexityColor(complexity)
                  )}
                >
                  {complexity}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Card Body - Blue Background with rounded corners - Grows to fill remaining space */}
      {features && features.length > 0 && (
        <div className="bg-brand-primary rounded-lg p-6 flex flex-col flex-grow">
          {/* Features List */}
          <ul
            className={cn(
              'space-y-2.5 flex-grow',
              shouldRenderButton ? 'mb-6' : ''
            )}
          >
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-text-main-white text-sm"
              >
                <span className="text-text-main-white mt-0.5 flex-shrink-0">
                  •
                </span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Only render button if both ctaText and ctaHref are provided */}
          {shouldRenderButton && (
            <Button
              variant="outlined-white"
              size="md"
              fullWidth
              href={ctaHref}
              onClick={onCtaClick}
            >
              {ctaText}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default IntegrationCard;
