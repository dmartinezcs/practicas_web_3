export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  brand: string;
  rating: number;
  stock: number;
  thumbnail: string;
  images: string[];
  weight?: number;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
}