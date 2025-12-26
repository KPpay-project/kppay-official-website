import React from 'react';

interface CategoryBadgeProps {
  title: string;
  color?: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  title,
  color = '#1560FC',
}) => {
  return (
    <span
      className="text-xs font-bold px-3 py-1 rounded-md border transition-all hover:scale-105"
      style={{
        backgroundColor: `${color}15`, // ~8% opacity
        borderColor: `${color}40`, // ~25% opacity
        color: color,
      }}
    >
      {title}
    </span>
  );
};

export default CategoryBadge;
