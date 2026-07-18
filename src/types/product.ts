export interface ProductRating {
  rate: number;
  count: number;
}

export interface Product {
  _id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: string;
  brand: string;
  images: string[];
  thumbnail: string;
  stock: number;
  rating: ProductRating;
  featured: boolean;
  specifications: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}