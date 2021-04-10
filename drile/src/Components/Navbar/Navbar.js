import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/logo.png";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
    const [ open, setOpen ] = useState(false);

    const toggle = () => {
        setOpen(!open);
        console.log(open);
    }
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__brand">
                    <img src={Logo} alt=""/>
                </div>

                <div className="menu">
                    { open ? <AiOutlineClose onClick={toggle} /> : <AiOutlineMenu onClick={toggle} /> }
                </div>
            </div>

            <ul className="navbar__menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Shop</Link>
                </li>
                <li>
                    <Link to="/">Product</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>

            <div className="navbar__dropdown">
                <AiOutlineShoppingCart />
                <div className="navbar__dropdownMenu">
                    <h1>Menu dropdown</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar
