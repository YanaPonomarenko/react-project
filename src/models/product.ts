import type {ProductType} from "../types/ProductType.ts";

const products:ProductType[] = [
    {
        id: 1,
        title: "Ноутбук ASUS Vivobook",
        price: 24999,
        is_active: true,
        image: "laptop.png",
        count: 12,
        id_category: 1,
    },
    {
        id: 2,
        title: "Смартфон IPhone 14 Pro",
        price: 18999,
        is_active: true,
        image: "iphone.png.jpg",
        count: 8,
        id_category: 2,
    },
    {
        id: 3,
        title: "Apple Watch",
        price: 12999,
        is_active: false,
        image: "apple watch s 10.jpg",
        count: 3,
        id_category: 3,
    },
];
export default products;