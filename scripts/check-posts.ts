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

async function checkPosts() {
  try {
    console.log('Checking all posts in Sanity...\n');

    // Get all posts with the same query structure as the blog page
    const posts = await client.fetch(`
      *[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        excerpt,
        "featuredImage": featuredImage{
          asset->{url},
          alt
        },
        "category": category->{
          title,
          "slug": slug.current,
          color
        },
        publishedAt,
        readTime
      }
    `);

    console.log(`Total posts found: ${posts.length}\n`);

    posts.forEach((post: any, index: number) => {
      console.log(`${index + 1}. ${post.title}`);
      console.log(`   Slug: ${post.slug}`);
      console.log(`   Category: ${post.category?.title || 'NO CATEGORY'}`);
      console.log(`   Has Image: ${post.featuredImage ? 'YES' : 'NO'}`);
      console.log(`   Published: ${post.publishedAt}`);
      console.log('');
    });

    // Check for posts without images
    const postsWithoutImages = posts.filter((post: any) => !post.featuredImage);
    if (postsWithoutImages.length > 0) {
      console.log(`⚠️  Warning: ${postsWithoutImages.length} posts don't have images!`);
    }

    // Check for posts without categories
    const postsWithoutCategories = posts.filter((post: any) => !post.category);
    if (postsWithoutCategories.length > 0) {
      console.log(`⚠️  Warning: ${postsWithoutCategories.length} posts don't have categories!`);
    }

  } catch (error) {
    console.error('Error checking posts:', error);
    process.exit(1);
  }
}

checkPosts();
