import React from 'react';
import { ReusableCTA } from '@/types';

interface CTAButton {
  text: string;
  href: string;
  variant?:
    | 'primary'
    | 'white'
    | 'outlined'
    | 'outlined-white'
    | 'ghost'
    | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showArrow?: boolean;
  className?: string;
}

interface CTABoxProps {
  // Content props
  heading: string;
  description: string;
  buttons: CTAButton[];

  // Styling props
  headingColor?: string;
  ctaBackgroundColor?: string;
  ctaGradient?: string; // New prop for CTA gradient
  sectionBackgroundColor?: string;
  sectionGradient?: string; // New prop for section gradient

  // Layout props
  paddingY?: string;
  maxWidth?: string;
}

const CTABox: React.FC<CTABoxProps> = ({
  heading,
  description,
  buttons,
  headingColor = 'text-text-inverse-primary',
  ctaBackgroundColor = 'bg-brand-primary',
  ctaGradient,
  sectionBackgroundColor = 'bg-gray-900',
  sectionGradient,
  paddingY = 'pb-6 md:pb-8 lg:pb-12',
  maxWidth = 'max-w-7xl',
}) => {
  // Determine section background style
  const sectionStyle = sectionGradient
    ? { background: sectionGradient }
    : undefined;

  const sectionClassName = sectionGradient ? '' : sectionBackgroundColor;

  return (
    <section
      className={`w-full ${sectionClassName} ${paddingY}`}
      style={sectionStyle}
    >
      <div className={`container-padding ${maxWidth} mx-auto`}>
        <ReusableCTA
          heading={heading}
          description={description}
          buttons={buttons}
          headingColor={headingColor}
          backgroundColor={ctaBackgroundColor}
          backgroundGradient={ctaGradient}
        />
      </div>
    </section>
  );
};

export default CTABox;
