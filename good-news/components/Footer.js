import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Icon from "./Icon";
import footerStyles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={footerStyles.wrapper}>
            <div className={footerStyles.container}>
                <div className={footerStyles.iconsContainer}>
                    <Icon Icon={FaFacebookF} />
                    <Icon Icon={AiOutlineTwitter} />
                    <Icon Icon={AiOutlineInstagram} />
                    <Icon Icon={AiOutlineYoutube} />
                </div>

                <div className={footerStyles.menu}>
                    <li className={footerStyles.item}>Home</li>
                    <li className={footerStyles.item}>Travel</li>
                    <li className={footerStyles.item}>Sports</li>
                </div>

                <div className={footerStyles.copyright}>
                    &copy; 2021 Damjan Stamenov.
                </div>
            </div>
        </div>
    )
}

export default Footer
