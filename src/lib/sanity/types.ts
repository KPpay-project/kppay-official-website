export interface Category {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  color: string;
}

export interface BlogPost {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
  category: Category;
  publishedAt: string;
  readTime: number;
}

export interface BlogPostDetail extends BlogPost {
  content: any[]; // Portable Text blocks
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}
