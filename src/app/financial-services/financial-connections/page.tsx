import {
  CTABox,
  FinancialConnectionsHeroSection,
  FinancialConnectionsGrid,
  ComplianceAndSecuritySection,
  HowItWorksSection,
  BankGradeSecuritySection,
  PopularUseCasesSection,
  ROUTES,
} from '@/types';

export const metadata = {
  title: 'Financial Connections | KPPAY - Connect Bank Accounts Seamlessly',
  description:
    "Connect to 200+ financial institutions across 50+ countries with K-POLYGONE's secure financial connections. Reliable account linking with 99.9% uptime and 10M+ connected accounts.",
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
    text: 'Start Integrating',
    href: ROUTES.PAYMENT_INFRA_CONNECT,
    variant: 'outlined-white',
    size: 'md',
    showArrow: true,
    className: 'bg-white text-[#3D3D3D] hover:bg-white/90',
  },
  {
    text: 'View Documentation',
    href: ROUTES.RESOURCES,
    variant: 'outlined-white',
    size: 'md',
    showArrow: true,
  },
];

const FinancialConnections = () => {
  return (
    <main className="page-transition">
      <FinancialConnectionsHeroSection />
      <FinancialConnectionsGrid />
      <ComplianceAndSecuritySection />
      <HowItWorksSection />
      <BankGradeSecuritySection />
      <PopularUseCasesSection />

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
};

export default FinancialConnections;
