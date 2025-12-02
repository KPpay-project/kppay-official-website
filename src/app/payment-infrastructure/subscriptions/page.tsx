import {
  CTABox,
  FinancialServicesSection,
  FlexiblePricingSection,
  SubscriptionInvoicingHeroSection,
} from '@/types';

export const metadata = {
  title: 'Subscription Management | KPPAY - Automated Recurring Payments',
  description:
    'Simplify subscription billing with KPPAY. Automate recurring payments, manage customer subscriptions, and grow predictable revenue across global markets.',
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
    text: 'Start Free Trial',
    href: 'https://dev.d32yml5hzs7qtc.amplifyapp.com/onboarding/create-account',
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

const Subscriptions = () => {
  return (
    <main className="page-transition">
      <SubscriptionInvoicingHeroSection />
      <FlexiblePricingSection />
      <FinancialServicesSection />

      {/* CTA Box Section */}
      <CTABox
        heading="Start billing customers today"
        headingColor="text-text-main-white"
        description="Join thousands of businesses using KP Pay to process payments across Africa with high conversion rates and local expertise"
        buttons={ctaButtons}
        sectionBackgroundColor="bg-gray/900"
        ctaGradient="linear-gradient(135deg, #00577A 0%, #153794 100%)"
      />
    </main>
  );
};

export default Subscriptions;
