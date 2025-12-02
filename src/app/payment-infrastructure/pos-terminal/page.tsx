import {
  CTABox,
  EverythingYouNeedSection,
  POSTerminalHeroSection,
  SimplePricingGetStartedSection,
} from '@/types';

export const metadata = {
  title: 'POS Terminal Solutions | KPPAY - Smart Payment Terminals',
  description:
    'Accept payments anywhere with KPPAY modern POS terminals. Fast transactions, multiple payment methods, and seamless integration for retail and service businesses.',
};

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
    text: 'Download Terminal App',
    href: '/contact',
    variant: 'outlined-white',
    size: 'md',
    showArrow: true,
    className: 'bg-white text-[#153794] hover:bg-white/90',
  },
  {
    text: 'Schedule Demo',
    href: '/contact',
    variant: 'outlined-white',
    size: 'md',
    showArrow: true,
  },
];

const PosTerminal = () => {
  return (
    <main className="page-transition">
      <POSTerminalHeroSection />
      <EverythingYouNeedSection />
      <SimplePricingGetStartedSection />

      {/* CTA Box Section */}
      <CTABox
        heading="ready to upgrade your pos?"
        headingColor="text-text-main-white"
        description="Join thousands of businesses using KP Pay to process payments across Africa with high conversion rates and local expertise"
        buttons={ctaButtons}
        sectionBackgroundColor="bg-gray/900"
        ctaGradient="linear-gradient(135deg, #00577A 0%, #153794 100%)"
      />
    </main>
  );
};

export default PosTerminal;
