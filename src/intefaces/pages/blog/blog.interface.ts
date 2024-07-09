export interface BlogList {
  [key: string]: BlogData[];
}

export interface BlogData {
  _id: string;
  title: string;
  excerpt: string;
  category: {
    name: string;
    _id: string;
  };
  featuredImage: string[];
  publishDate: string;
  description: string;
  slug: string;
  customImage: string[];
}
