import React from "react";
import { useState } from "react";
import BurgerCountSection from "../../components/BurgerCountSection";
import BurgerDescriptionSection from "../../components/BurgerDescriptionSection";
import ApplyCouponSection from "../../components/ApplyCouponSection";
import CheckoutSection from "../../components/CheckoutSection";
import BlockLayout from "../../layouts/BlockLayout";
import "./style.css";
// приоритеты подключений: сначала должен прогружаться реакт
// затем хуки
// затем твои кастомные компоненты
// затем стили

const MainPage = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    return (
        <div className="fragment">
            <BlockLayout title={"Your cart"}>
                <div class="layout-content">
                    <BurgerDescriptionSection />
                    <BurgerCountSection onPriceChange={setTotalPrice} />
                </div>
            </BlockLayout>
            <BlockLayout title={"Apply coupon"}>
                <div class="layout-content">
                    <ApplyCouponSection
                        isDisabled={isDisabled}
                        setIsDisabled={setIsDisabled}
                    />
                </div>
            </BlockLayout>
            <BlockLayout title={"Checkout"}>
                <div class="layout-content">
                    <CheckoutSection
                        totalPrice={totalPrice}
                        isDisabled={isDisabled}
                    />
                </div>
            </BlockLayout>
        </div>
    );
};

export default MainPage;
