// src/config/layout.config.ts
export type HeaderVariant = 'light' | 'dark';
// export type FooterVariant = 'footer';

export interface LayoutConfig {
  header: HeaderVariant;
  // footer: FooterVariant;
}

// Default configuration - Footer2 for all pages except homepage
const defaultLayout: LayoutConfig = {
  header: 'light',
  // footer: 'footer2',
};

export const routeLayouts: Record<string, LayoutConfig> = {
  // Homepage - ONLY page with Footer1
  '/': {
    header: 'dark',
  },

  // Payment routes
  '/payments/online': {
    header: 'light',
  },
  '/payments/point-of-sale': {
    header: 'light',
  },
  '/payments/mobile-payments': {
    header: 'light',
  },
  '/payments/recurring-billing': {
    header: 'light',
  },

  // Banking routes - using dark header
  '/banking/business-accounts': {
    header: 'light',
  },
  '/banking/personal-banking': {
    header: 'light',
  },
  '/banking/savings-investments': {
    header: 'light',
  },
  '/banking/loans-credit': {
    header: 'light',
  },

  // Financial services routes - using dark header
  '/financial-services/analytics': {
    header: 'light',
  },
  '/financial-services/reporting': {
    header: 'light',
  },
  '/financial-services/tax-services': {
    header: 'light',
  },
  '/financial-services/compliance': {
    header: 'light',
  },
  '/financial-services/identity-kyc': {
    header: 'dark',
  },

  // Payment Infrastructure routes
  '/payment-infrastructure/payment-gateway': {
    header: 'dark',
  },

  '/payment-infrastructure/subscriptions': {
    header: 'dark',
  },

  '/payment-infrastructure/connect-platforms': {
    header: 'dark',
  },

  '/payment-infrastructure/virtual-cards': {
    header: 'dark',
  },

  '/payment-infrastructure/pos-terminal': {
    header: 'dark',
  },

  // About page
  '/about': {
    header: 'dark',
  },

  // Pricing page
  '/individual': {
    header: 'dark',
  },

  // Enterprise page
  '/enterprise': {
    header: 'dark',
  },

  // Resources page
  '/resources-and-documentation': {
    header: 'dark',
  },
};

/**
 * Get layout configuration for a given pathname
 * Falls back to default if route not found
 */
export function getLayoutConfig(pathname: string): LayoutConfig {
  // Exact match
  if (routeLayouts[pathname]) {
    return routeLayouts[pathname];
  }

  // Check parent routes (e.g., /payments/something-new should use /payments config)
  const segments = pathname.split('/').filter(Boolean);

  // Try matching parent routes from most specific to least specific
  for (let i = segments.length; i > 0; i--) {
    const parentPath = '/' + segments.slice(0, i).join('/');
    if (routeLayouts[parentPath]) {
      return routeLayouts[parentPath];
    }
  }

  // Default fallback - Footer2 for all other pages
  return defaultLayout;
}
