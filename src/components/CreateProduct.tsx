import type {ProductType} from "../types/ProductType.ts";
import {type ChangeEvent, type SubmitEvent, useState} from "react";

type CreateProductProps = {
    products: ProductType[];
    setProducts: (products: ProductType[]) => void;
}
const CreateProduct = ({products, setProducts}:CreateProductProps)=>{
    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [image, setImage] = useState<string>("");
    const [count, setCount] = useState<number>(0);
    const [is_active, setIsActive] = useState<boolean>(true);
    const [id_category, setIdCategory] = useState<string|number>(0);
    const handlerSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setProducts([...products as ProductType[],
            {
                id:Date.now().toString(),
                title,
                price,
                image,
                count,
                is_active,
                id_category,
            }
        ]);
        setTitle("");
        setPrice(0);
        setImage("");
        setCount(0);
        setIdCategory(0);
        setIsActive(false);
    }
    return(
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <form onSubmit={handlerSubmit} className="flex flex-col w-1/2 bg-white p-8 rounded-xl shadow-lg space-y-4">
                <div >
                    <label className="block mb-1 text-sm font-medium">
                        Назва товару
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        placeholder="Введіть назву"
                        className="w-full px-3 py-2 border rounded-lg"
                        onChange={(e:ChangeEvent<HTMLInputElement>) => {
                            setTitle(e.target.value)
                        }}
                    />
                </div>

                {/* Ціна */}
                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Ціна
                    </label>
                    <input
                        type="number"
                        name="price"
                        placeholder="0"
                        value={price}
                        min={price}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => {
                            setPrice(+e.target.value)
                        }}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>

                {/* URL зображення */}
                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Зображення (URL)
                    </label>
                    <input
                        type="text"
                        name="image"
                        value={image}
                        className="w-full px-3 py-2 border rounded-lg"
                        onChange={(e:ChangeEvent<HTMLInputElement>) => {
                            setImage(e.target.value)
                        }}
                    />
                </div>

                {/* Кількість */}
                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Кількість
                    </label>
                    <input
                        type="number"
                        name="count"
                        placeholder="0"
                        value={count}
                        min="0"
                        className="w-full px-3 py-2 border rounded-lg"
                        onChange={(e:ChangeEvent<HTMLInputElement>) => {
                            setCount(+e.target.value)
                        }}
                    />
                </div>

                {/* Категорія */}
                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Категорія
                    </label>
                    <select
                        name="id_category"
                        className="w-full px-3 py-2 border rounded-lg"
                        value={id_category}
                        onChange={
                            (e: ChangeEvent<HTMLSelectElement>) => {
                                setIdCategory(+e.target.value);
                            }
                        }
                    >
                        <option value="">Оберіть категорію</option>
                        <option value="1">Ноутбуки</option>
                        <option value="2">Смартфони</option>
                        <option value="3">Навушники</option>
                    </select>
                </div>

                {/* Активний */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="is_active"
                        id="is_active"
                        checked={is_active}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => {
                            setIsActive(e.target.checked)
                        }}
                    />
                    <label htmlFor="is_active">
                        Активний товар
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-lg"
                >
                    Створити товар
                </button>
            </form></div>)
}
export default CreateProduct;