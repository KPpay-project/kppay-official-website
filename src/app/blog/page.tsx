import React from 'react';
import { sanityFetch } from '@/lib/sanity/client';
import { getAllPostsQuery } from '@/lib/sanity/queries';
import { BlogPost } from '@/lib/sanity/types';
import { BlogHero, BlogSearch } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | KPPAY',
  description:
    'Explore the latest in payment technology, security best practices, and fintech innovation.',
};

export const revalidate = 0; // Always fetch fresh data
export const dynamic = 'force-dynamic'; // Force dynamic rendering

export default async function BlogPage() {
  const posts = await sanityFetch<BlogPost[]>({
    query: getAllPostsQuery,
    tags: ['post'],
  });

  return (
    <main>
      <BlogHero />
      <section className="w-full py-16 md:py-20 bg-surface-primary">
        <div className="container-padding max-w-7xl mx-auto">
          <BlogSearch posts={posts} />
        </div>
      </section>
    </main>
  );
}
