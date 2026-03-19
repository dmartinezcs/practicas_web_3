'use client';

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/api/product";
import { Product } from "@/types/product";
import SectionContainer from "@/app/components/SectionContainer";
import SearchBar from "@/app/components/SearchBar";
import ProductGrid from "@/app/components/ProductGrid";
import { useRouter } from "next/navigation";


export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SectionContainer>
      <SearchBar setSearchQuery={setSearchQuery} />

      <p>
        {filteredProducts.length} resultados
      </p>

      <ProductGrid products={filteredProducts} />
    </SectionContainer>
  );
}