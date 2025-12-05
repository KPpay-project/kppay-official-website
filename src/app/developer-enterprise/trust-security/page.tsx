import { CTABox, ROUTES, TrustSecurityHeroSection } from '@/types';

export const metadata = {
  title: 'Trust & Security Centre | KPPAY - Bank-Level Security',
  description:
    "Enterprise security with 256-bit encryption, <60s incident response, and 100% compliance. KPPAY's trust center ensures your payments are protected with 99.99% uptime SLA.",
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
    text: 'Get Started',
    href: ROUTES.SIGNUP,
    variant: 'outlined-white',
    size: 'md',
    showArrow: true,
    className: 'bg-white text-[#3D3D3D] hover:bg-white/90',
  },
  {
    text: 'Contact Our Team',
    href: ROUTES.CONTACT,
    variant: 'outlined-white',
    size: 'md',
    showArrow: true,
  },
];

const TrustSecurity = () => {
  return (
    <main className="page-transition">
      <TrustSecurityHeroSection />

      {/* CTA Box Section */}
      <CTABox
        heading="trust kp pay with your business?"
        headingColor="text-text-main-white"
        description="Join thousands of businesses using KP Pay to process payments across Africa with high conversion rates and local expertise"
        buttons={ctaButtons}
        sectionBackgroundColor="bg-gray/900"
        ctaGradient="linear-gradient(135deg, #013d25 0%, #017448 100%)"
      />
    </main>
  );
};

export default TrustSecurity;
