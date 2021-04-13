import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { selected } from "../../features/productSlice";
import "./card.css";

const Card = ({ id, image, cover, title, price }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const selectProduct = () => {
        dispatch(selected({ id, image, cover, title, price}));
        history.push(`/details`);
    }

    return (
        <div className="card">
            <div className="card__thumbnail">
                <Link onClick={selectProduct}>
                    <div className="card__images">
                        <img src={image} className="front-image" alt=""/>
                        <img src={cover} className="back-image" alt=""/>
                    </div>
                </Link>
            </div>

            <div className="card__content">
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default Card
