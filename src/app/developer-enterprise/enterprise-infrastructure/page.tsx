import {
  CTABox,
  FinancialInfrastructureHeroSection,
  EnterpriseSolutionsSection,
  WhyChooseKPPaySection,
  ROUTES,
} from '@/types';

export const metadata = {
  title: 'Enterprise Infrastructure | KPPAY - Scalable Financial Solutions',
  description:
    'Build on enterprise-grade financial infrastructure trusted by 500+ clients. K-POLYGONE delivers 99.9% uptime SLA and SOC 2 compliant payment processing across Africa.',
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
    text: 'Schedule a Demo',
    href: ROUTES.SIGNUP,
    variant: 'outlined-white',
    size: 'md',
    showArrow: true,
    className: 'bg-white text-[#3D3D3D] hover:bg-white/90',
  },
  {
    text: 'Request Custom Quote',
    href: ROUTES.CONTACT,
    variant: 'outlined-white',
    size: 'md',
    showArrow: true,
  },
];
const EnterpriseInfrastructure = () => {
  return (
    <main className="page-transition">
      {/* Hero section component */}
      <FinancialInfrastructureHeroSection />

      {/* Enterprise Solutions Section */}
      <EnterpriseSolutionsSection />

      {/* Why Choose KP Pay Section */}
      <WhyChooseKPPaySection />

      {/* CTA Box Section */}
      <CTABox
        heading="ready to scale your business?"
        headingColor="text-text-main-white"
        description="Let's discuss how our enterprise solutions can transform your financial operations"
        buttons={ctaButtons}
        sectionBackgroundColor="bg-gray/900"
        ctaGradient="linear-gradient(135deg, #013d25 0%, #017448 100%)"
      />
    </main>
  );
};

export default EnterpriseInfrastructure;
