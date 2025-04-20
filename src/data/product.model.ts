export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  status: 'available' | 'out-of-stock' | 'archived';
  rating: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}
