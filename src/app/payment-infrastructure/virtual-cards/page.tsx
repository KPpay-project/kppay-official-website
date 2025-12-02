import {
  CardManagementSection,
  CTABox,
  UseCasesPricingSection,
  VirtualCardsHeroSection,
} from '@/types';

export const metadata = {
  title: 'Virtual Cards | KPPAY - Secure Digital Payment Cards',
  description:
    'Issue and manage virtual cards instantly with KPPAY. Control spending, enhance security, and streamline business expenses with flexible digital card solutions.',
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
    text: 'Create Account',
    href: 'https://dev.d32yml5hzs7qtc.amplifyapp.com/onboarding/create-account',
    variant: 'outlined-white',
    size: 'md',
    showArrow: true,
    className: 'bg-white text-[#153794] hover:bg-white/90',
  },
  {
    text: 'Contact Sales',
    href: '/contact',
    variant: 'outlined-white',
    size: 'md',
    showArrow: true,
  },
];

const VirtualCards = () => {
  return (
    <main className="page-transition">
      <VirtualCardsHeroSection />
      <CardManagementSection />
      <UseCasesPricingSection />

      {/* CTA Box Section */}
      <CTABox
        heading="ready to start issuing cards?"
        headingColor="text-text-main-white"
        description="Join thousands of businesses using KP Pay to process payments across Africa with high conversion rates and local expertise"
        buttons={ctaButtons}
        sectionBackgroundColor="bg-gray/900"
        ctaGradient="linear-gradient(135deg, #00577A 0%, #153794 100%)"
      />
    </main>
  );
};

export default VirtualCards;
