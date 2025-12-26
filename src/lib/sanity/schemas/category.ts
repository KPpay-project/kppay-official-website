import { defineType } from 'sanity';
import { Tag } from 'lucide-react';

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: Tag,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(50),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'color',
      title: 'Badge Color',
      type: 'string',
      description: 'Hex color for category badge (e.g., #1560FC)',
      validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6})$/),
      initialValue: '#1560FC',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
});
