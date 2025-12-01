// src/types/index.ts
// Central types file - import from '@/types' everywhere

// ============================================
// Re-exports for centralized imports
// ============================================

// Layout Components
export { default as Header } from '@/components/layout/Header';
export { default as Footer } from '@/components/layout/Footer';

// Contact Components
export { default as ContactForm } from '@/components/ContactDB/ContactForm';
export { default as ContactInfo } from '@/components/ContactDB/ContactInfo';
export { default as Newsletter } from '@/components/ContactDB/Newsletter';

// Section Components
export { default as HeroSection } from '@/components/sections/Homepage/HeroSection';
export { default as GlobalReachSection } from '@/components/sections/Homepage/GlobalReachSection';
export { default as FeatureShowcaseSection } from '@/components/sections/Homepage/FeatureShowcaseSection';
export { default as WhyChooseKPpay } from '@/components/sections/Homepage/WhyChooseKPpay';
export { default as TestimonialsSection } from '@/components/sections/Homepage/TestimonialsSection';
export { default as PaymentScrollSection } from '@/components/sections/Homepage/PaymentScrollSection';
export { default as SecurePaymentsSection } from '@/components/sections/Homepage/SecurePaymentsSection';
export { default as PartnersSection } from '@/components/sections/Homepage/PartnersSection';
export { default as ServicesSection } from '@/components/sections/Homepage/ServicesSection';
export { default as SolutionsSection } from '@/components/sections/Homepage/SolutionsSection';
export { default as ScrollToTop } from '@/components/ScrollToTop';
export { default as AnimationProvider } from '@/components/AnimationProvider';

// product mega menu - financial services
export { default as DashboardWidgets } from '@/components/sections/FinancialServices/DashboardWidgets';
export { default as CustomReportBuilder } from '@/components/sections/FinancialServices/CustomReportBuilder';
export { default as AdvancedComplianceTools } from '@/components/sections/FinancialServices/AdvancedComplianceTools';
export { default as ReportBuilderGrid } from '@/components/sections/FinancialServices/ReportBuilderGrid';
export { default as ComplianceReadiness } from '@/components/sections/FinancialServices/ComplianceReadiness';
export { default as RegulatoryStandardsAndCerts } from '@/components/sections/FinancialServices/RegulatoryStandardsAndCerts';
export { default as RiskManagementGrid } from '@/components/sections/FinancialServices/RiskManagementGrid';
export { default as FinancialPlanningGrid } from '@/components/sections/FinancialServices/FinancialPlanningGrid';
export { default as AutomatedReportingSuite } from '@/components/sections/FinancialServices/AutomatedReportingSuite';
export { default as IntegrationsGrid } from '@/components/sections/FinancialServices/IntegrationsGrid';
export { default as ReportingFeaturesGrid } from '@/components/sections/FinancialServices/ReportingFeaturesGrid';
export { default as DeliveryMethodsGrid } from '@/components/sections/FinancialServices/DeliveryMethodsGrid';
export { default as IdentityKYCHeroSection } from '@/components/sections/FinancialServices/IdentityKYCHeroSection';
export { default as VerificationFeaturesGrid } from '@/components/sections/FinancialServices/VerificationFeaturesGrid';

// solutions mega menu - payment infrastrucutre
export { default as PaymentGatewayHeroSection } from '@/components/solutions/PaymentInfrastructure/PaymentGateway/PaymentGatewayHeroSection';
export { default as SubscriptionInvoicingHeroSection } from '@/components/solutions/PaymentInfrastructure/Subscriptions/SubscriptionInvoicingHeroSection';
export { default as ConnectPlatformsHeroSection } from '@/components/solutions/PaymentInfrastructure/ConnectPlatforms/ConnectPlatformsHeroSection';
export { default as VirtualCardsHeroSection } from '@/components/solutions/PaymentInfrastructure/VirtualCards/VirtualCardsHeroSection';
export { default as POSTerminalHeroSection } from '@/components/solutions/PaymentInfrastructure/PosTerminal/POSTerminalHeroSection';

// Shared Components
export { default as FAQSection } from '@/components/sections/shared/FAQSection';
export { default as FeatureCard } from '@/components/sections/shared/FeatureCard';
export { default as FeaturedResources } from '@/components/sections/shared/FeaturedResources';
export { default as SubscriptionFeatures } from '@/components/sections/shared/SubscriptionFeatures';
export { default as FinancialToolkit } from '@/components/sections/shared/FinancialToolkit';
export { default as CorporateBankingSuite } from '@/components/sections/shared/CorporateBankingSuite';
export { default as BankingExperience } from '@/components/sections/shared/BankingExperience';
export { default as BusinessAccount } from '@/components/sections/shared/BusinessAccount';
export { default as InvestmentPortfolio } from '@/components/sections/shared/InvestmentPortfolio';
export { default as KPPayLoans } from '@/components/sections/shared/KPPayLoans';
export { default as FlexibleBillingModels } from '@/components/sections/shared/FlexibleBillingModels';
export { default as FinancialPlanningTools } from '@/components/sections/shared/FinancialPlanningTools';
export { default as SavingsInvestmentTools } from '@/components/sections/shared/SavingsInvestmentTools';
export { default as CustomerSuccessStories } from '@/components/sections/shared/CustomerSuccessStories';
export { default as SubscriptionPricing } from '@/components/sections/shared/SubscriptionPricing';

