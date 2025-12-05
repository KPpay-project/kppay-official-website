import {
  ConnectPlatformsHeroSection,
  CTABox,
  PaymentFeaturesSectionConnect,
  PlatformBusinessSection,
} from '@/types';

export const metadata = {
  title: 'Connect Platforms | KPPAY - Marketplace Payment Solutions',
  description:
    'Power your marketplace or platform with KPPAY Connect. Manage multi-party payments, automate payouts, and scale your connected business effortlessly.',
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
    text: 'Start Building',
    href: 'https://dev.d32yml5hzs7qtc.amplifyapp.com/onboarding/create-account',
    variant: 'outlined-white',
    size: 'md',
    showArrow: true,
    className: 'bg-white text-[#153794] hover:bg-white/90',
  },
  {
    text: 'Request Demo',
    href: "/contact",
    variant: 'outlined-white',
    size: 'md',
    showArrow: true,
  },
];

const ConnectPlatforms = () => {
  return (
    <main className="page-transition">
      <ConnectPlatformsHeroSection />
      <PlatformBusinessSection />
      <PaymentFeaturesSectionConnect />

      {/* CTA Box Section */}
      <CTABox
        heading="ready to launch your platform?"
        headingColor="text-text-main-white"
        description="Join thousands of businesses using KP Pay to process payments across Africa with high conversion rates and local expertise"
        buttons={ctaButtons}
        sectionBackgroundColor="bg-gray/900"
        ctaGradient="linear-gradient(135deg, #00577A 0%, #153794 100%)"
      />
    </main>
  );
};

export default ConnectPlatforms;
