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

// SEO Metadata
const siteConfig = {
  name: 'KPPAY',
  title: 'KPPAY - The Safest and Most Reliable Money Transaction Platform',
  description:
    'Send money globally, receive payments, deposit and request funds, invest and exchange across multiple currencies with low fees, speed and safety.',
  url: 'https://kppay.com',
  ogImage: images.logos.primary,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const layoutConfig = getLayoutConfig(pathname);

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
        {
          threshold: 0.1,
        }
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
            // Skip if it's inside header/footer or is an SVG child or icon
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
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={siteConfig.ogImage} />
        <meta property="og:url" content={siteConfig.url} />
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
