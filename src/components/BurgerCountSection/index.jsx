import { useState } from "react";


const BurgerCountSection = () =>{
    const BURGER_PRICE = 11.99;
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);
    const changeCount = (event) => {
        if (event.target.name === "plus") {
            const newCount = count + 1;
            setCount(newCount);
            setPrice(newCount * BURGER_PRICE);
        } else if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
            setPrice(newCount * BURGER_PRICE);
        } else {
            alert("Невозможно удалить последний бургер!");
        }
    };
    return(
        <div class="count">
            <button name="plus" class="button_plus" onClick={changeCount}>+</button>
            <div class="digit">{count}</div>
            <button name="minus" class="button_minus" onClick={changeCount}>-</button>
            <div class="food-price">
                <span  class="basket-price">${price.toFixed(2)}</span>
            </div>
        </div>
    )
}
export default BurgerCountSection;