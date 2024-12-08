import React from "react";
import  {useState} from "react";
import Header from "../../components/Header";
import BurgerCountSection from "../../components/BurgerCountSection";
import BurgerDescriptionSection from "../../components/BurgerDescriptionSection";
import ApplyCouponSection from "../../components/ApplyCouponSection";
import CheckoutSection from "../../components/CheckoutSection";
const MainPage = () =>{
    const [totalPrice, setTotalPrice] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false); 
    return(
        <div>
            <Header>Your cart</Header>
            <BurgerDescriptionSection />
            <BurgerCountSection onPriceChange={setTotalPrice}></BurgerCountSection>
            <Header>Apply coupon</Header>
            <ApplyCouponSection isDisabled={isDisabled} setIsDisabled={setIsDisabled}></ApplyCouponSection>
            <Header>Checkout</Header>
            <CheckoutSection totalPrice={totalPrice} isDisabled={isDisabled}></CheckoutSection>
        </div>
    )
};
export default MainPage;