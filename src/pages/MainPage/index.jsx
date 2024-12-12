import React from "react";
import  {useState} from "react";
import BurgerCountSection from "../../components/BurgerCountSection";
import BurgerDescriptionSection from "../../components/BurgerDescriptionSection";
import ApplyCouponSection from "../../components/ApplyCouponSection";
import './style.css';
import CheckoutSection from "../../components/CheckoutSection";
import DefaultLayout from "../../layouts/DefaultLayout";

const MainPage = () =>{
    const [totalPrice, setTotalPrice] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false); 

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
        <div>
            <DefaultLayout title={"Your cart"}>
                <div class ="layout-content">
                    <BurgerDescriptionSection />
                    <BurgerCountSection onPriceChange={setTotalPrice}></BurgerCountSection>
                </div> 
            </DefaultLayout>
            <DefaultLayout title={"Apply coupon"}>
                <div class ="layout-content">
                    <ApplyCouponSection 
                    isDisabled={isDisabled} 
                    setIsDisabled={setIsDisabled}></ApplyCouponSection>
                </div>
            </DefaultLayout>
            <DefaultLayout title={"Checkout"}>
                <div class="layout-content">
                    <CheckoutSection 
                    totalPrice={totalPrice} 
                    isDisabled={isDisabled}></CheckoutSection>
                </div>
            </DefaultLayout>
        </div>
    )
};

export default MainPage;