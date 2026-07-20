export interface ProductRating {
  rate: number;
  count: number;
}

export interface Product {
  _id: string;
  sellerId: string;
  sellerEmail: string;

  name: string;
  category: string;
  brand: string;

  price: number;
  discountPrice: number;

  stock: number;

  image: string;

  description: string;

  status: "Active" | "Low Stock" | "Out of Stock";

  createdAt: string;
  updatedAt: string;
}