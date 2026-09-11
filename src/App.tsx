import './App.css';
import ProductsList from "./components/ProductsList";
import SearchForm from "./components/SearchForm";
import Category from "./components/Category";
import { ProductsProvider } from "./context/ProductsProvider";
import { useState, useEffect } from "react";

type BasketProduct = {
    id: number;
    amount: number;
};

function BasketCounter() {
    const [totalItems, setTotalItems] = useState<number>(() => {
        const basketProducts: BasketProduct[] = JSON.parse(
            localStorage.getItem('basketProducts') || '[]'
        );
        return basketProducts.reduce((sum: number, item: BasketProduct) => sum + item.amount, 0);
    });

    useEffect(() => {
        const updateCounter = () => {
            const basketProducts: BasketProduct[] = JSON.parse(
                localStorage.getItem('basketProducts') || '[]'
            );
            const total = basketProducts.reduce((sum: number, item: BasketProduct) => sum + item.amount, 0);
            setTotalItems(total);
        };

        window.addEventListener('storage', updateCounter);
        window.addEventListener('basketUpdated', updateCounter);

        return () => {
            window.removeEventListener('storage', updateCounter);
            window.removeEventListener('basketUpdated', updateCounter);
        };
    }, []);

    if (totalItems === 0) return null;

    return (
        <div className="fixed top-4 right-4 bg-red-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm shadow-lg z-50 hover:scale-110 transition-transform">
            {totalItems}
        </div>
    );
}

function App() {
    return (
        <ProductsProvider>
            <BasketCounter />
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center py-6">Магазин</h1>
                <SearchForm />
                <ProductsList />

                {/* 🆕 Категорії */}
                <Category />
            </div>
        </ProductsProvider>
    );
}

export default App;