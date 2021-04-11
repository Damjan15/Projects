import { BiMap } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import {  AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Logo from "../../assets/logo.png"
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer__wrapper">
                <ul className="footer__left">
                    <li>
                        <img src={Logo} alt=""/>
                    </li>
                    <li>
                        <BiMap />
                        11 The Avenue, United of Kingdom
                    </li>
                    <li>
                        <AiOutlineMail />
                        drile@gmail.com
                    </li>
                    <li>
                        <AiOutlinePhone />
                        ( +00 ) 025-1234-5678
                    </li>
                </ul>
                <ul className="footer__center">
                    <li>About Us</li>
                    <li>Delivery Info</li>
                    <li>Online Tracking</li>
                    <li>Order Tracking</li>
                    <li>My Account</li>
                    <li>Help</li>
                </ul>
                <div className="footer__right">
                    <h3>Newsletter</h3>
                    <p>Enjoy our newsletter to stay updated with the latest news and specials sales.</p>

                    <div className="footer__form">
                        <input type="text" placeholder="Enter your email address"/>
                        <FaLocationArrow />
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p>&copy; Drile. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
