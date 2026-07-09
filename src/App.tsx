import './App.css';
import ProductCard from "./components/ProductCard.tsx";
import type { ProductCardType } from "./types/ProductCardType.ts";

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
    ];

    return (
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default App;