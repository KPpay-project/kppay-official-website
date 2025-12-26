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

// Upload image from URL to Sanity
async function uploadImageFromUrl(url: string, alt: string) {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const asset = await client.assets.upload('image', Buffer.from(buffer), {
      filename: alt.replace(/\s+/g, '-').toLowerCase() + '.jpg',
    });
    return asset;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}

// Sample categories
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

// Blog posts with Unsplash images
const postsData = [
  {
    title: 'The Future of Real-Time Payments: Trends to Watch in 2025',
    slug: 'future-real-time-payments-2025',
    excerpt:
      'Explore the emerging trends shaping real-time payment systems, from instant cross-border transfers to AI-powered fraud detection.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop',
    imageAlt: 'Digital payment technology concept',
    category: 'category-innovation',
    publishedAt: new Date('2025-01-15').toISOString(),
    readTime: 7,
  },
  {
    title: 'Zero-Trust Security Architecture for Payment Systems',
    slug: 'zero-trust-security-payment-systems',
    excerpt:
      'Learn how implementing zero-trust security principles can protect your payment infrastructure from modern cyber threats.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop',
    imageAlt: 'Cybersecurity and network protection',
    category: 'category-security',
    publishedAt: new Date('2025-01-10').toISOString(),
    readTime: 9,
  },
  {
    title: 'PCI DSS 4.0: Key Changes and Compliance Strategies',
    slug: 'pci-dss-4-key-changes-compliance',
    excerpt:
      'Navigate the latest PCI DSS 4.0 requirements with our comprehensive guide to compliance strategies and implementation timelines.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop',
    imageAlt: 'Compliance and regulatory documentation',
    category: 'category-compliance',
    publishedAt: new Date('2025-01-05').toISOString(),
    readTime: 8,
  },
  {
    title: 'Building Scalable Payment APIs: Best Practices for Developers',
    slug: 'scalable-payment-apis-best-practices',
    excerpt:
      'Discover essential best practices for designing and building payment APIs that can handle high transaction volumes while maintaining security and reliability.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop',
    imageAlt: 'Developer coding payment API',
    category: 'category-technology',
    publishedAt: new Date('2024-12-28').toISOString(),
    readTime: 10,
  },
  {
    title: 'Cryptocurrency Payment Integration: Opportunities and Challenges',
    slug: 'cryptocurrency-payment-integration',
    excerpt:
      'Analyze the benefits and challenges of integrating cryptocurrency payments into your business, including regulatory considerations and technical implementation.',
    imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1200&h=800&fit=crop',
    imageAlt: 'Cryptocurrency and blockchain technology',
    category: 'category-innovation',
    publishedAt: new Date('2024-12-20').toISOString(),
    readTime: 11,
  },
  {
    title: 'Machine Learning in Fraud Detection: Beyond Rule-Based Systems',
    slug: 'machine-learning-fraud-detection',
    excerpt:
      'Explore how machine learning models are revolutionizing fraud detection with adaptive algorithms that learn from evolving attack patterns.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop',
    imageAlt: 'AI and machine learning analytics',
    category: 'category-security',
    publishedAt: new Date('2024-12-15').toISOString(),
    readTime: 12,
  },
];

async function seedBlogPosts() {
  try {
    console.log('Starting blog post seeding with images...\n');

    // Create or update categories
    console.log('Creating categories...');
    for (const category of categories) {
      await client.createOrReplace(category);
      console.log(`✓ Category created: ${category.title}`);
    }

    console.log('\nCreating blog posts with images...');

    for (const postData of postsData) {
      console.log(`\nProcessing: ${postData.title}`);

      // Upload image to Sanity
      console.log('  → Uploading image...');
      const imageAsset = await uploadImageFromUrl(postData.imageUrl, postData.imageAlt);
      console.log('  ✓ Image uploaded');

      // Create post with image reference
      const post = {
        _type: 'post',
        title: postData.title,
        slug: { _type: 'slug', current: postData.slug },
        excerpt: postData.excerpt,
        featuredImage: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset._id,
          },
          alt: postData.imageAlt,
        },
        category: { _type: 'reference', _ref: postData.category },
        publishedAt: postData.publishedAt,
        readTime: postData.readTime,
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: `This is a comprehensive article about ${postData.title.toLowerCase()}. The content explores key insights, trends, and best practices in the fintech and payment industry.`,
              },
            ],
          },
          {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: 'Key Takeaways' }],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'This article provides valuable insights for professionals in the payment and fintech industry, covering both technical and strategic aspects.',
              },
            ],
          },
        ],
      };

      const result = await client.create(post);
      console.log(`  ✓ Post created (ID: ${result._id})`);
    }

    console.log('\n✅ All blog posts seeded successfully with images!');
    console.log(`Total posts created: ${postsData.length}`);
  } catch (error) {
    console.error('Error seeding blog posts:', error);
    process.exit(1);
  }
}

seedBlogPosts();
