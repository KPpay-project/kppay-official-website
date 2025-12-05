#!/bin/bash

declare -A routes=(
  ["{ROUTES.ABOUT}"]='"/about"'
  ["{ROUTES.INDIVIDUAL}"]='"/individual"'
  ["{ROUTES.ENTERPRISE}"]='"/enterprise"'
  ["{ROUTES.FAQS}"]='"/faqs"'
  ["{ROUTES.RESOURCES}"]='"/resources-and-documentation"'
  ["{ROUTES.BLOG}"]='"/blog"'
  ["{ROUTES.CONTACT}"]='"/contact"'
  ["{ROUTES.CAREERS}"]='"/careers"'
  ["{ROUTES.NEWSROOM}"]='"/newsroom"'
  ["{ROUTES.INVESTOR_RELATIONS}"]='"/investor-relations"'
  ["{ROUTES.BANKING_BUSINESS_ACCOUNTS}"]='"/banking/business-accounts"'
  ["{ROUTES.BANKING_LOANS_CREDIT}"]='"/banking/loans-credit"'
  ["{ROUTES.BANKING_PERSONAL_BANKING}"]='"/banking/personal-banking"'
  ["{ROUTES.BANKING_SAVINGS_INVESTMENTS}"]='"/banking/savings-investments"'
  ["{ROUTES.PAYMENTS_MOBILE}"]='"/payments/mobile-payments"'
  ["{ROUTES.PAYMENTS_ONLINE}"]='"/payments/online-payments"'
  ["{ROUTES.PAYMENTS_POS}"]='"/payments/point-of-sale"'
  ["{ROUTES.PAYMENTS_RECURRING}"]='"/payments/recurring-billing"'
  ["{ROUTES.PAYMENT_INFRA_CONNECT}"]='"/payment-infrastructure/connect-platforms"'
  ["{ROUTES.PAYMENT_INFRA_GATEWAY}"]='"/payment-infrastructure/payment-gateway"'
  ["{ROUTES.PAYMENT_INFRA_POS_TERMINAL}"]='"/payment-infrastructure/pos-terminal"'
  ["{ROUTES.PAYMENT_INFRA_SUBSCRIPTIONS}"]='"/payment-infrastructure/subscriptions"'
  ["{ROUTES.PAYMENT_INFRA_VIRTUAL_CARDS}"]='"/payment-infrastructure/virtual-cards"'
  ["{ROUTES.FINANCIAL_ANALYTICS}"]='"/financial-services/analytics"'
  ["{ROUTES.FINANCIAL_COMPLIANCE}"]='"/financial-services/compliance"'
  ["{ROUTES.FINANCIAL_CONNECTIONS}"]='"/financial-services/financial-connections"'
  ["{ROUTES.FINANCIAL_IDENTITY_KYC}"]='"/financial-services/identity-kyc"'
  ["{ROUTES.FINANCIAL_REPORTING}"]='"/financial-services/reporting"'
  ["{ROUTES.DEV_API_DOCS}"]='"/developer-enterprise/api-documentation"'
  ["{ROUTES.DEV_ENTERPRISE_INFRA}"]='"/developer-enterprise/enterprise-infrastructure"'
  ["{ROUTES.DEV_PARTNERS}"]='"/developer-enterprise/partners-program"'
  ["{ROUTES.DEV_TRUST_SECURITY}"]='"/developer-enterprise/trust-security"'
  ["{ROUTES.LEGAL_AML}"]='"/legal/aml"'
  ["{ROUTES.LEGAL_ANTI_CORRUPTION}"]='"/legal/anti-corruption"'
  ["{ROUTES.LEGAL_COOKIE_POLICY}"]='"/legal/cookie-policy"'
  ["{ROUTES.LEGAL_GIFT_POLICY}"]='"/legal/gift-policy"'
  ["{ROUTES.LEGAL_INTELLECTUAL_PROPERTY}"]='"/legal/intellectual-property"'
  ["{ROUTES.LEGAL_PRIVACY}"]='"/legal/privacy"'
  ["{ROUTES.LEGAL_TERMS}"]='"/legal/terms"'
)

for constant in "${!routes[@]}"; do
  original="${routes[$constant]}"
  find src/app src/components -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \) -exec sed -i "s|$constant|$original|g" {} +
done

echo "✅ All routes restored!"