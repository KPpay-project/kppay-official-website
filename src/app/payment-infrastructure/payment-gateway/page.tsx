import { PaymentFeaturesSection, PaymentGatewayHeroSection } from '@/types';

export const metadata = {
  title: 'Payment Gateway | KPPAY - Secure Global Payment Solutions',
  description:
    "Process payments seamlessly across borders with K-POLYGONE's advanced payment gateway. Fast, secure, and reliable payment processing for businesses worldwide.",
};

const PaymentGateway = () => {
  return (
    <main className="page-transition">
      <PaymentGatewayHeroSection />
      <PaymentFeaturesSection />
    </main>
  );
};

export default PaymentGateway;
