'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost, BlogCard, BlogListCard } from '@/types';
import type { ViewMode } from '@/types';

interface BlogGridProps {
  posts: BlogPost[];
  viewMode?: ViewMode;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const BlogGrid: React.FC<BlogGridProps> = ({ posts, viewMode = 'grid' }) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-text-secondary text-lg">
          No blog posts found. Check back soon for new content!
        </p>
      </div>
    );
  }

  if (viewMode === 'list') {
    return (
      <motion.div
        key={posts[0]?._id || 'list-empty'}
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6"
      >
        {posts.map((post) => (
          <motion.div key={post._id} variants={item}>
            <BlogListCard post={post} />
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      key={posts[0]?._id || 'grid-empty'}
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {posts.map((post) => (
        <motion.div key={post._id} variants={item}>
          <BlogCard post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BlogGrid;
