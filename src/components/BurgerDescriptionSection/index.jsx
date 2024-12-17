import cheeseburger from "../../asserts/cheeseburger.png";
import "./style.css";
// после импортов всегда должен быть отступ

const BurgerDescriptionSection = () => {
    return (
        <div className="content">
            {/* одинарные тэги нужно оставлять одинарными */}
            {/* <img className="burger-img" src={cheeseburger} alt="burger"></img> */}
            <img className="burger-img" src={cheeseburger} alt="burger" />
            <div class="text-wrapper">
                <span className="title-cheese-burger">Cheese Burger</span>
                <p className="text">Extra Spicy</p>
                <p className="text text_2">No mayo</p>
            </div>
        </div>
    );
};

export default BurgerDescriptionSection;
