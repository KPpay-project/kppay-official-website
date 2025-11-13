// config/images.ts

// CDN Base URL
const CDN_BASE_URL =
  process.env.NEXT_PUBLIC_CDN_URL || 'https://res.cloudinary.com/dfwty72r9';

export const images = {
  // Logos
  logos: {
    primary: `${CDN_BASE_URL}/image/upload/v1761604811/kppaylogomain_raaxqp.png`,
    white: `${CDN_BASE_URL}/image/upload/v1761604811/kppaylogomaintransparent_vzwak0.png`,
    icon: `${CDN_BASE_URL}/logos/logo-icon.svg`,
  },

  // Hero section images
  hero: {
    gradient: `${CDN_BASE_URL}/image/upload/v1761381285/mainGradient_ts84qy.png`,
    main: `${CDN_BASE_URL}/image/upload/v1761388414/heroImage_tj2zy6.png`,
    people1: `${CDN_BASE_URL}/image/upload/v1761760335/people1_zoafif.png`,
    people2: `${CDN_BASE_URL}/image/upload/v1761760334/people2_geasub.png`,
    people3: `${CDN_BASE_URL}/image/upload/v1761760335/people3_scnbne.png`,
    people4: `${CDN_BASE_URL}/image/upload/v1761760335/people4_a5yhgu.png`,
  },

  // homepage section images
  homepage: {
    map: `${CDN_BASE_URL}/image/upload/v1763030206/map_rv3vqs.webp`,
    setup1: `${CDN_BASE_URL}/image/upload/v1761391731/image1_ohjudc.png`,
    setup2: `${CDN_BASE_URL}/image/upload/v1761391731/image2_dgiwhx.png`,
    setup3: `${CDN_BASE_URL}/image/upload/v1761391730/image3_mpgqkb.png`,
  },

  // about section images
  about: {
    discover: `${CDN_BASE_URL}/image/upload/v1761614255/discover_vli4sy.webp`,
    hiring: `${CDN_BASE_URL}/image/upload/v1761614255/hiring_nv8i0o.webp`,
  },

  // Testimonials images
  testimonials: {
    Ashley: `${CDN_BASE_URL}/image/upload/v1761537133/Ashley_Cooper_bny1pp.webp`,
    Jack: `${CDN_BASE_URL}/image/upload/v1761537132/Jackline_Fare_yisupz.webp`,
    John: `${CDN_BASE_URL}/image/upload/v1761537132/John_Cooper_sqt0nm.webp`,
    quotes: `${CDN_BASE_URL}/image/upload/v1761538152/quotes_ntk1te.png`,
  },

  // Features/Services icons
  features: {
    api: `${CDN_BASE_URL}/image/upload/v1761541049/api_h6wqy3.webp`,
    currency: `${CDN_BASE_URL}/image/upload/v1761541049/currency_vvtarw.webp`,
    flexible: `${CDN_BASE_URL}/image/upload/v1761541049/flexible_asewnw.webp`,
    payment: `${CDN_BASE_URL}/image/upload/v1761541049/payment_pppa8v.webp`,
  },

  // Partners logos
  partners: {
    ecobank: `${CDN_BASE_URL}/image/upload/v1761540380/ecobank_kxq90x.webp`,
    desjardins: `${CDN_BASE_URL}/image/upload/v1761540378/Desjardins_rreump.webp`,
    airtel: `${CDN_BASE_URL}/image/upload/v1761540386/airtel_eols4k.webp`,
    safaricom: `${CDN_BASE_URL}/image/upload/v1761540383/safaricom_lka7tb.webp`,
    nsia: `${CDN_BASE_URL}/image/upload/v1761540379/nsia_q4dwkv.webp`,
    bsic: `${CDN_BASE_URL}/image/upload/v1761540389/biic_r4bsly.webp`,
    mtn: `${CDN_BASE_URL}/image/upload/v1761540379/mtn_vvickz.webp`,
    vodacom: `${CDN_BASE_URL}/image/upload/v1761540385/vodacom_kowncv.webp`,
    bni: `${CDN_BASE_URL}/image/upload/v1761540378/bni_ueitnn.webp`,
    cic: `${CDN_BASE_URL}/image/upload/v1761540378/cic_bws1l9.webp`,
    bankOfAfrica: `${CDN_BASE_URL}/image/upload/v1761540386/bankofafrica_qlkus9.webp`,
    orange: `${CDN_BASE_URL}/image/upload/v1761540382/orange_ogh3mo.webp`,
    biic: `${CDN_BASE_URL}/image/upload/v1761540389/biic_r4bsly.webp`,
    societeGenerale: `${CDN_BASE_URL}/image/upload/v1761540384/societe_fgaobs.webp`,
    flutterwave: `${CDN_BASE_URL}/image/upload/v1761540379/flutterwave_pniu23.webp`,
    banqueAtlantique: `${CDN_BASE_URL}/image/upload/v1761540387/banque_suolnf.webp`,
  },

  // Services icons
  services: {
    secure: `${CDN_BASE_URL}/image/upload/v1761542953/secure_ga4mvp.webp`,
    wallet: `${CDN_BASE_URL}/image/upload/v1761542953/wallet_vvqght.webp`,
    bill: `${CDN_BASE_URL}/image/upload/v1761542953/bill_ryz6nl.webp`,
    ecommerce: `${CDN_BASE_URL}/image/upload/v1761542953/ecommerce_iyplvz.webp`,

    // Service page hero images
    onlinePayment: `${CDN_BASE_URL}/image/upload/v1761718349/online-payment_gsjwoy.webp`,
    pointOfSale: `${CDN_BASE_URL}/image/upload/v1761718350/point-of-sale-solutions_j0kitu.webp`,
    mobilePayments: `${CDN_BASE_URL}/image/upload/v1761718349/mobile-payments_zewiev.webp`,
    subscriptions: `${CDN_BASE_URL}/image/upload/v1761718350/subscriptions_exjuna.webp`,
    businessAccounts: `${CDN_BASE_URL}/image/upload/v1761718350/business-accounts_y9up6i.webp`,
    savings: `${CDN_BASE_URL}/image/upload/v1761718349/savings_pfpl3e.webp`,
    loans: `${CDN_BASE_URL}/image/upload/v1761718349/loans_zxzc0n.webp`,
    analytics: `${CDN_BASE_URL}/image/upload/v1761718350/analytics_wl9gbh.webp`,
    compliance: `${CDN_BASE_URL}/image/upload/v1761718349/compliance_yeh3ql.webp`,
  },

  // Background images
  backgrounds: {
    gradient1: `${CDN_BASE_URL}/backgrounds/gradient-1.webp`,
    pattern1: `${CDN_BASE_URL}/backgrounds/pattern-1.svg`,
  },

  // Team/About images
  team: {},

  // Icons/Illustrations
  illustrations: {},

  // Placeholder images (for development)
  placeholders: {
    square: 'https://placehold.co/600x600/e5e5e5/737373?text=Image',
    landscape: 'https://placehold.co/1200x600/e5e5e5/737373?text=Image',
    portrait: 'https://placehold.co/600x900/e5e5e5/737373?text=Image',
  },
};

// Helper function to get optimized image URL with transformations
export function getOptimizedImage(
  path: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'jpg' | 'png';
  }
) {
  // For Cloudinary optimization
  const params = new URLSearchParams();

  if (options?.width) params.append('w', options.width.toString());
  if (options?.height) params.append('h', options.height.toString());
  if (options?.quality) params.append('q', options.quality.toString());
  if (options?.format) params.append('f', options.format);

  return `${path}?${params.toString()}`;
}

export default images;
