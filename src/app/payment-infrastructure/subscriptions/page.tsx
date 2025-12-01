import { SubscriptionInvoicingHeroSection } from '@/types';

export const metadata = {
  title: 'Subscription Management | KPPAY - Automated Recurring Payments',
  description:
    'Simplify subscription billing with KPPAY. Automate recurring payments, manage customer subscriptions, and grow predictable revenue across global markets.',
};

const Subscriptions = () => {
  return (
    <main className="page-transition">
      <SubscriptionInvoicingHeroSection />
    </main>
  );
};

export default Subscriptions;
