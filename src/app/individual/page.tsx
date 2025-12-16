import {
  IndividualPricingCards,
  IndividualPricingHero,
  ModernBankingFeatures,
  ReusableCTA,
  ROUTES,
} from '@/types';
import { Phone, Users, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Individual Pricing | KPPay - Payments Made Simple',
  description:
    'Experience modern banking designed for your personal financial needs. Affordable pricing plans with instant payments, smart savings, and more. Available in 50 countries.',
};

const IndividualPricingPage = () => {
  return (
    <main className="page-transition">
      <IndividualPricingHero />
      <IndividualPricingCards />
      <ModernBankingFeatures />

      {/* CTA Section */}
      <ReusableCTA
        heading="Ready to scale your business?"
        description="Let's discuss how our enterprise solutions can transform your financial operations"
        benefits={[
          { icon: Phone, text: 'Get a response within 24 hours' },
          { icon: Users, text: 'Dedicated enterprise support team' },
          { icon: ShieldCheck, text: 'SOC 2 and PCI-DSS compliant' },
        ]}
        buttons={[
          {
            text: 'Schedule a Demo',
            href: ROUTES.CONTACT,
            variant: 'outlined-white',
            size: 'md',
            showArrow: true,
            className: 'bg-white text-brand-primary hover:bg-white/90',
          },
          {
            text: 'Request Custom Quote',
            href: ROUTES.CONTACT,
            variant: 'outlined-white',
            size: 'md',
            showArrow: true,
          },
        ]}
      />
    </main>
  );
};

export default IndividualPricingPage;
