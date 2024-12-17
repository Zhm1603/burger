import React, { useState } from "react";
import './style.css';

const ApplyCouponSection = ({ isDisabled, setIsDisabled }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const ApplyCoupon = () => {
        if (inputValue === "sale") {
            alert("Coupon applied!");
            setIsDisabled(true); 
        } else {
            alert("Invalid coupon!");
        }
    };

    return (
        <div className={isDisabled ? "apply-coupon-part-disable" : "apply-coupon-part"}>
            <input
                onChange={handleInputChange}
                value={inputValue}
                id="input-coupon"
                type="text"
                placeholder="Apply your coupons here"
                className="input_field"
            />
            <button onClick={ApplyCoupon} id="apply-coupon" className="apply-button">
                Apply
            </button>
        </div>
    );
};

export default ApplyCouponSection;
