export interface PaginatedProductResponse {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: Product[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  brand: string;
  images: string[];
  imageUrl: string;
  reviews: Review[];
}

export interface Review {
  userId: number;
  rating: number;
  comment: string;
}
