import Icon from "./Icon";
import Link from "next/link";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core"
import headerStyles from "../styles/Header.module.css";
import { useState } from "react";

const Header = () => {
    const [ toggle, setToggle ] = useState(false);

    const useStyles = makeStyles({
        paper: {
            background: "var(--main)",
            width: "60%",
            padding: "20px"
        }
    })
  
    const classes = useStyles();

  return (
    <div className={headerStyles.wrapper}>
      <div className={headerStyles.iconsContainer}>
        <Icon Icon={FaFacebookF} />
        <Icon Icon={AiOutlineTwitter} />
        <Icon Icon={AiOutlineInstagram} />
        <Icon Icon={AiOutlineYoutube} />
      </div>

      <div className={headerStyles.menu}>
        <BiMenuAltLeft onClick={() => setToggle(!toggle)} />

        <Drawer
          open={toggle}
          anchor="right"
          onClose={() => setToggle(!toggle)}
          classes={{ paper: classes.paper }}
        >
          <div className={headerStyles.drawerMenu}>
          <ul className={headerStyles.menuContainer}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>

                <li>
                    <Link href="/business">
                        <a>Business</a>
                    </Link>
                </li>

                <li>
                    <Link href="/technology">
                        <a>Technology</a>
                    </Link>
                </li>

                <li>
                    <Link href="/science">
                        <a>Science</a>
                    </Link>
                </li>

                <li>
                    <Link href="/health">
                        <a>Health</a>
                    </Link>
                </li>

                <li>
                    <Link href="/sports">
                        <a>Sports</a>
                    </Link>
                </li>

                <li>
                    <Link href="/entertainment">
                        <a>Entertainment</a>
                    </Link>
                </li>
            </ul>
          </div>
        </Drawer>
      </div>

      <div className={headerStyles.logo}>
        <img
          src="https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/goodnews-logo-2.png"
          alt=""
        />
      </div>

      <div className={headerStyles.search}>
        <button className={headerStyles.btn}>Subscribe</button>
      </div>
    </div>
  );
};

export default Header;
