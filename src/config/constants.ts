// src/config/constants.ts

export const ROUTES = {
  // External auth routes
  LOGIN: 'https://dev.d32yml5hzs7qtc.amplifyapp.com/onboarding/login?user=user',
  SIGNUP: 'https://dev.d32yml5hzs7qtc.amplifyapp.com/onboarding/create-account',

  // Internal routes
  HOME: '/',
  ABOUT: '/about',
  INDIVIDUAL: '/individual',
  ENTERPRISE: '/enterprise',
  FAQS: '/faqs',
  RESOURCES: '/resources-and-documentation',
  BLOG: '/blog',
  CONTACT: '/contact',
  CAREERS: '/careers',
  NEWSROOM: '/newsroom',
  INVESTOR_RELATIONS: '/investor-relations',

  // Banking routes
  BANKING_BUSINESS_ACCOUNTS: '/banking/business-accounts',
  BANKING_LOANS_CREDIT: '/banking/loans-credit',
  BANKING_PERSONAL_BANKING: '/banking/personal-banking',
  BANKING_SAVINGS_INVESTMENTS: '/banking/savings-investments',

  // Payment routes
  PAYMENTS_MOBILE: '/payments/mobile-payments',
  PAYMENTS_ONLINE: '/payments/online-payments',
  PAYMENTS_POS: '/payments/point-of-sale',
  PAYMENTS_RECURRING: '/payments/recurring-billing',

  // Payment Infrastructure routes
  PAYMENT_INFRA_CONNECT: '/payment-infrastructure/connect-platforms',
  PAYMENT_INFRA_GATEWAY: '/payment-infrastructure/payment-gateway',
  PAYMENT_INFRA_POS_TERMINAL: '/payment-infrastructure/pos-terminal',
  PAYMENT_INFRA_SUBSCRIPTIONS: '/payment-infrastructure/subscriptions',
  PAYMENT_INFRA_VIRTUAL_CARDS: '/payment-infrastructure/virtual-cards',

  // Financial Services routes
  FINANCIAL_ANALYTICS: '/financial-services/analytics',
  FINANCIAL_COMPLIANCE: '/financial-services/compliance',
  FINANCIAL_CONNECTIONS: '/financial-services/financial-connections',
  FINANCIAL_IDENTITY_KYC: '/financial-services/identity-kyc',
  FINANCIAL_REPORTING: '/financial-services/reporting',

  // Developer/Enterprise routes
  DEV_API_DOCS: '/developer-enterprise/api-documentation',
  DEV_ENTERPRISE_INFRA: '/developer-enterprise/enterprise-infrastructure',
  DEV_PARTNERS: '/developer-enterprise/partners-program',
  DEV_TRUST_SECURITY: '/developer-enterprise/trust-security',

  // Legal routes
  LEGAL_AML: '/legal/aml',
  LEGAL_ANTI_CORRUPTION: '/legal/anti-corruption',
  LEGAL_COOKIE_POLICY: '/legal/cookie-policy',
  LEGAL_GIFT_POLICY: '/legal/gift-policy',
  LEGAL_INTELLECTUAL_PROPERTY: '/legal/intellectual-property',
  LEGAL_PRIVACY: '/legal/privacy',
  LEGAL_TERMS: '/legal/terms',
} as const;
