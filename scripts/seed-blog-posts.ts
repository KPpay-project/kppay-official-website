import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
});

// Sample categories to ensure they exist
const categories = [
  {
    _id: 'category-security',
    _type: 'category',
    title: 'Security',
    slug: { _type: 'slug', current: 'security' },
    description: 'Payment security and fraud prevention',
    color: '#DC2626',
  },
  {
    _id: 'category-innovation',
    _type: 'category',
    title: 'Innovation',
    slug: { _type: 'slug', current: 'innovation' },
    description: 'Latest innovations in fintech',
    color: '#7C3AED',
  },
  {
    _id: 'category-compliance',
    _type: 'category',
    title: 'Compliance',
    slug: { _type: 'slug', current: 'compliance' },
    description: 'Regulatory compliance and standards',
    color: '#059669',
  },
  {
    _id: 'category-technology',
    _type: 'category',
    title: 'Technology',
    slug: { _type: 'slug', current: 'technology' },
    description: 'Payment technology and infrastructure',
    color: '#1560FC',
  },
];

// 6 new blog posts
const newPosts = [
  {
    _type: 'post',
    title: 'The Future of Real-Time Payments: Trends to Watch in 2025',
    slug: { _type: 'slug', current: 'future-real-time-payments-2025' },
    excerpt:
      'Explore the emerging trends shaping real-time payment systems, from instant cross-border transfers to AI-powered fraud detection.',
    category: { _type: 'reference', _ref: 'category-innovation' },
    publishedAt: new Date('2025-01-15').toISOString(),
    readTime: 7,
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Real-time payment systems are revolutionizing how businesses and consumers transfer money. As we move through 2025, several key trends are emerging that will define the future of instant payments.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '1. Instant Cross-Border Payments' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Traditional cross-border payments can take days to settle. New real-time payment networks are enabling instant international transfers with lower fees and better transparency.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          { _type: 'span', text: '2. AI-Powered Fraud Detection' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Machine learning algorithms are becoming sophisticated enough to detect fraudulent transactions in real-time, protecting both businesses and consumers.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '3. Embedded Finance' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Payment capabilities are being embedded directly into non-financial platforms, enabling seamless checkout experiences across e-commerce, social media, and SaaS platforms.',
          },
        ],
      },
    ],
  },
  {
    _type: 'post',
    title: 'Zero-Trust Security Architecture for Payment Systems',
    slug: {
      _type: 'slug',
      current: 'zero-trust-security-payment-systems',
    },
    excerpt:
      'Learn how implementing zero-trust security principles can protect your payment infrastructure from modern cyber threats.',
    category: { _type: 'reference', _ref: 'category-security' },
    publishedAt: new Date('2025-01-10').toISOString(),
    readTime: 9,
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'In an era of sophisticated cyber attacks, traditional perimeter-based security is no longer sufficient for protecting payment systems. Zero-trust architecture offers a more robust approach.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          { _type: 'span', text: 'What is Zero-Trust Security?' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Zero-trust security operates on the principle of "never trust, always verify." Every access request is authenticated, authorized, and encrypted, regardless of where it originates.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          { _type: 'span', text: 'Key Components for Payment Systems' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Implementing zero-trust for payments requires identity verification, micro-segmentation, continuous monitoring, and least-privilege access controls.',
          },
        ],
      },
    ],
  },
  {
    _type: 'post',
    title: 'PCI DSS 4.0: Key Changes and Compliance Strategies',
    slug: { _type: 'slug', current: 'pci-dss-4-key-changes-compliance' },
    excerpt:
      'Navigate the latest PCI DSS 4.0 requirements with our comprehensive guide to compliance strategies and implementation timelines.',
    category: { _type: 'reference', _ref: 'category-compliance' },
    publishedAt: new Date('2025-01-05').toISOString(),
    readTime: 8,
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The Payment Card Industry Data Security Standard (PCI DSS) version 4.0 introduces significant updates to help organizations better protect cardholder data in modern environments.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Major Changes in Version 4.0' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Version 4.0 focuses on continuous compliance rather than point-in-time assessments, introduces customized implementation approaches, and strengthens authentication requirements.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Timeline for Implementation' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Organizations have until March 2025 to implement most new requirements, with some specific controls having extended deadlines until 2026.',
          },
        ],
      },
    ],
  },
  {
    _type: 'post',
    title: 'Building Scalable Payment APIs: Best Practices for Developers',
    slug: { _type: 'slug', current: 'scalable-payment-apis-best-practices' },
    excerpt:
      'Discover essential best practices for designing and building payment APIs that can handle high transaction volumes while maintaining security and reliability.',
    category: { _type: 'reference', _ref: 'category-technology' },
    publishedAt: new Date('2024-12-28').toISOString(),
    readTime: 10,
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Payment APIs are the backbone of modern fintech applications. Building them to scale requires careful consideration of architecture, security, and developer experience.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '1. Idempotency is Critical' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Implement idempotency keys to prevent duplicate transactions when requests are retried due to network issues or timeouts.',
          },
        ],
      },
      {
        _type: 'code',
        language: 'typescript',
        code: `// Example: Idempotency key in request header
const response = await fetch('/api/payments', {
  method: 'POST',
  headers: {
    'Idempotency-Key': 'unique-request-id-12345',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ amount: 1000, currency: 'USD' })
});`,
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '2. Rate Limiting and Throttling' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Protect your API from abuse and ensure fair usage with intelligent rate limiting strategies.',
          },
        ],
      },
    ],
  },
  {
    _type: 'post',
    title: 'Cryptocurrency Payment Integration: Opportunities and Challenges',
    slug: { _type: 'slug', current: 'cryptocurrency-payment-integration' },
    excerpt:
      'Analyze the benefits and challenges of integrating cryptocurrency payments into your business, including regulatory considerations and technical implementation.',
    category: { _type: 'reference', _ref: 'category-innovation' },
    publishedAt: new Date('2024-12-20').toISOString(),
    readTime: 11,
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Cryptocurrency payments offer unique advantages for businesses, but they also come with specific challenges that need careful consideration.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Benefits of Crypto Payments' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Lower transaction fees for international payments, faster settlement times, access to new customer segments, and reduced chargeback fraud are key advantages.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          { _type: 'span', text: 'Regulatory Landscape' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Compliance requirements vary significantly by jurisdiction. Understanding KYC/AML obligations and tax implications is crucial before implementation.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          { _type: 'span', text: 'Technical Implementation' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Modern payment processors offer APIs that handle wallet management, price conversion, and settlement, making integration more accessible.',
          },
        ],
      },
    ],
  },
  {
    _type: 'post',
    title: 'Machine Learning in Fraud Detection: Beyond Rule-Based Systems',
    slug: { _type: 'slug', current: 'machine-learning-fraud-detection' },
    excerpt:
      'Explore how machine learning models are revolutionizing fraud detection with adaptive algorithms that learn from evolving attack patterns.',
    category: { _type: 'reference', _ref: 'category-security' },
    publishedAt: new Date('2024-12-15').toISOString(),
    readTime: 12,
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Traditional rule-based fraud detection systems struggle to keep pace with sophisticated attack methods. Machine learning offers a more adaptive and effective approach.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Limitations of Rule-Based Systems',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Static rules require constant manual updates, generate high false positive rates, and cannot detect novel attack patterns that do not match predefined rules.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          { _type: 'span', text: 'Machine Learning Approaches' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Supervised learning models trained on labeled transaction data, unsupervised anomaly detection for identifying unusual patterns, and ensemble methods that combine multiple models provide robust fraud detection.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          { _type: 'span', text: 'Real-World Implementation' },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Successful implementation requires careful feature engineering, continuous model retraining, and a hybrid approach that combines ML with human review for edge cases.',
          },
        ],
      },
    ],
  },
];

async function seedBlogPosts() {
  try {
    console.log('Starting blog post seeding...\n');

    // Create or update categories
    console.log('Creating categories...');
    for (const category of categories) {
      await client.createOrReplace(category);
      console.log(`✓ Category created: ${category.title}`);
    }

    console.log('\nCreating blog posts...');
    // Create new posts
    for (const post of newPosts) {
      const result = await client.create(post);
      console.log(`✓ Post created: ${post.title} (ID: ${result._id})`);
    }

    console.log('\n✅ All blog posts seeded successfully!');
    console.log(`Total posts created: ${newPosts.length}`);
  } catch (error) {
    console.error('Error seeding blog posts:', error);
    process.exit(1);
  }
}

seedBlogPosts();
