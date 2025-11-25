// src/app/layout.tsx
'use client';

import { Inter, Bebas_Neue } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { Header, getLayoutConfig, images, Footer, ScrollToTop } from '@/types';
import './globals.css';
import { useEffect } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

// SEO Configuration
const siteConfig = {
  name: 'KPPAY',
  baseTitle: 'KPPAY',
  separator: ' | ',
  description:
    'Send money globally, receive payments, deposit and request funds, invest and exchange across multiple currencies with low fees, speed and safety.',
  url: 'https://kppay.com',
  ogImage: images.logos.primary,
};

// Page-specific SEO metadata - Simple and straight to the point
const pageSEO: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Secure Money Transfer & Payment Solutions',
    description:
      'Send money globally, receive payments, and manage finances with low fees, speed and security.',
  },
  '/about': {
    title: 'About Us',
    description:
      'Learn about KPPAY mission to provide secure, fast, and affordable financial solutions worldwide.',
  },
  '/contact': {
    title: 'Contact Us',
    description:
      "Get in touch with KPPAY support team. We're here to help with your financial needs.",
  },
  '/enterprise': {
    title: 'Enterprise Solutions',
    description:
      'Scalable payment and financial solutions built for large organizations and enterprises.',
  },
  '/individual': {
    title: 'Personal Banking',
    description:
      'Simple, secure financial services designed for individuals and families.',
  },
  '/product': {
    title: 'Our Products',
    description:
      'Explore KPPAY suite of financial products and payment solutions.',
  },
  '/faqs': {
    title: 'Frequently Asked Questions',
    description:
      'Find answers to common questions about KPPAY services, fees, and security.',
  },
  '/resources-and-documentation': {
    title: 'Resources & Documentation',
    description:
      'Access guides, API documentation, and resources to help you get started with KPPAY.',
  },

  // Banking
  '/banking/personal-banking': {
    title: 'Personal Banking',
    description:
      'Checking accounts, savings, and everyday banking services for individuals.',
  },
  '/banking/business-accounts': {
    title: 'Business Accounts',
    description:
      'Business banking solutions with powerful tools for managing company finances.',
  },
  '/banking/savings-investments': {
    title: 'Savings & Investments',
    description:
      'Grow your wealth with competitive savings rates and investment opportunities.',
  },
  '/banking/loans-credit': {
    title: 'Loans & Credit',
    description:
      'Flexible loan options and credit solutions for personal and business needs.',
  },

  // Payments
  '/payments/online-payments': {
    title: 'Online Payments',
    description:
      'Accept secure online payments with our fast and reliable payment gateway.',
  },
  '/payments/mobile-payments': {
    title: 'Mobile Payments',
    description:
      'Enable seamless mobile payments for your customers on any device.',
  },
  '/payments/point-of-sale': {
    title: 'Point of Sale (POS)',
    description:
      'Modern POS solutions for in-person payments at retail locations.',
  },
  '/payments/recurring-billing': {
    title: 'Recurring Billing',
    description:
      'Automate subscription payments and recurring billing for your business.',
  },

  // Financial Services
  '/financial-services/analytics': {
    title: 'Financial Analytics',
    description:
      'Powerful analytics and insights to understand your financial performance.',
  },
  '/financial-services/reporting': {
    title: 'Financial Reporting',
    description:
      'Comprehensive reporting tools for tracking transactions and financial data.',
  },
  '/financial-services/compliance': {
    title: 'Compliance Management',
    description:
      'Stay compliant with built-in tools for regulatory requirements and audits.',
  },
  '/financial-services/tax-services': {
    title: 'Tax Services',
    description:
      'Simplify tax management with automated calculations and filing support.',
  },

  // Solutions
  '/solutions/payment-gateway': {
    title: 'Payment Gateway',
    description:
      'Secure payment processing infrastructure for online and mobile transactions.',
  },
  '/solutions/api-documentation': {
    title: 'API Documentation',
    description:
      'Complete API reference and integration guides for developers.',
  },
  '/solutions/pos-terminal': {
    title: 'POS Terminal',
    description:
      'Hardware and software solutions for accepting in-person payments.',
  },
  '/solutions/virtual-cards': {
    title: 'Virtual Cards',
    description:
      'Issue virtual debit and credit cards for secure online spending.',
  },
  '/solutions/subscriptions': {
    title: 'Subscription Management',
    description:
      'Tools to manage recurring revenue and subscription-based billing.',
  },
  '/solutions/fraud-shield': {
    title: 'Fraud Protection',
    description:
      'Advanced fraud detection and prevention to protect your transactions.',
  },
  '/solutions/identity-kyc': {
    title: 'Identity Verification (KYC)',
    description:
      'Automated identity verification and Know Your Customer (KYC) compliance.',
  },
  '/solutions/connect-platforms': {
    title: 'Connect Platforms',
    description:
      'Build multi-party payment platforms and marketplaces with ease.',
  },
  '/solutions/treasury-accounts': {
    title: 'Treasury Accounts',
    description:
      'High-yield business accounts for managing corporate cash and reserves.',
  },
  '/solutions/tax-automation': {
    title: 'Tax Automation',
    description: 'Automate sales tax calculation, collection, and remittance.',
  },
  '/solutions/financial-connections': {
    title: 'Financial Connections',
    description:
      'Link bank accounts and financial data securely with open banking.',
  },
  '/solutions/enterprise-infrastructure': {
    title: 'Enterprise Infrastructure',
    description:
      'Scalable financial infrastructure built for enterprise-grade performance.',
  },
  '/solutions/trust-security': {
    title: 'Trust & Security',
    description:
      'Bank-level security and compliance to protect your financial data.',
  },
  '/solutions/partners-program': {
    title: 'Partners Program',
    description:
      'Join our partner ecosystem and grow your business with KPPAY.',
  },

  // Legal
  '/legal/terms': {
    title: 'Terms of Service',
    description:
      'Read our terms of service and user agreement for using KPPAY platform.',
  },
  '/legal/privacy': {
    title: 'Privacy Policy',
    description:
      'Learn how KPPAY protects your personal information and maintains your privacy.',
  },
  '/legal/cookie-policy': {
    title: 'Cookie Policy',
    description:
      'Understand how we use cookies to improve your experience on KPPAY.',
  },
  '/legal/aml': {
    title: 'Anti-Money Laundering (AML)',
    description:
      'Our commitment to preventing money laundering and financial crime.',
  },
  '/legal/anti-corruption': {
    title: 'Anti-Corruption Policy',
    description:
      'KPPAY stance on anti-corruption and ethical business practices.',
  },
  '/legal/intellectual-property': {
    title: 'Intellectual Property',
    description:
      'Information about KPPAY intellectual property rights and trademarks.',
  },
  '/legal/gift-policy': {
    title: 'Gift Policy',
    description: 'Our policy on gifts, entertainment, and business courtesies.',
  },
};

