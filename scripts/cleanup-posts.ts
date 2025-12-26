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

async function cleanupPostsWithoutImages() {
  try {
    console.log('Finding posts without images...\n');

    // Get all posts
    const posts = await client.fetch(`*[_type == "post"]{ _id, title, featuredImage }`);

    const postsWithoutImages = posts.filter((post: any) => !post.featuredImage);

    if (postsWithoutImages.length === 0) {
      console.log('✓ No posts without images found. All good!');
      return;
    }

    console.log(`Found ${postsWithoutImages.length} posts without images:\n`);
    postsWithoutImages.forEach((post: any) => {
      console.log(`  - ${post.title} (${post._id})`);
    });

    console.log('\nDeleting posts without images...');
    for (const post of postsWithoutImages) {
      await client.delete(post._id);
      console.log(`  ✓ Deleted: ${post.title}`);
    }

    console.log(`\n✅ Cleanup complete! Deleted ${postsWithoutImages.length} posts.`);
  } catch (error) {
    console.error('Error during cleanup:', error);
    process.exit(1);
  }
}

cleanupPostsWithoutImages();
