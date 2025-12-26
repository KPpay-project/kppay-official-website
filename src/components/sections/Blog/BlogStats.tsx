'use client';

import React from 'react';
import { FileText, Tag, Clock, TrendingUp } from 'lucide-react';

interface BlogStatsProps {
  totalPosts: number;
  totalCategories?: number;
  totalReadTime?: number;
}

const BlogStats: React.FC<BlogStatsProps> = ({
  totalPosts,
  totalCategories = 4,
  totalReadTime,
}) => {
  const stats = [
    {
      icon: FileText,
      label: 'Articles',
      value: totalPosts,
      gradient: 'from-brand-primary to-brand-accent',
    },
    {
      icon: Tag,
      label: 'Categories',
      value: totalCategories,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      label: 'Hours of Content',
      value: totalReadTime ? Math.ceil(totalReadTime / 60) : '10+',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: TrendingUp,
      label: 'Weekly Updates',
      value: '2+',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-surface-primary border border-border-primary rounded-xl p-4 md:p-6 hover:border-brand-primary/30 transition-all duration-300 hover:shadow-card group"
          >
            <div
              className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${stat.gradient} mb-3 group-hover:scale-110 transition-transform`}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm text-text-tertiary font-medium">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogStats;
