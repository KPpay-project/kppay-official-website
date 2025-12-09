import {
  CTABox,
  PartnersHeroSection,
  PartnersCategoriesSection,
  PartnershipOpportunitiesSection,
  WhyPartnerSection,
  PartnerSuccessStoriesSection,
  PartnerGetStartedSection,
  ROUTES,
} from '@/types';

export const metadata = {
  title: 'Partners Program | KPPAY - Grow Together',
  description:
    "Join K-POLYGONE's partner ecosystem and unlock new revenue opportunities. Access exclusive resources, technical support, and revenue sharing across Africa's fastest-growing payment network.",
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
    text: 'Apply Now',
    href: ROUTES.CONTACT,
    variant: 'outlined-white',
    size: 'md',
    showArrow: true,
    className: 'bg-white text-[#3D3D3D] hover:bg-white/90',
  },
  {
    text: 'Learn More',
    href: ROUTES.CONTACT,
    variant: 'outlined-white',
    size: 'md',
    showArrow: true,
  },
];

const PartnersProgram = () => {
  return (
    <main className="page-transition">
      <PartnersHeroSection />

      {/* Partners Categories Section */}
      <PartnersCategoriesSection />

      {/* Partnership Opportunities Section */}
      <PartnershipOpportunitiesSection />

      {/* Why Partner Section */}
      <WhyPartnerSection />

      {/* Partner Success Stories Section */}
      <PartnerSuccessStoriesSection />

      {/* Get Started Section */}
      <PartnerGetStartedSection />

      {/* CTA Box Section */}
      <CTABox
        heading="ready to partner?"
        headingColor="text-text-main-white"
        description="Join thousands of businesses using KP Pay to process payments across Africa with high conversion rates and local expertise"
        buttons={ctaButtons}
        sectionBackgroundColor="bg-gray/900"
        ctaGradient="linear-gradient(135deg, #013d25 0%, #017448 100%)"
      />
    </main>
  );
};

export default PartnersProgram;
