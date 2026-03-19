import { getProduct } from "@/lib/api/product";
import SectionContainer from "@/app/components/SectionContainer";
import Link from "next/link";

interface Props {
  params: { id: string };
}

export default async function ProductDetail({ params }: Props) {
  const {id} =await params;
  const product = await getProduct(id);

  return (
    <SectionContainer>
      <Link href="/">← Volver</Link>

      <div className="grid md:grid-cols-2 gap-6 mt-4">
        
        {/* Galería */}
        <div className="flex flex-col gap-2">
          {product.images.map((img, i) => (
            <img key={i} src={img} className="rounded-md" />
          ))}
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>

          <p className="text-gray-600">{product.description}</p>

          <p className="mt-2">Marca: {product.brand}</p>

          <p>Rating: {product.rating} ⭐</p>

          <p className="text-xl font-semibold mt-2">
            €{product.price}
          </p>

          <p>
            Stock:{" "}
            {product.stock < 10
              ? `⚠️ Quedan pocas unidades (${product.stock})`
              : product.stock}
          </p>

          {product.weight && <p>Peso: {product.weight}g</p>}
        </div>
      </div>
    </SectionContainer>
  );
}