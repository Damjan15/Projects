import Chair from "../../assets/chair.jpg";
import { GrClose } from "react-icons/gr";
import "./product.css";

const Product = () => {
    return (
        <div className="product__container">
        <ul className="product">
            <li className="product__clear">
                <GrClose />
            </li>
            <li className="product__thumbnail">
                <img src={Chair} alt=""/>
            </li>
            <li className="product__name">Globe Electric Tech Series</li>
            <li className="product__price">$460.0</li>
            <li className="product__quantity">
                <input type="button" value="-" className="minus" />
                <input type="number" value="0" min="0" max="4" step="3"  className="quantity" />
                <input type="button" value="+" className="plus" />
            </li>
            <li className="product__total">
                $460$
            </li>
        </ul>

        <div className="product__clear">
            <button>Clear Cart</button>
        </div>
        </div>
    )
}

export default Product
