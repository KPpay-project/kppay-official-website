// src/components/sections/shared/MobileAppCard.tsx
import * as React from 'react';
import { Button, cn } from '@/types';

interface UseCaseTag {
  label: string;
}

export interface MobileAppOption {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  useCases: UseCaseTag[];
  features: string[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

interface MobileAppCardProps {
  option: MobileAppOption;
  className?: string;
}

export const MobileAppCard: React.FC<MobileAppCardProps> = ({
  option,
  className,
}) => {
  const {
    icon,
    title,
    description,
    useCases,
    features,
    ctaText,
    ctaHref,
    onCtaClick,
  } = option;

  // Check if button should be rendered
  const shouldRenderButton = ctaText && ctaHref;

  return (
    <div
      className={cn(
        'bg-surface-secondary rounded-lg p-6 flex flex-col h-full',
        className
      )}
    >
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center mb-4 text-brand-primary">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        {description}
      </p>

      {/* Use Cases Label */}
      <div className="mb-3">
        <span className="text-brand-primary uppercase tracking-wide text-[10px] font-medium">
          USE CASES
        </span>
      </div>

      {/* Use Case Tags Grid */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="border border-border-secondary rounded px-3 py-2 text-center"
          >
            <span className="text-xs text-text-primary font-medium">
              {useCase.label}
            </span>
          </div>
        ))}
      </div>

      {/* Blue Features Section */}
      <div className="bg-brand-primary rounded-lg p-6 flex flex-col flex-grow">
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
    </div>
  );
};
