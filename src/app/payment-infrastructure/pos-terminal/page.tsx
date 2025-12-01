import { POSTerminalHeroSection } from '@/types';

export const metadata = {
  title: 'POS Terminal Solutions | KPPAY - Smart Payment Terminals',
  description:
    'Accept payments anywhere with KPPAY modern POS terminals. Fast transactions, multiple payment methods, and seamless integration for retail and service businesses.',
};

const PosTerminal = () => {
  return (
    <main className="page-transition">
      <POSTerminalHeroSection />
    </main>
  );
};

export default PosTerminal;
