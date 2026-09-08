import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

const ProductsList = () => {
    const { filteredProducts } = useProducts();

    if (filteredProducts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16">
                <div className="text-6xl mb-4"></div>
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Нічого не знайдено</h2>
                <p className="text-gray-500 text-center">
                    Спробуйте змінити пошуковий запит
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-wrap gap-6 p-8 justify-center">
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;