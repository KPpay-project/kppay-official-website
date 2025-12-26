import { groq } from 'next-sanity';

// Post fragment with all common fields
const postFields = groq`
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
`;

// Get all published posts (for listing page)
export const getAllPostsQuery = groq`
  *[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
    ${postFields}
  }
`;

// Get single post by slug (for detail page)
export const getPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ${postFields},
    content,
    seo
  }
`;

// Get all categories
export const getAllCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    color
  }
`;

// Get posts by category
export const getPostsByCategoryQuery = groq`
  *[_type == "post" && category->slug.current == $categorySlug && defined(publishedAt)] | order(publishedAt desc) {
    ${postFields}
  }
`;

// Get all post slugs (for generateStaticParams)
export const getAllPostSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)].slug.current
`;
