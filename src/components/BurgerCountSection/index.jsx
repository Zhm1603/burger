import React, { useState } from "react";

const BurgerCountSection = ({ onPriceChange }) => {
    const BURGER_PRICE = 11.99;
    const [count, setCount] = useState(0);

    const changeCount = (event) => {
        let newCount = count;
        if (event.target.name === "plus") {
            newCount = count + 1;
        } else if (count > 0) {
            newCount = count - 1;
        } else {
            alert("Невозможно удалить последний бургер!");
            return;
        }
        setCount(newCount);
        onPriceChange(newCount * BURGER_PRICE);
    };

    return (
        <div className="count">
            <button 
            name="plus" 
            className="button_plus" 
            onClick={changeCount}>+</button>
            <div className="digit">{count}</div>
            <button 
            name="minus" 
            className="button_minus" 
            onClick={changeCount}>-</button>
            <div className="food-price">
                <span className="basket-price">${(count * BURGER_PRICE).toFixed(2)}</span>
            </div>
        </div>
    );
};

export default BurgerCountSection;
