import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/logo.png";
import "./navbar.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../features/productSlice";
import { useEffect } from "react";

const Navbar = () => {
    const [ open, setOpen ] = useState(false);
    const [ fixed, setFixed ] = useState(false);
    const cart = useSelector(selectCart);

    // Toggle mobile navbar
    const toggle = () => {
        setOpen(!open);
        console.log(open);
    }
    
    // Show the navbar on scroll
    const showNav = () => {
        console.log(window.scrollY);

        if (window.scrollY >= 800) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", showNav);
    }, [])

    return (
        <div className={`navbar ${fixed ? "showNav" : ""}`}>
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
                    <Link to="/">New Products</Link>
                </li>
                <li>
                    <Link to="/">Categories</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>

            <Link to="/cart" className="navbar__dropdown">
                <AiOutlineShoppingCart />
                <span className="navbar__dropdownNumber">
                    { cart?.length}
                </span>
            </Link>
        </div>
    )
}

export default Navbar
