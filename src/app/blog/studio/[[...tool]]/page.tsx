import { redirect } from 'next/navigation';

export default function StudioPage() {
  // Redirect to home in production
  if (process.env.NODE_ENV === 'production') {
    redirect('/blog');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-primary">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-text-primary mb-4">
          Studio Access
        </h1>
        <p className="text-text-secondary">
          Please access the studio in development mode.
        </p>
      </div>
    </div>
  );
}
