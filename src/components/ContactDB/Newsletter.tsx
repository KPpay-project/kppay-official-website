'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/types';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: '🎉 Successfully subscribed!',
        });
        setEmail('');
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to subscribe. Please try again.',
        });
      }
    } catch (error) {
      console.error('Newsletter error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      <h2 className="heading-bebas text-3xl md:text-4xl text-text-main-dark mb-3">
        Sign up for our newsletter
      </h2>
      <p className="text-text-secondary text-base mb-8">
        Be the first to know about releases and industry news and insights.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 bg-surface-primary border border-border-secondary rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-interactive-primary focus:border-transparent transition-all"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 cursor-pointer bg-interactive-primary text-text-main-white font-medium rounded-lg hover:bg-interactive-primary-hover focus:outline-none focus:ring-2 focus:ring-interactive-primary focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>

        {/* Success/Error Message */}
        {submitStatus.type && (
          <div
            className={`p-3 rounded-lg text-sm max-w-md mx-auto animate-fadeIn ${
              submitStatus.type === 'success'
                ? 'bg-success-light text-success'
                : 'bg-error-light text-error'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <p className="text-sm text-text-secondary">
          We care about your data in our{' '}
          <Link
            href={ROUTES.LEGAL_PRIVACY}
            className="text-interactive-primary hover:text-interactive-primary-hover underline transition-colors"
          >
            privacy policy
          </Link>
          .
        </p>
      </form>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
