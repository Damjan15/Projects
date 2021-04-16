import Icon from "./Icon"
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BiSearch, BiMenuAltLeft } from "react-icons/bi";

import headerStyles from "../styles/Header.module.css";

const Header = () => {
    return (
        <div className={headerStyles.wrapper}>
            <div className={headerStyles.iconsContainer}>
                <Icon Icon={FaFacebookF}/>
                <Icon Icon={AiOutlineTwitter} />
                <Icon Icon={AiOutlineInstagram} />
                <Icon Icon={AiOutlineYoutube} />
            </div>

            <div className={headerStyles.menu}>
                <BiMenuAltLeft />
                {/* Drawer Here */}
            </div>

            <div className={headerStyles.logo}>
                <img src="https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/goodnews-logo-2.png" alt=""/>
            </div>

            <div className={headerStyles.search}>
                <button className={headerStyles.btn}>Subscribe</button>
                {/* <Icon Icon={BiSearch} /> */}
                <a href="/" className={headerStyles.searchBtn}>
                    <BiSearch />
                </a>
            </div>
        </div>
    )
}

export default Header
