import { ROUTES } from '@/types';
import { Button, ContactForm, ContactInfo, Newsletter } from '@/types';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Your Company Name',
  description: "Get in touch with our team. We're here to help.",
};

export default function ContactPage() {
  return (
    <main className="page-transition">
      <div className="min-h-screen px-6">
        {/* Hero Section - Optional */}
        <section className="bg-gradient-feature text-text-main-white">
          <div className="container-padding max-w-4xl mx-auto text-center">
            <h1 className="heading-bebas text-5xl md:text-6xl mb-4">
              Let&apos;s Talk
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Have questions? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="container-padding pb-8 md:pb-12 bg-surface-primary">
          <div className="max-w-7xl mx-auto">
            <ContactForm />
          </div>
        </section>

        {/* Divider Line */}
        <div className="border-t border-border-secondary"></div>

        {/* Contact Info Section */}
        <section className="container-padding py-16 md:py-24 bg-surface-secondary">
          <div className="max-w-7xl mx-auto">
            <ContactInfo />
          </div>
        </section>

        {/* CTA Section */}
        <div className="rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="heading-bebas-light text-lg sm:text-xl text-text-main-dark mb-1">
              Send money and receive money super fast
            </h3>
            <p className="text-sm text-text-secondary">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button variant="outlined" size="sm" href={ROUTES.ABOUT}>
              Learn more
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="primary" size="sm" href={ROUTES.SIGNUP}>
              Sign Up
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Newsletter Section */}
        <section className="container-padding py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <Newsletter />
          </div>
        </section>
      </div>
    </main>
  );
}
