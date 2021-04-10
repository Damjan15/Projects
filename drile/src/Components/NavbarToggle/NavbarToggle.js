import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbartoggle.css";

const NavbarToggle = () => {
    return (
        <div className="navbarToggle">
                <Link to="/">Home</Link>
                <Link to="/">Shop</Link>
                <Link to="/">Product</Link>
                <Link to="/">Contact</Link>
                <Link to="/" className="cart">
                    Shopping Cart
                    <AiOutlineShoppingCart />
                </Link>
        </div>
    )
}

export default NavbarToggle
