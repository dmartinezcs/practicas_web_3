import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import "./style.css";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}