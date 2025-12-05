import {
  CTABox,
  PaymentFeaturesSection,
  PaymentGatewayHeroSection,
} from '@/types';

export const metadata = {
  title: 'Payment Gateway | KPPAY - Secure Global Payment Solutions',
  description:
    "Process payments seamlessly across borders with K-POLYGONE's advanced payment gateway. Fast, secure, and reliable payment processing for businesses worldwide.",
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
    href: "/contact",
    variant: 'outlined-white',
    size: 'md',
    showArrow: true,
  },
];

const PaymentGateway = () => {
  return (
    <main className="page-transition">
      <PaymentGatewayHeroSection />
      <PaymentFeaturesSection />

      {/* CTA Box Section */}
      <CTABox
        heading="Ready to start accepting payment?"
        headingColor="text-text-main-white"
        description="Join thousands of businesses using KP Pay to process payments across Africa with high conversion rates and local expertise"
        buttons={ctaButtons}
        sectionBackgroundColor="bg-gray/900"
        ctaGradient="linear-gradient(135deg, #00577A 0%, #153794 100%)"
      />
    </main>
  );
};

export default PaymentGateway;
