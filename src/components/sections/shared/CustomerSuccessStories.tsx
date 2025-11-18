import React from 'react';
import { TrendingUp, RefreshCw, Users } from 'lucide-react';

interface MetricProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const Metric: React.FC<MetricProps> = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-1.5">{icon}</div>
      <div className="text-xl md:text-2xl font-bold text-white mb-0.5">
        {value}
      </div>
      <div className="text-[10px] text-white/90">{label}</div>
    </div>
  );
};

interface StoryCardProps {
  abbreviation: string;
  companyName: string;
  category: string;
  challenge: string;
  metrics: MetricProps[];
}

const StoryCard: React.FC<StoryCardProps> = ({
  abbreviation,
  companyName,
  category,
  challenge,
  metrics,
}) => {
  return (
    <div className="bg-surface-secondary rounded-xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
      {/* Top Section - Light Background */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Large Abbreviation with Bebas Font */}
        <div className="heading-bebas-light text-[80px] leading-none text-brand-primary mb-3">
          {abbreviation}
        </div>

        {/* Company Name & Category - Close Together */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-text-primary inline">
            {companyName}
          </h3>
          <span className="ml-2 bg-brand-primary/10 text-brand-primary text-[10px] font-semibold px-2 py-0.5 rounded uppercase">
            {category}
          </span>
        </div>

        {/* Challenge Section */}
        <div className="flex-grow">
          <h4 className="text-brand-primary text-[10px] font-bold uppercase mb-1.5">
            Challenge
          </h4>
          <p className="text-text-secondary text-sm leading-snug">
            {challenge}
          </p>
        </div>
      </div>

      {/* Results Section - Blue Background - Fixed Height */}
      <div className="bg-brand-primary p-5">
        <h4 className="text-white text-[10px] font-bold uppercase mb-4">
          Results
        </h4>
        <div className="grid grid-cols-3 gap-3">
          {metrics.map((metric, index) => (
            <Metric
              key={index}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CustomerSuccessStories = () => {
  const stories = [
    {
      abbreviation: 'SA',
      companyName: 'SaaS Startup',
      category: 'Software',
      challenge: 'Manual billing processes were limiting growth',
      metrics: [
        {
          icon: <TrendingUp className="w-5 h-5 text-white" />,
          value: '300%',
          label: 'Revenue Growth',
        },
        {
          icon: <RefreshCw className="w-5 h-5 text-white" />,
          value: '95%',
          label: 'Retention Rate',
        },
        {
          icon: <Users className="w-5 h-5 text-white" />,
          value: '50%',
          label: 'Less Churn',
        },
      ],
    },
    {
      abbreviation: 'FI',
      companyName: 'Fitness Platform',
      category: 'Health & Wellness',
      challenge: 'Complex membership tiers and billing cycles',
      metrics: [
        {
          icon: <Users className="w-5 h-5 text-white" />,
          value: '10k',
          label: 'Subscribers',
        },
        {
          icon: <RefreshCw className="w-5 h-5 text-white" />,
          value: '99%',
          label: 'Payment Success',
        },
        {
          icon: <TrendingUp className="w-5 h-5 text-white" />,
          value: '2hrs',
          label: 'Saved Daily',
        },
      ],
    },
    {
      abbreviation: 'ME',
      companyName: 'Media Company',
      category: 'Entertainment',
      challenge: 'International expansion with local payment methods',
      metrics: [
        {
          icon: <TrendingUp className="w-5 h-5 text-white" />,
          value: '$2M+',
          label: 'ARR',
        },
        {
          icon: <Users className="w-5 h-5 text-white" />,
          value: '15',
          label: 'Countries',
        },
        {
          icon: <RefreshCw className="w-5 h-5 text-white" />,
          value: '15+',
          label: 'Multi-Currency Support',
        },
      ],
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-surface-primary">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="heading-bebas-light text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Customer Success Stories
        </h2>

        {/* Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <StoryCard
              key={index}
              abbreviation={story.abbreviation}
              companyName={story.companyName}
              category={story.category}
              challenge={story.challenge}
              metrics={story.metrics}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSuccessStories;
