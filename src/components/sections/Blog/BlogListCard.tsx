'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, CategoryBadge, ROUTES } from '@/types';
import { Clock, ArrowRight } from 'lucide-react';

interface BlogListCardProps {
  post: BlogPost;
}

const BlogListCard: React.FC<BlogListCardProps> = ({ post }) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString(
    'en-US',
    {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }
  );

  return (
    <Link
      href={`${ROUTES.BLOG}/${post.slug}`}
      className="block bg-surface-primary rounded-xl overflow-hidden cursor-pointer group relative border border-border-secondary shadow-md hover:border-brand-primary/30 transition-all duration-300 hover:shadow-card-hover"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="flex flex-col sm:flex-row gap-6 p-6 relative">
        {/* Featured Image */}
        <div className="relative w-full sm:w-64 h-48 sm:h-40 bg-surface-secondary rounded-lg overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src={post.featuredImage.asset.url}
            alt={post.featuredImage.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, 256px"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Metadata */}
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <CategoryBadge
                title={post.category.title}
                color={post.category.color}
              />
              <span className="text-text-tertiary text-xs flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime} min read
              </span>
              <span className="text-text-tertiary text-xs">{formattedDate}</span>
            </div>

            {/* Title */}
            <h3 className="text-text-primary text-xl font-semibold mb-3 group-hover:text-brand-primary transition-colors">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-text-secondary text-sm line-clamp-2 mb-4">
              {post.excerpt}
            </p>
          </div>

          {/* Read more indicator */}
          <div className="flex items-center gap-2 text-brand-primary text-sm font-medium">
            <span>Read full article</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogListCard;
