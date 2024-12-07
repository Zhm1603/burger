import React from "react";
import Header from "../../components/Header";
import BurgerCountSection from "../../components/BurgerCountSection";
import BurgerDescriptionSection from "../../components/BurgerDescriptionSection";
import ApplyCouponSection from "../../components/ApplyCouponSection";
const MainPage = () =>{
    return(
        <div>
            <Header>Your cart</Header>
            <BurgerDescriptionSection />
            <BurgerCountSection></BurgerCountSection>
            <Header>Apply coupon</Header>
            <ApplyCouponSection></ApplyCouponSection>
        </div>
    )
};
export default MainPage;