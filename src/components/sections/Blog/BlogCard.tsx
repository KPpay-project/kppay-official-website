'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, CategoryBadge, ROUTES } from '@/types';
import { Clock } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
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
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Featured Image */}
      <div className="relative w-full h-48 bg-surface-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Image
          src={post.featuredImage.asset.url}
          alt={post.featuredImage.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6 relative">
        {/* Metadata */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
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
        <h3 className="text-text-primary text-lg font-semibold mb-2 group-hover:text-brand-primary transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-text-secondary text-sm line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read more indicator */}
        <div className="mt-4 flex items-center gap-2 text-brand-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Read article</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
