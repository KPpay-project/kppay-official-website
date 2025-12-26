'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../../sanity.config';
import { redirect } from 'next/navigation';

export default function StudioPage() {
  // Only redirect in production build
  if (process.env.NODE_ENV === 'production') {
    redirect('/blog');
  }

  // Render studio in development
  return <NextStudio config={config} />;
}
