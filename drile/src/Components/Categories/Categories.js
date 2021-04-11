import Slider from "react-slick";
import Card from "../Card/Card";
import CategoryBox from "../CategoryBox/CategoryBox"
import CategoryLamp from "../../assets/category-lamp.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./categories.css";

const Categories = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000
    }

    return (
        <div className="categories">
            <h1>Categories</h1>

            <div className="categories__wrapper">
                <div className="categories__top">
                    <div className="categories__left">
                        <CategoryBox />
                        <CategoryBox />
                        <CategoryBox />
                        <CategoryBox />
                    </div>

                    <div className="categories__right">
                        <img src={CategoryLamp} alt=""/>
                    </div>
                </div>
                <div className="categories__bottom">
                    <Slider { ...settings }>
                        <div className="categories__slider">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                        <div className="categories__slider">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Categories
