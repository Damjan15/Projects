import { useState } from "react";
import Slider from "react-slick";
import lamps from "../../db/lamps";
import sofas from "../../db/sofas";
import chairs from "../../db/chairs";
import beds from "../../db/beds";
import Card from "../Card/Card";
import CategoryBox from "../CategoryBox/CategoryBox"
import CategoryLamp from "../../assets/category-lamp.jpg"
import CategorySofa from "../../assets/category-sofa.jpg"
import CategoryChair from "../../assets/category-table.jpg"
import CategoryBed from "../../assets/category-bed.jpg"
import { GiBedLamp, GiSofa, GiWoodenChair, GiBed } from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./categories.css";


const Categories = () => {
    const [ products, setProducts ] = useState([]);
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000
    }

    const checkPhoto = (photo) => {
        if (photo === lamps) {
            return (
                <img src={CategoryLamp} alt=""/>
            )
        } else if (photo === sofas) {
            return (
                <img src={CategorySofa} alt=""/>
            )
        } else if (photo === chairs) {
            return (
                <img src={CategoryChair} alt=""/>
            )
        } else if (photo === beds) {
            return (
                <img src={CategoryBed} alt=""/>
            )
        }
    }

    return (
        <div className="categories">
            <h1>Categories</h1>

            <div className="categories__wrapper">
                <div className="categories__top">
                    <ul className="categories__left">
                        <li onClick={() => setProducts(lamps)}>
                            <CategoryBox title="Lamp" Icon={GiBedLamp} products="6"  />
                        </li>
                        <li onClick={() => setProducts(sofas)}>
                            <CategoryBox title="Sofa" Icon={GiSofa} products="6" />
                        </li>
                        <li onClick={() => setProducts(chairs)}>
                            <CategoryBox title="Chairs" Icon={GiWoodenChair} products="6"  />
                        </li>
                        <li onClick={() => setProducts(beds)}>
                            <CategoryBox title="Beds" Icon={GiBed} products="6"  />
                        </li>
                    </ul>

                    <div className="categories__right">
                        { checkPhoto(products)}
                    </div>
                </div>
                <div className="categories__bottom">
                    { products.map( product => (
                        <Card title={product?.title} image={product?.image} cover={product?.cover} price={product?.price} />
                    ))}
                    { console.log(products)}
                </div>
            </div>
        </div>
    )
}

export default Categories
