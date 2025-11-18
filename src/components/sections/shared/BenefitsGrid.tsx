import React from 'react';
import Image from 'next/image';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsGridProps {
  // Section styling
  backgroundColor?: string;

  // Header props
  heading: string;
  headingClassName?: string;

  // Features props
  features: Feature[];
  featureTitleClassName?: string;
  featureDescriptionClassName?: string;
  iconSize?: {
    width: number;
    height: number;
    className?: string;
  };

  // Layout props
  columns?: {
    base?: number;
    md?: number;
    lg?: number;
  };
  gap?: string;

  // Spacing props
  paddingY?: string;

  // Container props
  maxWidth?: string;
}

const BenefitsGrid: React.FC<BenefitsGridProps> = ({
  backgroundColor = 'bg-gray-900',
  heading,
  headingClassName = 'heading-bebas-light text-3xl md:text-4xl lg:text-5xl text-center mb-10 md:mb-12 lg:mb-16',
  features,
  featureTitleClassName = 'text-lg md:text-xl font-bold text-text-primary mb-2 md:mb-3',
  featureDescriptionClassName = 'text-sm md:text-base text-text-secondary max-w-xs',
  iconSize = {
    width: 80,
    height: 80,
    className: 'w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6',
  },
  columns = {
    base: 1,
    md: 3,
    lg: 3,
  },
  gap = 'gap-8 md:gap-10 lg:gap-12',
  paddingY = 'py-12 md:py-16 lg:py-20',
  maxWidth = 'max-w-7xl',
}) => {
  const getGridCols = () => {
    const colClasses = [];
    if (columns.base) colClasses.push(`grid-cols-${columns.base}`);
    if (columns.md) colClasses.push(`md:grid-cols-${columns.md}`);
    if (columns.lg) colClasses.push(`lg:grid-cols-${columns.lg}`);
    return colClasses.join(' ');
  };

  return (
    <section className={`w-full ${backgroundColor}`}>
      <div className={paddingY}>
        <div className={`container-padding ${maxWidth} mx-auto`}>
          {/* Section Header */}
          <h2 className={headingClassName}>{heading}</h2>

          {/* Features Grid */}
          <div className={`grid ${getGridCols()} ${gap}`}>
            {features.map((feature, index) => (
              <div key={index} className="flex items-start text-left gap-2">
                {/* Icon */}
                <div className={iconSize.className}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={iconSize.width}
                    height={iconSize.height}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  {/* Title */}
                  <h3 className={featureTitleClassName}>{feature.title}</h3>

                  {/* Description */}
                  <p className={featureDescriptionClassName}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
