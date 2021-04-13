import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import Subtotal from "../../Components/Subtotal/Subtotal";
import "./cart.css";
import Product from "../../Components/Product/Product";


export const Cart = () => {
    return (
        <div className="cartPage">
            <div className="cart__breadcrumps">
                <Link to="/">Home</Link>
                <BsChevronRight />
                <Link to="/">Shopping Cart</Link>
            </div>

            <div className="cart__itemCount">
                <h3>Your selection <span className="bold">( 1 item )</span></h3>
            </div>

            <div className="cart__body">
                <Product />
                <Subtotal />
            </div>
        </div>
    )
}
