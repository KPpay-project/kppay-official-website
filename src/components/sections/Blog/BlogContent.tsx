import React from 'react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/client';

interface BlogContentProps {
  content: any[];
}

// Custom components for Portable Text
const components = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold text-text-primary mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-semibold text-text-primary mt-6 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-text-primary text-base leading-relaxed mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-brand-primary pl-6 py-2 my-8 italic text-text-secondary">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }: any) => {
      const target = value?.href?.startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-brand-primary hover:underline font-medium"
        >
          {children}
        </a>
      );
    },
    code: ({ children }: any) => (
      <code className="bg-surface-secondary px-2 py-1 rounded text-sm font-mono text-brand-primary">
        {children}
      </code>
    ),
    strong: ({ children }: any) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src={urlFor(value).url()}
              alt={value.alt || 'Blog image'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-sm text-text-tertiary mt-3">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }: any) => (
      <pre className="bg-surface-secondary rounded-lg p-6 overflow-x-auto my-8">
        <code className="text-sm font-mono text-text-primary">
          {value.code}
        </code>
      </pre>
    ),
  },
};

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  return (
    <section className="w-full py-12 md:py-16 bg-surface-primary">
      <div className="container-padding max-w-3xl mx-auto prose prose-lg">
        <PortableText value={content} components={components} />
      </div>
    </section>
  );
};

export default BlogContent;
