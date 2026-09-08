import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { useProducts } from "../hooks/useProducts";

const SearchForm = () => {
    const { products, setFilteredProducts } = useProducts();
    const [message, setMessage] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    function searchProducts(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const value = inputRef.current?.value.trim().toLowerCase();
        if (!value) {
            setFilteredProducts(products);
            setMessage("");
            if (inputRef.current) {
                inputRef.current.value = "";
            }
            return;
        }

        const results = products.filter((product) =>
            product.title.toLowerCase().includes(value)
        );

        if (results.length === 0) {
            setMessage(`Результати пошуку для "${value}". Знайдено товарів 0`);
        } else {
            setMessage(`Результати пошуку для "${value}". Знайдено товарів: ${results.length}`);
        }

        setFilteredProducts(results);
    }

    return (
        <div>
            <div className="bg-neutral-700 flex justify-center">
                <form onSubmit={searchProducts} className="bg-white flex w-full max-w-4xl rounded-lg m-3 h-10">
                    <input
                        ref={inputRef}
                        className="p-2 w-full rounded-l-lg focus:outline-none"
                        type="search"
                        placeholder="Я шукаю..."
                    />
                    <button
                        className="bg-red-600 hover:bg-red-700 cursor-pointer transition-colors duration-300 text-white px-4 rounded-r-lg text-[15px]"
                        type="submit"
                    >
                        Знайти
                    </button>
                </form>
            </div>
            {message && (
                <p className={`text-center py-2 ${message.includes('0') ? 'text-red-500' : 'text-green-600'}`}>
                    {message}
                </p>
            )}
        </div>
    );
};

export default SearchForm;