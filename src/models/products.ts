import type { ProductCardType } from "../types/ProductCardType";

const productsData: ProductCardType[] = [
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

export default productsData;