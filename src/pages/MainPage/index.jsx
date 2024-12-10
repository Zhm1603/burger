import React from "react";
import Header from "../../components/Header";
import BurgerCountSection from "../../components/BurgerCountSection";
import BurgerDescriptionSection from "../../components/BurgerDescriptionSection";
import ApplyCouponSection from "../../components/ApplyCouponSection";
import './style.css';
const MainPage = () =>{
    return(
        <div className='container'>
            <div className="first-container">
                <Header>Your cart</Header>
                <BurgerDescriptionSection />
                <BurgerCountSection></BurgerCountSection>
            </div>
            <div className="second-container">
                <Header >Apply coupon</Header>
                <ApplyCouponSection></ApplyCouponSection>
            </div>
        </div>
    )
};
export default MainPage;