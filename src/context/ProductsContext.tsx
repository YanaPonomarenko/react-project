import { createContext } from "react";
import type { ProductCardType } from "../types/ProductCardType";

export type ProductsContextType = {
    products: ProductCardType[];
    setProducts: (products: ProductCardType[]) => void;
    filteredProducts: ProductCardType[];
    setFilteredProducts: (products: ProductCardType[]) => void;
};

export const ProductsContext = createContext<ProductsContextType | null>(null);