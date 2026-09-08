import { useState, type ReactNode } from "react";
import { ProductsContext } from "./ProductsContext";
import productsData from "../models/products";
import type { ProductCardType } from "../types/ProductCardType";

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<ProductCardType[]>(productsData);
    const [filteredProducts, setFilteredProducts] = useState<ProductCardType[]>(productsData);

    return (
        <ProductsContext.Provider value={{
            products,
            setProducts,
            filteredProducts,
            setFilteredProducts
        }}>
            {children}
        </ProductsContext.Provider>
    );
};