// Generate page title from pathname
const getPageTitle = (pathname: string): string => {
  if (pageSEO[pathname]) {
    return `${pageSEO[pathname].title}${siteConfig.separator}${siteConfig.baseTitle}`;
  }

  // Generate title from pathname for dynamic/unlisted pages
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return `${siteConfig.baseTitle} - Secure Money Transfer & Payment Solutions`;
  }

  const pageTitle = segments
    .map((segment) => {
      return segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    })
    .join(' - ');

  return `${pageTitle}${siteConfig.separator}${siteConfig.baseTitle}`;
};

// Get page description
const getPageDescription = (pathname: string): string => {
  return pageSEO[pathname]?.description || siteConfig.description;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const layoutConfig = getLayoutConfig(pathname);

  // Dynamic SEO based on current page
  const pageTitle = getPageTitle(pathname);
  const pageDescription = getPageDescription(pathname);
  const pageUrl = `${siteConfig.url}${pathname}`;

  useEffect(() => {
    // Update document title dynamically
    document.title = pageTitle;

    // Update meta tags dynamically
    const updateMetaTag = (selector: string, content: string) => {
      let meta = document.querySelector(selector);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        const [attr, value] = selector.replace(/\[|\]/g, '').split('=');
        meta.setAttribute(attr, value.replace(/"/g, ''));
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateMetaTag('meta[name="description"]', pageDescription);
    updateMetaTag('meta[property="og:title"]', pageTitle);
    updateMetaTag('meta[property="og:description"]', pageDescription);
    updateMetaTag('meta[property="og:url"]', pageUrl);
    updateMetaTag('meta[property="og:image"]', siteConfig.ogImage);
    updateMetaTag('meta[name="twitter:title"]', pageTitle);
    updateMetaTag('meta[name="twitter:description"]', pageDescription);
    updateMetaTag('meta[name="twitter:image"]', siteConfig.ogImage);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', pageUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', pageUrl);
      document.head.appendChild(canonical);
    }
  }, [pathname, pageTitle, pageDescription, pageUrl]);

  useEffect(() => {
    // Disable smooth scrolling during route change
    document.documentElement.setAttribute('data-scroll-disabled', 'true');

    // Instant scroll to top on route change without animation
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Force scroll position before any rendering
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Re-enable smooth scrolling after a brief delay
    setTimeout(() => {
      document.documentElement.removeAttribute('data-scroll-disabled');
    }, 50);

    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            }
          });
        },
        { threshold: 0.1 }
      );

      // Specific selectors for elements that should animate
      const animatableSelectors = [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'button',
        'a:not(header a):not(footer a)',
        'div[class*="card"]',
        'div[class*="Card"]',
        '[class*="grid"] > div',
        '[class*="flex"] > div:not(svg):not([class*="icon"])',
        'input',
        'textarea',
        'label',
        'span:not([class*="icon"]):not(svg span)',
        'img:not(header img):not(footer img)',
      ];

      const main = document.querySelector('main');
      if (main) {
        animatableSelectors.forEach((selector) => {
          const elements = main.querySelectorAll(selector);
          elements.forEach((el) => {
            const tagName = el.tagName.toLowerCase();
            if (
              !el.closest('header') &&
              !el.closest('footer') &&
              tagName !== 'svg' &&
              tagName !== 'path' &&
              !el.closest('svg') &&
              !el.classList.contains('lucide') &&
              !el.querySelector('svg')
            ) {
              el.classList.add('fade-in');

              // Immediately show elements already in viewport (fixes hot-reload)
              const rect = el.getBoundingClientRect();
              const isInViewport =
                rect.top < window.innerHeight && rect.bottom > 0;

              if (isInViewport) {
                el.classList.add('show');
              }

              observer.observe(el);
            }
          });
        });
      }

      return () => observer.disconnect();
    }, 100);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={siteConfig.ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={siteConfig.ogImage} />
        <link rel="canonical" href={pageUrl} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${bebasNeue.variable} ${inter.className}`}
      >
        <div className="min-h-screen flex flex-col">
          <Header variant={layoutConfig.header} />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
