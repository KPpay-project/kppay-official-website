'use client';

import React, { useState, useMemo } from 'react';
import { BlogPost, BlogGrid, Pagination, ViewToggle } from '@/types';
import type { ViewMode } from '@/types';
import { Search } from 'lucide-react';

interface BlogSearchProps {
  posts: BlogPost[];
}

const POSTS_PER_PAGE = 6;

const BlogSearch: React.FC<BlogSearchProps> = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  // Client-side search filtering
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;

    const query = searchQuery.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.title.toLowerCase().includes(query)
    );
  }, [posts, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  // Reset to page 1 when search query changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of blog section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewChange = (mode: ViewMode) => {
    setViewMode(mode);
  };

  return (
    <div className="w-full">
      {/* Search and View Toggle */}
      <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-border-secondary rounded-full focus:outline-none focus:border-brand-primary transition-colors bg-surface-primary"
          />
        </div>

        {/* View Toggle */}
        <ViewToggle viewMode={viewMode} onViewChange={handleViewChange} />
      </div>

      {/* Results Count and Page Info */}
      <div className="flex items-center justify-between mb-6 text-sm">
        <p className="text-text-secondary">
          {searchQuery ? (
            <>
              Found {filteredPosts.length} post
              {filteredPosts.length !== 1 ? 's' : ''}
            </>
          ) : (
            <>
              Showing {startIndex + 1}-
              {Math.min(endIndex, filteredPosts.length)} of{' '}
              {filteredPosts.length} posts
            </>
          )}
        </p>
        <p className="text-text-tertiary">
          Page {currentPage} of {totalPages || 1}
        </p>
      </div>

      {/* Blog Grid */}
      <BlogGrid posts={paginatedPosts} viewMode={viewMode} />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BlogSearch;
