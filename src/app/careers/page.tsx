import { CareersHero, JobPositions, WhyJoinUs } from '@/types';

export const metadata = {
  title: 'Careers at KPPAY | Join Our Team - Build the Future of Payments',
  description:
    "Join KPPAY and build the future of payment solutions across Africa. Explore open positions in engineering, product, sales, and more. We're hiring talented individuals passionate about fintech innovation.",
  keywords:
    'KPPAY careers, fintech jobs, payment technology jobs, software engineer jobs, product manager jobs, Africa fintech careers',
  openGraph: {
    title: 'Careers at KPPAY | Join Our Team',
    description:
      'Build the future of payments with KPPAY. Explore open positions and join our innovative team.',
    type: 'website',
  },
};

export default function CareersPage() {
  return (
    <main className="page-transition">
      <CareersHero />
      <WhyJoinUs />
      <JobPositions />
    </main>
  );
}
