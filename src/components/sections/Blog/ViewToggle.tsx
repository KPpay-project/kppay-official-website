'use client';

import React from 'react';
import { Grid3x3, List } from 'lucide-react';

export type ViewMode = 'grid' | 'list';

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewChange: (mode: ViewMode) => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, onViewChange }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-text-tertiary font-medium hidden sm:inline">
        View:
      </span>
      <div className="flex items-center bg-surface-secondary rounded-lg p-1 border border-border-primary">
        <button
          onClick={() => onViewChange('grid')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all ${
            viewMode === 'grid'
              ? 'bg-brand-primary text-white shadow-sm'
              : 'text-text-secondary hover:text-text-primary'
          }`}
          aria-label="Grid view"
          aria-pressed={viewMode === 'grid'}
        >
          <Grid3x3 className="w-4 h-4" />
          <span className="text-sm font-medium hidden sm:inline">Grid</span>
        </button>
        <button
          onClick={() => onViewChange('list')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all ${
            viewMode === 'list'
              ? 'bg-brand-primary text-white shadow-sm'
              : 'text-text-secondary hover:text-text-primary'
          }`}
          aria-label="List view"
          aria-pressed={viewMode === 'list'}
        >
          <List className="w-4 h-4" />
          <span className="text-sm font-medium hidden sm:inline">List</span>
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;
