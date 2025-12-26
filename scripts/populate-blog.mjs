// Script to populate Sanity blog with initial posts
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-12-25',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Categories to create
const categories = [
  {
    _id: 'category-payments',
    _type: 'category',
    title: 'Payments',
    slug: { _type: 'slug', current: 'payments' },
    description: 'Everything about payment processing and transactions',
  },
  {
    _id: 'category-security',
    _type: 'category',
    title: 'Security',
    slug: { _type: 'slug', current: 'security' },
    description: 'Payment security and fraud prevention',
  },
  {
    _id: 'category-developer',
    _type: 'category',
    title: 'Developer',
    slug: { _type: 'slug', current: 'developer' },
    description: 'Technical guides and API documentation',
  },
  {
    _id: 'category-fintech',
    _type: 'category',
    title: 'Fintech Innovation',
    slug: { _type: 'slug', current: 'fintech-innovation' },
    description: 'Latest trends in financial technology',
  },
  {
    _id: 'category-product',
    _type: 'category',
    title: 'Product Updates',
    slug: { _type: 'slug', current: 'product-updates' },
    description: 'New features and platform updates',
  },
];

// Blog posts to create
const posts = [
  {
    _type: 'post',
    title: 'The Future of Digital Payments: Trends Shaping 2025',
    slug: { _type: 'slug', current: 'future-of-digital-payments-2025' },
    excerpt:
      'Explore the emerging trends in digital payments, from real-time transactions to embedded finance, and how they are transforming the way businesses handle money.',
    category: { _type: 'reference', _ref: 'category-fintech' },
    publishedAt: new Date('2025-12-20T10:00:00Z').toISOString(),
    readTime: 7,
    featuredImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: await uploadImageFromUrl(
          'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80'
        ),
      },
      alt: 'Digital payment technology visualization',
    },
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The payment landscape is evolving rapidly, with new technologies and consumer expectations reshaping how businesses process transactions. As we move through 2025, several key trends are emerging that will define the future of digital payments.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Real-Time Payment Processing' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Instant payment settlement is no longer a luxury—it\'s becoming the standard. Real-time payment rails are enabling businesses to receive funds instantly, improving cash flow and customer satisfaction. This shift is particularly impactful for e-commerce, gig economy platforms, and service-based businesses.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Embedded Finance' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Payment functionality is being embedded directly into platforms and applications, creating seamless checkout experiences. From ride-sharing apps to e-commerce platforms, integrated payment solutions are reducing friction and increasing conversion rates.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          { _type: 'span', text: 'Enhanced Security Measures' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'With increasing transaction volumes comes heightened security requirements. Advanced fraud detection, biometric authentication, and tokenization are becoming standard features in modern payment infrastructure.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'blockquote',
        children: [
          {
            _type: 'span',
            text: 'The businesses that thrive in 2025 will be those that embrace payment innovation while maintaining the highest security standards.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'As these trends converge, the payment industry is moving toward a future where transactions are instant, invisible, and incredibly secure. Businesses that adopt these technologies early will gain a significant competitive advantage.',
          },
        ],
      },
    ],
  },
  {
    _type: 'post',
    title: 'Building a Secure Payment Gateway: Best Practices',
    slug: {
      _type: 'slug',
      current: 'building-secure-payment-gateway-best-practices',
    },
    excerpt:
      'Learn the essential security measures and architectural decisions needed to build a payment gateway that protects both merchants and customers from fraud.',
    category: { _type: 'reference', _ref: 'category-security' },
    publishedAt: new Date('2025-12-18T14:00:00Z').toISOString(),
    readTime: 9,
    featuredImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: await uploadImageFromUrl(
          'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80'
        ),
      },
      alt: 'Secure payment infrastructure',
    },
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Payment security is non-negotiable. With cyber threats becoming more sophisticated, building a secure payment gateway requires a multi-layered approach that protects sensitive data at every stage of the transaction.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          { _type: 'span', text: 'PCI DSS Compliance' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The Payment Card Industry Data Security Standard (PCI DSS) sets the baseline for payment security. Compliance isn\'t just about avoiding penalties—it\'s about implementing proven security controls that protect your business and customers.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Key requirements include:',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: '• Encrypted data transmission using TLS 1.3' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: '• Tokenization of card data' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: '• Regular security audits and penetration testing' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', text: '• Access control and monitoring' },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Fraud Detection' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Modern payment gateways employ machine learning algorithms to identify suspicious transaction patterns in real-time. This includes analyzing device fingerprints, geolocation data, transaction velocity, and historical behavior patterns.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '3D Secure Authentication' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Implementing 3D Secure 2.0 adds an additional authentication layer for online card transactions. This reduces fraud liability and increases customer confidence, while maintaining a smooth checkout experience through risk-based authentication.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'blockquote',
        children: [
          {
            _type: 'span',
            text: 'Security is a journey, not a destination. Continuous monitoring and updates are essential.',
          },
        ],
      },
    ],
  },
  {
    _type: 'post',
    title: 'API-First Payment Infrastructure: A Developer\'s Guide',
    slug: {
      _type: 'slug',
      current: 'api-first-payment-infrastructure-developers-guide',
    },
    excerpt:
      'Discover how API-first payment platforms enable developers to build flexible, scalable payment solutions with modern RESTful and webhook architectures.',
    category: { _type: 'reference', _ref: 'category-developer' },
    publishedAt: new Date('2025-12-15T09:00:00Z').toISOString(),
    readTime: 8,
    featuredImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: await uploadImageFromUrl(
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80'
        ),
      },
      alt: 'API development and integration',
    },
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Modern payment infrastructure is built API-first, giving developers the flexibility to create custom payment experiences while maintaining security and compliance. Let\'s explore how to leverage these APIs effectively.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'RESTful API Design' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'A well-designed payment API follows RESTful principles with clear, predictable endpoints. Here\'s an example of creating a payment intent:',
          },
        ],
      },
      {
        _type: 'code',
        language: 'javascript',
        code: `// Create a payment intent
const response = await fetch('https://api.kppay.com/v1/payments', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 5000,
    currency: 'USD',
    payment_method: 'card',
    metadata: {
      order_id: 'order_12345'
    }
  })
});

const payment = await response.json();
console.log('Payment ID:', payment.id);`,
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Webhook Integration' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Webhooks enable real-time notifications about payment events. Set up a webhook endpoint to receive updates:',
          },
        ],
      },
      {
        _type: 'code',
        language: 'typescript',
        code: `import { Request, Response } from 'express';
import crypto from 'crypto';

export async function handleWebhook(req: Request, res: Response) {
  // Verify webhook signature
  const signature = req.headers['x-kppay-signature'];
  const payload = JSON.stringify(req.body);

  const expectedSignature = crypto
    .createHmac('sha256', process.env.WEBHOOK_SECRET!)
    .update(payload)
    .digest('hex');

  if (signature !== expectedSignature) {
    return res.status(401).send('Invalid signature');
  }

  // Process event
  const event = req.body;

  switch (event.type) {
    case 'payment.succeeded':
      await fulfillOrder(event.data.payment_id);
      break;
    case 'payment.failed':
      await notifyCustomer(event.data.payment_id);
      break;
  }

  res.status(200).send('Webhook received');
}`,
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Error Handling' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Robust error handling is crucial. Payment APIs should return clear error codes and messages that help developers diagnose and resolve issues quickly.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'blockquote',
        children: [
          {
            _type: 'span',
            text: 'Great APIs make complex payment flows simple through thoughtful design and comprehensive documentation.',
          },
        ],
      },
    ],
  },
  {
    _type: 'post',
    title: 'Optimizing Payment Conversion Rates: A Data-Driven Approach',
    slug: {
      _type: 'slug',
      current: 'optimizing-payment-conversion-rates-data-driven',
    },
    excerpt:
      'Reduce cart abandonment and increase successful transactions by implementing proven strategies for payment optimization, from checkout design to payment method selection.',
    category: { _type: 'reference', _ref: 'category-payments' },
    publishedAt: new Date('2025-12-12T11:00:00Z').toISOString(),
    readTime: 6,
    featuredImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: await uploadImageFromUrl(
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80'
        ),
      },
      alt: 'Payment conversion analytics dashboard',
    },
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Cart abandonment rates average 70% across e-commerce, with complex checkout processes being a major contributor. Here\'s how to optimize your payment flow for maximum conversion.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          { _type: 'span', text: 'Streamline the Checkout Process' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Every additional form field reduces conversion. Use auto-fill capabilities, address lookup APIs, and smart defaults to minimize data entry. A single-page checkout can increase conversions by up to 20%.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          { _type: 'span', text: 'Offer Multiple Payment Methods' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Different customers prefer different payment methods. Offering credit cards, digital wallets (Apple Pay, Google Pay), and local payment methods can increase conversion by 30% in international markets.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Mobile Optimization' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'With over 60% of online transactions happening on mobile devices, responsive design is critical. Large touch targets, mobile-optimized forms, and digital wallet integration are essential.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Build Trust with Security Badges' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Display security certifications, SSL indicators, and payment provider logos prominently. These trust signals can reduce abandonment by addressing security concerns before they arise.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          { _type: 'span', text: 'Transparent Pricing' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Hidden fees are a major cause of cart abandonment. Show all costs (shipping, taxes, fees) upfront. Surprise charges at checkout destroy trust and conversions.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'blockquote',
        children: [
          {
            _type: 'span',
            text: 'A friction-free payment experience isn\'t just good UX—it\'s a competitive advantage that directly impacts revenue.',
          },
        ],
      },
    ],
  },
  {
    _type: 'post',
    title: 'Cross-Border Payments: Navigating Currencies and Compliance',
    slug: {
      _type: 'slug',
      current: 'cross-border-payments-currencies-compliance',
    },
    excerpt:
      'Expand your business globally by understanding the complexities of international payments, from multi-currency support to regulatory compliance across different jurisdictions.',
    category: { _type: 'reference', _ref: 'category-payments' },
    publishedAt: new Date('2025-12-10T08:00:00Z').toISOString(),
    readTime: 8,
    featuredImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: await uploadImageFromUrl(
          'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80'
        ),
      },
      alt: 'Global payment network visualization',
    },
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Expanding into international markets opens new revenue opportunities, but cross-border payments come with unique challenges. Here\'s how to navigate them successfully.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          { _type: 'span', text: 'Multi-Currency Support' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Customers prefer to pay in their local currency. Supporting multiple currencies reduces friction and can increase international conversion rates by 25%. Modern payment platforms handle currency conversion automatically while providing competitive exchange rates.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          { _type: 'span', text: 'Regulatory Compliance' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Different countries have different payment regulations. From GDPR in Europe to data localization requirements in other regions, compliance is complex but critical. Working with a payment provider that handles regulatory complexity reduces risk.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          { _type: 'span', text: 'Local Payment Methods' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Credit cards aren\'t dominant everywhere. In many markets, local payment methods like bank transfers, mobile wallets, or cash-based systems are preferred. Supporting these methods is often essential for market penetration.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Transaction Costs' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Cross-border transactions involve currency conversion fees, international processing fees, and potential intermediary bank charges. Choose a payment partner with transparent pricing and competitive international rates.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          { _type: 'span', text: 'Settlement Speed' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'International payments can take longer to settle due to different banking systems and time zones. Modern payment infrastructure offers faster settlement options, improving cash flow for global businesses.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'blockquote',
        children: [
          {
            _type: 'span',
            text: 'Global expansion requires payment infrastructure that works everywhere, handles any currency, and complies with local regulations seamlessly.',
          },
        ],
      },
    ],
  },
];

