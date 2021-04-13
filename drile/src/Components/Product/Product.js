import Chair from "../../assets/chair.jpg";
import { GrClose } from "react-icons/gr";
import "./product.css";

const Product = ({ image, title, price}) => {
    return (
        <div className="product__container">
        <ul className="product">
            <li className="product__clear">
                <GrClose />
            </li>
            <li className="product__thumbnail">
                <img src={image} alt=""/>
            </li>
            <li className="product__name">{title}</li>
            <li className="product__price">${price}</li>
            <li className="product__quantity">
                <input type="button" value="-" className="minus" />
                <input type="number" value="0" min="0" max="4" step="3"  className="quantity" />
                <input type="button" value="+" className="plus" />
            </li>
        </ul>
        </div>
    )
}

export default Product
