export interface MinPostModel {
    title: string;
    slug: string;
    feature_image: string;
    custom_excerpt: string;
    excerpt: string;
  }
  
  export interface FullPostModel {
    title: string;
    feature_image: string;
    html: string;
    created_at: string;
    updated_at: string;
    published_at: string;
  }
  