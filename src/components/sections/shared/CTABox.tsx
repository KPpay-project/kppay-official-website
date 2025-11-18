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
  sectionBackgroundColor?: string;

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
  sectionBackgroundColor = 'bg-gray-900',
  paddingY = 'pb-12 md:pb-16 lg:pb-20',
  maxWidth = 'max-w-7xl',
}) => {
  return (
    <section className={`w-full ${sectionBackgroundColor} ${paddingY}`}>
      <div className={`container-padding ${maxWidth} mx-auto`}>
        <ReusableCTA
          heading={heading}
          description={description}
          buttons={buttons}
          headingColor={headingColor}
          backgroundColor={ctaBackgroundColor}
        />
      </div>
    </section>
  );
};

export default CTABox;
