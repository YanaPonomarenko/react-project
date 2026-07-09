import type { ProductCardType } from "../types/ProductCardType.ts";
import BasketButton from "./BasketButton.tsx";
import type { BasketButtonType } from "../types/BasketButtonType.ts";
import basketImg from "../assets/basket.png";
import commentImg from "../assets/comment.png";
import redHeart from "../assets/red-heart.png";
import heart from "../assets/heart.png";
import { useState } from "react";

function ProductCard(props: { product: ProductCardType }) {
    const basket: BasketButtonType = {
        image: basketImg,
    };

    const [liked, setLiked] = useState<boolean>(() => {
        const selected: number[] = JSON.parse(
            localStorage.getItem("selected") || "[]"
        );
        return selected.includes(props.product.id);
    });

    function likeProduct() {
        const selected: number[] = JSON.parse(
            localStorage.getItem("selected") || "[]"
        );
        const newLiked = !liked;

        if (newLiked) {
            if (!selected.includes(props.product.id)) {
                selected.push(props.product.id);
            }
        } else {
            const updated = selected.filter((id: number) => id !== props.product.id);
            localStorage.setItem("selected", JSON.stringify(updated));
            setLiked(false);
            return;
        }

        localStorage.setItem("selected", JSON.stringify(selected));
        setLiked(true);
    }

    function renderStars(rating: number) {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                );
            } else {
                stars.push(
                    <span key={i} className="text-gray-300 text-sm">★</span>
                );
            }
        }
        return stars;
    }

    const discountedPrice = props.product.price - (props.product.price * props.product.discountPercent) / 100;

    return (
        <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-md p-4 hover:shadow-xl transition-shadow">
            <div className="relative flex h-56 items-center justify-center">
                <img
                    className="max-h-full max-w-full object-contain"
                    src={props.product.image}
                    alt={props.product.title}
                    loading="lazy"
                />

                <button
                    className="absolute right-2 top-2 p-1 bg-white/70 rounded-md hover:bg-white/90 transition-colors"
                    onClick={likeProduct}
                >
                    <img
                        className="h-6 w-6 cursor-pointer"
                        src={liked ? redHeart : heart}
                        alt="heart"
                    />
                </button>
            </div>

            <p className="mt-3 line-clamp-2 text-sm text-gray-800">{props.product.title}</p>

            <div className="mt-2 flex gap-2 text-sm items-center">
                <div className="flex justify-center items-center gap-0.5">
                    {renderStars(props.product.rating)}
                </div>

                <span className="text-gray-600 text-xs">{props.product.rating}</span>

                <div className="flex items-center gap-1 cursor-pointer hover:opacity-40 transition-opacity duration-300 ml-1">
                    <img className="h-4 w-4" alt="comment" src={commentImg} />
                    <span className="text-gray-500 text-xs">{props.product.reviewsNumber}</span>
                </div>
            </div>

            <div className="mt-auto flex items-end justify-between pt-4">
                <div className="flex flex-col min-h-10 justify-center">
                    {props.product.discountPercent > 0 ? (
                        <>
                            <span className="text-sm text-gray-400 line-through">
                                {props.product.price} ₴
                            </span>
                            <span className="text-lg font-bold text-red-500">
                                {discountedPrice} ₴
                            </span>
                            <span className="text-xs text-green-600">
                                -{props.product.discountPercent}%
                            </span>
                        </>
                    ) : (
                        <span className="text-lg font-bold text-gray-800">
                            {props.product.price} ₴
                        </span>
                    )}
                </div>

                <BasketButton btn={basket} productId={props.product.id} />
            </div>
        </div>
    );
}

export default ProductCard;