async function uploadImageFromUrl(url) {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    const asset = await client.assets.upload('image', Buffer.from(buffer), {
      contentType,
      filename: url.split('/').pop()?.split('?')[0] || 'image.jpg',
    });

    return asset._id;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}

async function populateBlog() {
  try {
    console.log('🚀 Starting blog population...\n');

    // Create categories
    console.log('📁 Creating categories...');
    for (const category of categories) {
      try {
        await client.createOrReplace(category);
        console.log(`✅ Created category: ${category.title}`);
      } catch (error) {
        console.error(`❌ Error creating category ${category.title}:`, error);
      }
    }

    console.log('\n📝 Creating blog posts...');
    // Create posts
    for (let i = 0; i < posts.length; i++) {
      try {
        console.log(`\n[${i + 1}/${posts.length}] Creating: ${posts[i].title}`);
        const result = await client.create(posts[i]);
        console.log(`✅ Created post with ID: ${result._id}`);
      } catch (error) {
        console.error(`❌ Error creating post ${posts[i].title}:`, error);
      }
    }

    console.log('\n\n🎉 Blog population completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   - ${categories.length} categories created`);
    console.log(`   - ${posts.length} blog posts created`);
    console.log('\n🌐 Visit http://localhost:3000/blog to see your posts!');
    console.log('🎨 Visit http://localhost:3000/blog/studio to manage content\n');
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

populateBlog();
