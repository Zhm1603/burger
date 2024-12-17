import React from "react";
import "./style.css";

const CheckoutSection = ({ totalPrice, isDisabled }) => {
    // shippingFee move to constants.js

    const shippingFee = 4.99;
    const discount = isDisabled ? (totalPrice * 10) / 100 : 0;
    const finalPrice = totalPrice + shippingFee - discount;

    // Mapping. Классы не менял, но вообще в этом случае классы тоже одним именем называются

    const pricesData = [
        {
            title: "Your cart subtotal:",
            value: shippingFee,
            className: "check-price sub",
        },
        {
            title: "Discount through applied coupons:",
            value: discount,
            className: "check-price sale",
        },
        {
            title: "Shipping fees:",
            value: finalPrice,
            className: "check-price",
        },
    ];

    return (
        <div className="checkout-part">
            {pricesData.map((priceData) => {
                <div className="details">
                    <span className="check-text">{title}</span>
                    <span className={priceData.className}>
                        {totalPrice.value.toFixed(2)}
                    </span>
                </div>;
            })}

            {/* Это можно удалить: */}
            {/* <span className="check-text">Discount through applied coupons:</span> */}
            {/* <span className="check-price sale">${discount.toFixed(2)}</span> */}

            {/* <span className="check-text">Shipping fees:</span> */}
            {/* <span className="check-price">${shippingFee.toFixed(2)}</span> */}
            <div className="checkout-footer">
                {/* Весь прописной текст по возможности переносится в константы. В верстке не должно быть текста. Иногда бывают исключения, но редко прям. */}
                <span className="final-price">
                    Final Price: ${finalPrice.toFixed(2)}
                </span>
                <button
                    className="checkout-button"
                    onClick={() => alert(finalPrice.toFixed(2))}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default CheckoutSection;
//ревью
