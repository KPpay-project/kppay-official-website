// src/config/layout.config.ts
export type HeaderVariant = 'light' | 'dark';
export type FooterVariant = 'light' | 'dark';

export interface LayoutConfig {
  header: HeaderVariant;
  footer: FooterVariant;
}

// Default configuration
const defaultLayout: LayoutConfig = {
  header: 'light',
  footer: 'dark',
};

export const routeLayouts: Record<string, LayoutConfig> = {
  // Homepage - dark header, dark footer
  '/': {
    header: 'dark',
    footer: 'dark',
  },

  '/careers': {
    header: 'dark',
    footer: 'dark',
  },

  // Payment routes - light header, dark footer
  '/payments/online': {
    header: 'light',
    footer: 'dark',
  },
  '/payments/point-of-sale': {
    header: 'light',
    footer: 'dark',
  },
  '/payments/mobile-payments': {
    header: 'light',
    footer: 'dark',
  },
  '/payments/recurring-billing': {
    header: 'light',
    footer: 'dark',
  },

  // Banking routes - light header, dark footer
  '/banking/business-accounts': {
    header: 'light',
    footer: 'dark',
  },
  '/banking/personal-banking': {
    header: 'light',
    footer: 'dark',
  },
  '/banking/savings-investments': {
    header: 'light',
    footer: 'dark',
  },
  '/banking/loans-credit': {
    header: 'light',
    footer: 'dark',
  },

  // Financial services routes - light header, dark footer
  '/financial-services/analytics': {
    header: 'light',
    footer: 'dark',
  },
  '/financial-services/reporting': {
    header: 'light',
    footer: 'dark',
  },
  '/financial-services/tax-services': {
    header: 'light',
    footer: 'dark',
  },
  '/financial-services/compliance': {
    header: 'light',
    footer: 'dark',
  },
  '/financial-services/identity-kyc': {
    header: 'dark',
    footer: 'dark',
  },
  '/financial-services/financial-connections': {
    header: 'dark',
    footer: 'dark',
  },

  // Payment Infrastructure routes - dark header, dark footer
  '/payment-infrastructure/payment-gateway': {
    header: 'dark',
    footer: 'dark',
  },
  '/payment-infrastructure/subscriptions': {
    header: 'dark',
    footer: 'dark',
  },
  '/payment-infrastructure/connect-platforms': {
    header: 'dark',
    footer: 'dark',
  },
  '/payment-infrastructure/virtual-cards': {
    header: 'dark',
    footer: 'dark',
  },
  '/payment-infrastructure/pos-terminal': {
    header: 'dark',
    footer: 'dark',
  },

  // Developer and enterprise routes - dark header, LIGHT footer
  '/developer-enterprise/api-documentation': {
    header: 'dark',
    footer: 'dark',
  },
  '/developer-enterprise/enterprise-infrastructure': {
    header: 'dark',
    footer: 'light',
  },
  '/developer-enterprise/partners-program': {
    header: 'dark',
    footer: 'light',
  },
  '/developer-enterprise/trust-security': {
    header: 'dark',
    footer: 'light',
  },

  // Other pages - dark header, dark footer
  '/about': {
    header: 'dark',
    footer: 'dark',
  },
  '/individual': {
    header: 'dark',
    footer: 'dark',
  },
  '/enterprise': {
    header: 'dark',
    footer: 'dark',
  },
  '/resources-and-documentation': {
    header: 'dark',
    footer: 'dark',
  },
  '/blog': {
    header: 'light',
    footer: 'dark',
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

  // Default fallback
  return defaultLayout;
}
