import { Link } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import "./homenav.css";

const HomeNav = () => {
  return (
    <div className="homeNav">
      <div className="homeNav__left">
        <BsBook />
      </div>
      <div className="mobileIcon">
        <AiOutlineMenu />
      </div>
      <ul className="homeNav__right">
        <li>
          <Link to="/">Explore Books</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeNav;
