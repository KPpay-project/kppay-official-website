import { VirtualCardsHeroSection } from '@/types';

export const metadata = {
  title: 'Virtual Cards | KPPAY - Secure Digital Payment Cards',
  description:
    'Issue and manage virtual cards instantly with KPPAY. Control spending, enhance security, and streamline business expenses with flexible digital card solutions.',
};

const VirtualCards = () => {
  return (
    <main className="page-transition">
      <VirtualCardsHeroSection />
    </main>
  );
};

export default VirtualCards;
