import { getProduct } from "@/lib/api/product";
import SectionContainer from "@/app/components/SectionContainer";
import Link from "next/link";
import "./style.css"

interface Props {
  params: { id: string };
}

export default async function ProductDetail({ params }: Props) {
  const {id} =await params;
  const product = await getProduct(id);

  return (
    <SectionContainer>
      <Link href="/">
        <button>
          Volver
        </button>
      </Link>
        <h1 className="title">{product.title}</h1>


        <div className="imageProd">
          {product.images.map((img, i) => (
            <img key={i} src={img} className="image" />
          ))}
        </div>

        <div>
          

          <p>{product.description}</p>

          <p><b>Marca:</b> {product.brand}</p>

          <p><b>Rating:</b> {product.rating} Estrellas</p>

          <p >
            <b>Precio:</b> {product.price}€
          </p>

          <p>
            <b>Stock:</b>{" "}
            {product.stock < 10
              ? ` Quedan pocas unidades (${product.stock})`
              : product.stock}
          </p>

          <p>
            <b>Dimensiones:</b> {product.dimensions.width} cm x{" "}
          {product.dimensions.height} cm x {product.dimensions.depth} cm
          </p>
          {product.weight && <p><b>Peso:</b> {product.weight}g</p>}
        </div>
    </SectionContainer>
  );
}