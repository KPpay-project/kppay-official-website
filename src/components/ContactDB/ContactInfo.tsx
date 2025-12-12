'use client';

import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <p className="text-interactive-primary text-sm font-medium mb-2">
          Contact us
        </p>
        <h2 className="heading-bebas-light text-4xl md:text-5xl text-text-secondary mb-3">
          Come say hello at our office HQ.
        </h2>
        <p className="text-text-secondary text-base">
          Our friendly team is always here to chat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Email */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-surface-inverse-dark-bg flex items-center justify-center mb-4">
            <Mail className="w-6 h-6 text-interactive-primary" />
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Email
          </h3>
          <p className="text-sm text-text-secondary mb-3">
            Our friendly team is here to help.
          </p>
          <a
            href="mailto:contact@kppay.fr"
            className="text-interactive-primary hover:text-interactive-primary-hover font-medium transition-colors"
          >
            contact@kppay.fr
          </a>
        </div>

        {/* Office */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-surface-inverse-dark-bg flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6 text-interactive-primary" />
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Office
          </h3>
          <p className="text-sm text-text-secondary mb-3">
            Come say hello at our office HQ.
          </p>
          <address className="not-italic">
            <a
              href="https://maps.google.com/?q=72+Rue+Faubourg+Saint+Honoré+75008+Paris+France"
              target="_blank"
              rel="noopener noreferrer"
              className="text-interactive-primary hover:text-interactive-primary-hover font-medium transition-colors"
            >
              72 Rue Faubourg Saint Honoré
              <br />
              75008 Paris - France
            </a>
          </address>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-surface-inverse-dark-bg flex items-center justify-center mb-4">
            <Phone className="w-6 h-6 text-interactive-primary" />
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Phone
          </h3>
          <p className="text-sm text-text-secondary mb-3">
            Mon-Fri from 8am to 5pm.
          </p>
          <a
            href="tel:+15550000000"
            className="text-interactive-primary hover:text-interactive-primary-hover font-medium transition-colors"
          >
            +1 (555) 000-0000
          </a>
        </div>
      </div>
    </div>
  );
}
