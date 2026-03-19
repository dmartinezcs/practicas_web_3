import { Product } from "@/types/product";
import { api } from "./axios ";



export const getProducts = async (): Promise<Product[]> => {
    
  const res = await api.get("");
  return res.data.products;
}

export const getProduct = async (id: string): Promise<Product> =>{
  console.log("ID:",id)
    const res = await api.get(`/${id}`);
  return res.data;
}

