import navbarStyles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={navbarStyles.wrapper}>
            <ul className={navbarStyles.menu}>
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
    )
}

export default Navbar