export { default as IntegrationSelector } from '@/components/sections/shared/IntegrationSelector';
export { default as IntegrationCard } from '@/components/sections/shared/IntegrationCard';
export { default as QuickIntegrationSteps } from '@/components/sections/shared/QuickIntegrationSteps';
export { MobileAppCard } from '@/components/sections/shared/MobileAppCard';
export { MobileAppSelector } from '@/components/sections/shared/MobileAppSelector';
export { SDKCard } from '@/components/sections/shared/SDKCard';
export { SDKSelector } from '@/components/sections/shared/SDKSelector';

// AboutUs Page Components
export { default as AboutHeroSection } from '@/components/sections/AboutUsPage/AboutHeroSection';
export { default as DiscoverSection } from '@/components/sections/AboutUsPage/DiscoverSection';
export { default as HiringSection } from '@/components/sections/AboutUsPage/HiringSection';

// Pricing Components
export { default as IndividualPricingHero } from '@/components/sections/Individual/IndividualPricingHero';
export { default as EnterprisePricingHero } from '@/components/sections/Enterprise/EnterprisePricingHero';

export { default as IndividualPricingCards } from '@/components/sections/Individual/IndividualPricingCards';
export { default as ModernBankingFeatures } from '@/components/sections/Individual/ModernBankingFeatures';
export { default as EnterprisePricingCards } from '@/components/sections/Enterprise/EnterprisePricingCards';

export { default as ReusableCTA } from '@/components/sections/shared/ReusableCTA';
export { default as BenefitsGrid } from '@/components/sections/shared/BenefitsGrid';
export { default as CTABox } from '@/components/sections/shared/CTABox';
export { default as TrustStats } from '@/components/sections/shared/TrustStats';
export { default as WhyChooseEnterprise } from '@/components/sections/Enterprise/WhyChooseEnterprise';
export { default as BusinessBankingSuite } from '@/components/sections/Enterprise/BusinessBankingSuite';

// Resources and Documentation
export { default as ResourcesHeroSection } from '@/components/sections/Resources/ResourcesHeroSection';

// Service Components
export { ServiceHero } from '@/components/services/ServiceHero';
export { ServiceFeatures } from '@/components/services/ServiceFeatures';
export { LoanCards } from '@/components/services/LoanCards';

// UI Components
export { Button, buttonVariants } from '@/components/ui/Button';

// Config
export { getLayoutConfig } from '@/config/layout.config';
export { default as images, getOptimizedImage } from '@/config/images';
export { servicesData } from '@/config/servicesData';

// Utils
export { cn } from '@/lib/utils';

// ============================================
// Layout Types
// ============================================
export type HeaderVariant = 'light' | 'dark';
export type FooterType = 'footer1' | 'footer2';

export interface LayoutConfig {
  header: HeaderVariant;
  footer: FooterType;
}

export interface HeaderProps {
  variant?: HeaderVariant;
}

// ============================================
// Navigation Types
// ============================================
export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface MegaMenuColumn {
  title: string;
  description: string;
  links: NavLink[];
}

// ============================================
// Page Types
// ============================================
export interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// ============================================
// Service Types
// ============================================
export interface ServiceHeroData {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  imageSize?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface ServiceFeature {
  icon?: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}

export interface ServiceFeaturesData {
  title: string;
  features: ServiceFeature[];
  variant?: 'primary' | 'blue' | 'gray';
  boxOpacity?: 10 | 15 | 20 | 30 | 40 | 50;
  customColors?: {
    sectionTitle?: string;
    featureTitle?: string;
    description?: string;
    checkIcon?: string;
    listItem?: string;
  };
}

export interface LoanCardData {
  title: string;
  description: string;
  rateRange: string;
  amountRange: string;
  termRange: string;
  features: string[];
}

export interface LoanCardsData {
  title: string;
  loans: LoanCardData[];
}

export interface ServicePageData {
  hero: ServiceHeroData;
  features?: ServiceFeaturesData;
  loanCards?: LoanCardsData;
}

// ============================================
// Integration Selector Types
// ============================================
export interface IntegrationOption {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  timeToIntegrate: string;
  complexity: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

export interface IntegrationSelectorProps {
  heading?: string;
  options: IntegrationOption[];
  className?: string;
}

export interface IntegrationCardProps {
  option: IntegrationOption;
  className?: string;
}

// Mobile App Types
export interface UseCaseTag {
  label: string;
}

export interface MobileAppOption {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  useCases: UseCaseTag[];
  features: string[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

export interface MobileAppSelectorProps {
  heading?: string;
  options: MobileAppOption[];
  className?: string;
}

// SDK Types
export interface SDKOption {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

export interface SDKSelectorProps {
  heading?: string;
  options: SDKOption[];
  className?: string;
}
