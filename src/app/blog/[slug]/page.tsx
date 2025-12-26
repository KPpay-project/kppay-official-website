import React from 'react';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/lib/sanity/client';
import {
  getPostBySlugQuery,
  getAllPostSlugsQuery,
} from '@/lib/sanity/queries';
import { BlogPostDetail } from '@/lib/sanity/types';
import { BlogPostHero, BlogContent, CTABox } from '@/types';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<BlogPostDetail>({
    query: getPostBySlugQuery,
    params: { slug },
    tags: [`post:${slug}`],
  });

  if (!post) return {};

  const title = post.seo?.metaTitle || `${post.title} | KPPAY Blog`;
  const description = post.seo?.metaDescription || post.excerpt;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [post.featuredImage.asset.url],
      type: 'article',
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.featuredImage.asset.url],
    },
  };
}

// Generate static params for all posts
export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>({
    query: getAllPostSlugsQuery,
    tags: ['post'],
  });

  return slugs.map((slug) => ({ slug }));
}

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await sanityFetch<BlogPostDetail>({
    query: getPostBySlugQuery,
    params: { slug },
    tags: [`post:${slug}`],
  });

  if (!post) {
    notFound();
  }

  return (
    <main>
      <BlogPostHero post={post} />
      <BlogContent content={post.content} />
      <CTABox
        title="Ready to Transform Your Payments?"
        description="Join thousands of businesses using KPPAY for secure, fast, and reliable payment processing."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </main>
  );
}
