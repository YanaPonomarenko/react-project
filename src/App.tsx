import './App.css';
import ProductCard from "./components/ProductCard.tsx";
import type { ProductCardType } from "./types/ProductCardType.ts";
import { useState, useEffect, useCallback } from "react";

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

    const updateCounter = useCallback(() => {
        const basketProducts: BasketProduct[] = JSON.parse(
            localStorage.getItem('basketProducts') || '[]'
        );
        const total = basketProducts.reduce((sum: number, item: BasketProduct) => sum + item.amount, 0);
        setTotalItems(total);
    }, []);

    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'basketProducts') {
                updateCounter();
            }
        };


        const handleBasketUpdate = () => {
            updateCounter();
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('basketUpdated', handleBasketUpdate);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('basketUpdated', handleBasketUpdate);
        };
    }, [updateCounter]);

    if (totalItems === 0) return null;

    return (
        <div className="fixed top-4 right-4 bg-red-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-sm shadow-lg z-50 hover:scale-110 transition-transform">
            {totalItems}
        </div>
    );
}

function App() {
    const products: ProductCardType[] = [
        {
            id: 1,
            title: "Бездротові навушники-вкладиші",
            image: "https://sony.scene7.com/is/image/sonyglobalsolutions/WF-1000XM6(E6)_Platinum%20Silver?$primaryshotPreset$&fmt=png-alpha",
            price: 2500,
            discountPercent: 10,
            rating: 3,
            reviewsNumber: 120,
        },
        {
            id: 2,
            title: "Bluetooth навушники Sony",
            image: "https://bsimg.nl/images/sony-wh-1000xm5-zwart_7.png/WIN8Gb7DvXpXeG2UMKxhDUdvlUw%3D/fit-in/365x365/filters%3Aformat%28png%29%3Aupscale%28%29",
            price: 4200,
            discountPercent: 0,
            rating: 4.8,
            reviewsNumber: 340,
        },
        {
            id: 3,
            title: "Навушники JBL Tune 500",
            image: "https://images.ctfassets.net/2y8j7g33j6ql/2ILPq60OISQjypQCTjiBt6/87aa3a63c17e120601e4f905fec9414a/JBL_TUNE_500BT_ProductImage_Folded_Hero.png",
            price: 1800,
            discountPercent: 15,
            rating: 4.5,
            reviewsNumber: 89,
        },
    ];

    return (
        <>
            <BasketCounter />
            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}

export default App;