import Slider from "react-slick";
import BannerSofa from "../../assets/sofa-banner.png";
import BannerChair from "../../assets/chair-banner.png";
import BannerLamp from "../../assets/lamp-banner.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const Carousel = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000
    }
  return (
    <Slider { ...settings }>
      <div className="container">
        <div className="box__left">
          <h1>Lamps Living Room & More</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            delectus perferendis a natus.
          </p>
          <button className="container__btn">Shop Now</button>
        </div>
        <div className="box__right sofa">
          <img src={BannerSofa} alt="" />
        </div>
      </div>

      <div className="container">
        <div className="box__left">
          <h1>Chairs You'll Love In 2021</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            delectus perferendis a natus.
          </p>
          <button className="container__btn">Shop Now</button>
        </div>
        <div className="box__right chair">
          <img src={BannerChair} alt="" />
        </div>
      </div>

      <div className="container">
        <div className="box__left">
          <h1>Lamps Living Room & More</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            delectus perferendis a natus.
          </p>
          <button className="container__btn">Shop Now</button>
        </div>
        <div className="box__right chair">
          <img src={BannerLamp} alt="" />
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
