# Blog Scripts

This directory contains scripts for managing blog content in the KPPAY Blog.

## Seed Blog Posts

The `seed-blog-posts.ts` script adds 6 new high-quality blog posts to your Sanity CMS.

### Prerequisites

1. Make sure you have the following environment variables in your `.env.local` file:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
   - `SANITY_API_TOKEN` (with write permissions)

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Script

To add the 6 new blog posts:

```bash
npm run seed-blog
```

### What Gets Created

The script creates:

**4 Categories:**
- Security (red)
- Innovation (purple)
- Compliance (green)
- Technology (blue)

**6 Blog Posts:**
1. **The Future of Real-Time Payments: Trends to Watch in 2025** (Innovation)
   - 7 min read
   - Published: Jan 15, 2025

2. **Zero-Trust Security Architecture for Payment Systems** (Security)
   - 9 min read
   - Published: Jan 10, 2025

3. **PCI DSS 4.0: Key Changes and Compliance Strategies** (Compliance)
   - 8 min read
   - Published: Jan 5, 2025

4. **Building Scalable Payment APIs: Best Practices for Developers** (Technology)
   - 10 min read
   - Published: Dec 28, 2024

5. **Cryptocurrency Payment Integration: Opportunities and Challenges** (Innovation)
   - 11 min read
   - Published: Dec 20, 2024

6. **Machine Learning in Fraud Detection: Beyond Rule-Based Systems** (Security)
   - 12 min read
   - Published: Dec 15, 2024

Each post includes:
- Title and slug
- Excerpt for preview cards
- Full content with headings, paragraphs, and code examples
- Category assignment
- Read time estimation
- Publication date

### Note

The script uses `createOrReplace` for categories, so it's safe to run multiple times. Posts are created fresh each time, so running the script multiple times will create duplicate posts.
