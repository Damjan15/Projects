import { Link } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import "./homenav.css";

const HomeNav = () => {
    return (
        <div className="homeNav">
            <div className="homeNav__left">
                <BsBook />
            </div>
            <ul className="homeNav__right">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Explore Books</Link>
                </li>
            </ul>
        </div>
    )
}

export default HomeNav
