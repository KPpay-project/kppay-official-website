import React from 'react';
import Image from 'next/image';
import { BlogPostDetail, CategoryBadge } from '@/types';
import { Clock, Calendar } from 'lucide-react';

interface BlogPostHeroProps {
  post: BlogPostDetail;
}

const BlogPostHero: React.FC<BlogPostHeroProps> = ({ post }) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString(
    'en-US',
    {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }
  );

  return (
    <section className="w-full py-12 md:py-16 bg-surface-secondary">
      <div className="container-padding max-w-4xl mx-auto">
        {/* Category Badge */}
        <div className="mb-6">
          <CategoryBadge
            title={post.category.title}
            color={post.category.color}
          />
        </div>

        {/* Title */}
        <h1 className="hero-heading-dark text-4xl md:text-5xl lg:text-6xl mb-6">
          {post.title}
        </h1>

        {/* Metadata */}
        <div className="flex items-center gap-4 mb-8 text-text-secondary text-sm flex-wrap">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime} min read
          </span>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden">
          <Image
            src={post.featuredImage.asset.url}
            alt={post.featuredImage.alt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogPostHero;
