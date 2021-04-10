import FrontImage from "../../assets/chair-front.jpg";
import BackImage from "../../assets/chair-back.jpg";
import "./card.css";

const Card = () => {
    return (
        <div className="card">
            <div className="card__thumbnail">
                <a href="/">
                    <div className="card__images">
                        <img src={FrontImage} className="front-image" alt=""/>
                        <img src={BackImage} className="back-image" alt=""/>
                    </div>
                </a>
            </div>

            <div className="card__content">
                <h3>Vipp Armchair Black Leather</h3>
                <p>$220.0</p>
            </div>
        </div>
    )
}

export default Card
