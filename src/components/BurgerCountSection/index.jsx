import React, { useState } from "react";
import { BURGER_PRICE } from "../../utils/constants";
import "./style.css";

const BurgerCountSection = ({ onPriceChange }) => {
    // статичные переменные выносятся в отдельный файлик с константами

    // const BURGER_PRICE = 11.99;
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

    const CountingField = () => {
        return (
            <div className="plus-minus">
                <button
                    name="plus"
                    className="button_plus"
                    onClick={changeCount}
                >
                    +
                </button>
                <div className="digit">{count}</div>
                <button
                    name="minus"
                    className="button_minus"
                    onClick={changeCount}
                >
                    -
                </button>
            </div>
        );
    };

    return (
        <div className="count">
            <CountingField />
            <div className="food-price">
                <span className="basket-price">
                    {/*  знак доллара не нужен */}$
                    {(count * BURGER_PRICE).toFixed(2)}
                </span>
            </div>
        </div>
    );
};

export default BurgerCountSection;
