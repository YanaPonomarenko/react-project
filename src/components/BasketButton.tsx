import type { BasketButtonType } from "../types/BasketButtonType.ts";

type BasketProduct = {
    id: number;
    amount: number;
};

function BasketButton(props: { btn: BasketButtonType; productId: number }) {
    function addToBasket() {
        const basketProducts: BasketProduct[] = JSON.parse(
            localStorage.getItem('basketProducts') || '[]'
        );

        const existingProduct = basketProducts.find(
            (item: BasketProduct) => item.id === props.productId
        );

        if (existingProduct) {
            existingProduct.amount += 1;
        } else {
            basketProducts.push({ id: props.productId, amount: 1 });
        }

        localStorage.setItem('basketProducts', JSON.stringify(basketProducts));

        // Триггерим событие для обновления счетчика
        window.dispatchEvent(new Event('basketUpdated'));

        // Визуальная анимация
        const btn = document.getElementById(`basket-${props.productId}`);
        if (btn) {
            btn.classList.add('scale-125');
            setTimeout(() => btn.classList.remove('scale-125'), 200);
        }
    }

    return (
        <button
            id={`basket-${props.productId}`}
            className="p-2 hover:scale-110 transition-transform duration-200 cursor-pointer"
            onClick={addToBasket}
        >
            <img className="h-7 w-7" src={props.btn.image} alt="basket" />
        </button>
    );
}

export default BasketButton;