import { ResourcesHeroSection, FeaturedResources } from '@/types';

export const metadata = {
  title: 'Resources and Documentation | KP Pay - Developer Resources',
  description:
    'Everything you need to build, integrate and scale with KP Pay. Access comprehensive API documentation, tutorials, guides, and developer support.',
};

const ApiDocumentation = () => {
  return (
    <main className="page-transition">
      <ResourcesHeroSection />
      <FeaturedResources />
    </main>
  );
};

export default ApiDocumentation;
