import React from 'react';

interface Stat {
  value: string;
  label: string;
}

interface TrustStatsProps {
  // Content props
  heading: string;
  subheading: string;
  stats: Stat[];

  // Styling props
  backgroundColor?: string;
  statsBackgroundColor?: string;
  statsRounded?: string;
  statsPadding?: string;
  headingClassName?: string;
  subheadingClassName?: string;
  statValueClassName?: string;
  statLabelClassName?: string;

  // Layout props
  paddingY?: string;
  maxWidth?: string;
  columns?: {
    base?: number;
    md?: number;
    lg?: number;
  };
  gap?: string;
}

const TrustStats: React.FC<TrustStatsProps> = ({
  heading,
  subheading,
  stats,
  backgroundColor = 'bg-white',
  statsBackgroundColor = 'bg-[#F9FAFB]',
  statsRounded = 'rounded-3xl',
  statsPadding = 'p-8 md:p-12 lg:p-16',
  headingClassName = 'heading-bebas-light text-4xl md:text-5xl lg:text-6xl text-center mb-4 md:mb-6',
  subheadingClassName = 'text-sm md:text-base lg:text-lg text-center text-text-secondary mb-10 md:mb-12 lg:mb-16',
  statValueClassName = 'heading-bebas-light text-5xl md:text-6xl lg:text-7xl text-brand-primary mb-2 md:mb-3',
  statLabelClassName = 'text-base md:text-lg lg:text-xl text-text-primary',
  paddingY = 'py-12 md:py-16 lg:py-20',
  maxWidth = 'max-w-7xl',
  columns = {
    base: 1,
    md: 2,
    lg: 4,
  },
  gap = 'gap-8 md:gap-10 lg:gap-12',
}) => {
  const getGridCols = () => {
    const colClasses = [];
    if (columns.base) colClasses.push(`grid-cols-${columns.base}`);
    if (columns.md) colClasses.push(`md:grid-cols-${columns.md}`);
    if (columns.lg) colClasses.push(`lg:grid-cols-${columns.lg}`);
    return colClasses.join(' ');
  };

  return (
    <section className={`w-full ${backgroundColor} ${paddingY}`}>
      <div className={`container-padding ${maxWidth} mx-auto`}>
        {/* Heading */}
        <h2 className={headingClassName}>{heading}</h2>

        {/* Subheading */}
        <p className={subheadingClassName}>{subheading}</p>

        {/* Stats Container with Background */}
        <div
          className={`${statsBackgroundColor} ${statsRounded} ${statsPadding}`}
        >
          {/* Stats Grid */}
          <div className={`grid ${getGridCols()} ${gap}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                {/* Stat Value */}
                <div className={statValueClassName}>{stat.value}</div>

                {/* Stat Label */}
                <div className={statLabelClassName}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
