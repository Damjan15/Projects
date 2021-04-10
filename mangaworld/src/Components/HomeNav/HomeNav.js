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
      <div className="homeNav__right">
        <Link to="/mangas/1">Explore Mangas</Link>
      </div>
    </div>
  );
};

export default HomeNav;
