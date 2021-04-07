import HomeNav from "../../Components/HomeNav/HomeNav";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/HeroImage.png";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero__wrapper">
          <div className="hero__left">
            <HomeNav />
            <h1>Read Your Favorite <span>Manga</span></h1>
            <p>
              All of your favorite mangas in one place. From action to comedy we
              have it all here
            </p>
            <Link to="/" className="hero__btn">
              Discover Books
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
