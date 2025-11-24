import React from 'react';
import { Calendar, Target, PiggyBank, TrendingUp } from 'lucide-react';

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  example: string;
}

const ToolCard: React.FC<ToolCardProps> = ({
  icon,
  title,
  description,
  example,
}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 flex flex-col">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="bg-gray-800 text-white rounded p-4 mt-auto">
        <div className="text-xs text-gray-400 uppercase mb-2">Example</div>
        <div className="text-sm">{example}</div>
      </div>
    </div>
  );
};

const FinancialPlanningTools = () => {
  const tools = [
    {
      icon: <PiggyBank className="w-8 h-8 text-gray-900" />,
      title: 'Savings Calculator',
      description: 'See how your savings will grow over time',
      example: '$10,000 → $13,439 in 5 years at 4.5% APY',
    },
    {
      icon: <Target className="w-8 h-8 text-gray-900" />,
      title: 'Goal Planner',
      description: 'Calculate how much to save for your goals',
      example: '$10,000 → $13,439 in 5 years at 4.5% APY',
    },
    {
      icon: <Calendar className="w-8 h-8 text-gray-900" />,
      title: 'Retirement Calculator',
      description: 'Plan for a comfortable retirement',
      example: '$10,000 → $13,439 in 5 years at 4.5% APY',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gray-900" />,
      title: 'Investment Projector',
      description: 'Forecast investment portfolio growth',
      example: '$10,000 → $13,439 in 5 years at 4.5% APY',
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-bebas-light text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Financial Planning Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialPlanningTools;
