import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import Subtotal from "../../Components/Subtotal/Subtotal";
import "./cart.css";
import Product from "../../Components/Product/Product";
import { useSelector } from "react-redux";
import { selectCart } from "../../features/productSlice";


export const Cart = () => {
    const cart = useSelector(selectCart);


    return (
        <div className="cartPage">
            <div className="cart__breadcrumps">
                <Link to="/">Home</Link>
                <BsChevronRight />
                <Link to="/">Shopping Cart</Link>
            </div>


            <div className="cart__itemCount">
                <h3>Your selection <span className="bold">( {cart?.length} { cart?.length === 1 ? "item" : "items"} )</span></h3>
            </div>

            <div className="cart__body">
                { cart?.map(({ image, title, price}) => (
                    <Product title={title} image={image} price={price} />
                ))}
                <Subtotal />
            </div>
        </div>
    )
}
