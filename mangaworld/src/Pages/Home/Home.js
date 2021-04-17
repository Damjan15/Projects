import { Link } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import HeroImage from "../../assets/HeroImage.png";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero__wrapper">
          <div className="hero__left">
            <div className="hero__header">
              <BsBook />
              <h3>Manga <span>World</span></h3>
            </div>
            <h1>Read Your Favorite <span>Manga</span></h1>
            <p>
              All of your favorite mangas in one place. From action to comedy we
              have it all here
            </p>
            <Link to="/mangas/1" className="hero__btn">
              Discover Mangas
            </Link>
          </div>
          <div className="hero__right">
            <img src={HeroImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
