import React from "react";

const CheckoutSection = ({ totalPrice, isDisabled }) => {
    const shippingFee = 4.99;
    const discount = isDisabled ? (totalPrice * 10) / 100 : 0;
    const finalPrice = totalPrice + shippingFee - discount;
    
    return (
        <div className="checkout-part">
            <div className="details">
                <span className="check-text">Your cart subtotal:</span>
                <span className="check-price sub">${totalPrice.toFixed(2)}</span>
                
                <span className="check-text">Discount through applied coupons:</span>
                <span className="check-price sale">${discount.toFixed(2)}</span>
                
                <span className="check-text">Shipping fees:</span>
                <span className="check-price">${shippingFee.toFixed(2)}</span>
            </div>
            <div className="checkout-footer">
                <span className="final-price">Final Price: ${finalPrice.toFixed(2)}</span>
                <button className="checkout-button" onClick={()=>alert(finalPrice.toFixed(2))}>Checkout</button>
            </div>
        </div>
    );
};

export default CheckoutSection;
//ревью