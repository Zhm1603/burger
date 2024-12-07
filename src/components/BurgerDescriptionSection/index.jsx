import cheeseburger from "../../asserts/cheeseburger.png";
const BurgerDescriptionSection = () =>{
    return(
        <div>
            <img src={cheeseburger} alt="burger"></img>
            <div class="text-wrapper">
                <span >Cheese Burger</span>
                <p>Extra Spicy</p>
                <p>No mayo</p>
            </div>
        </div>
    )
}
export default BurgerDescriptionSection;