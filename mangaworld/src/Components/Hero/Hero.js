import HeroImage from "../../assets/HeroImage.png";
import HomeNav from "../HomeNav/HomeNav";
import "./hero.css";
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__wrapper">
                <div className="hero__left">
                    <h1>Read Your Favorite Manga</h1>
                    <p>All of your favorite mangas in one place. From action to comedy we have it all here</p>
                </div>
                <div className="hero__right">
                    <img src={HeroImage} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Hero
