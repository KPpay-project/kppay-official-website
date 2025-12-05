import React from 'react';
import {
  ComplianceAndSecurity,
  CTABox,
  IdentityKYCHeroSection,
  ROUTES,
  VerificationFeaturesGrid,
} from '@/types';

// Define CTAButton type inline if not exported from @/types
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

const ctaButtons: CTAButton[] = [
  {
    text: 'Get Started',
    href: ROUTES.SIGNUP,
    variant: 'outlined-white',
    size: 'md',
    showArrow: true,
    className: 'bg-white text-[#3D3D3D] hover:bg-white/90',
  },
  {
    text: 'Talk to an Expert',
    href: ROUTES.CONTACT,
    variant: 'outlined-white',
    size: 'md',
    showArrow: true,
  },
];

export default function IdentityKYCPage() {
  return (
    <main className="page-transition">
      {/* Hero section */}
      <IdentityKYCHeroSection />

      {/* Advanced Verification Features */}
      <VerificationFeaturesGrid />

      <ComplianceAndSecurity />

      {/* CTA Box Section */}
      <CTABox
        heading="trust kp pay with your business?"
        headingColor="text-text-main-white"
        description="Join thousands of businesses using KP Pay to process payments across Africa with high conversion rates and local expertise"
        buttons={ctaButtons}
        sectionBackgroundColor="bg-gray/900"
        ctaGradient="linear-gradient(100deg, #153794 0%, #A50E23 100%)"
      />
    </main>
  );
}
