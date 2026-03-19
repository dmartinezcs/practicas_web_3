import Link from "next/link";
import CardWrapper from "./CardWrapper";
import { Product } from "@/types/product";
import styles from "./style.css";


interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <CardWrapper>
        <div className="card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="image"
      />
      <div className= "content">
      <h3 className="title">{product.title}</h3>

      <span className="category">
        {product.category}
      </span>

      <p className="price">
        €{product.price.toFixed(2)}
      </p>

      <Link href={`/product/${product.id}`}>
        <button className="button">
          Ver detalles
        </button>
      </Link>
      </div>
      </div>
      </CardWrapper>
  );
}