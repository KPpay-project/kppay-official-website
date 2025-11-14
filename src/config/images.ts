// config/images.ts

// CDN Base URL
const CDN_BASE_URL =
  process.env.NEXT_PUBLIC_CDN_URL || 'https://res.cloudinary.com/dfwty72r9';

export const images = {
  // Logos
  logos: {
    primary: `${CDN_BASE_URL}/image/upload/v1763045346/Logo_principal_lob563.png`,
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

    // bottom images
    // setup1: `${CDN_BASE_URL}/image/upload/v1763030421/herobottomimage3_nt7kc1.webp`,
    // setup2: `${CDN_BASE_URL}/image/upload/v1763030421/herobottomimage1_zarrgq.webp`,
    // setup3: `${CDN_BASE_URL}/image/upload/v1763030420/herobottomimage2_irunh7.webp`,
  },

  // Solutions Section Images - Human-Focused Story Collection
  solutions: {
    // Our Services - The Customer Journey
    payment:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80', // Young woman smiling with mobile banking app
    wallet:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80', // Happy professional checking digital wallet balance
    billPayment:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&q=80', // Relaxed person smiling while paying bills on phone
    ecommerce:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', // Diverse team collaborating on e-commerce business
    mobileRecharge:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', // African woman confidently using mobile payment
    instantSetup:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', // Entrepreneur celebrating successful business launch

    // Industries We Serve - Real People, Real Solutions
    retail:
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80', // Retail worker helping customer at checkout
    hospitality:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80', // Hotel receptionist with tablet
    healthcare:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80', // Healthcare professional with patient
    education:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', // Students in classroom with technology
    professional:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80', // Professional team meeting
    utilities:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80', // Urban infrastructure and connectivity

    // Integration Solutions - Your Tech Team
    api: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80', // Focused developer working on API integration
    plugins:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80', // Team collaborating on plugin development
    customization:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', // Professional customizing business solutions
    mobileSdk:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', // Mobile app development
    webhooks:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80', // Real-time data monitoring
    sandbox:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', // Testing and development environment

    // Support & Resources - Always Here For You
    support247:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80', // Smiling support agent with headset ready to help
    documentation:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', // Professional reviewing technical documentation
    training:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80', // Instructor training team members on platform
    community:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80', // Community collaboration and networking
    security:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80', // Security and protection concept
    resources:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', // Business resources and documentation
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

  // payments/online-payments icons
  onlinePaymentsIcons: {
    instant: `${CDN_BASE_URL}/image/upload/v1763055190/instant_zb7ml5.webp`,
    enterprise: `${CDN_BASE_URL}/image/upload/v1763055190/enterprise_fbqwmv.webp`,
    global: `${CDN_BASE_URL}/image/upload/v1763055190/global_tylixd.webp`,
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
