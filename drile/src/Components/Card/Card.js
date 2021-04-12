import "./card.css";

const Card = ({ image, cover, title, price }) => {
    return (
        <div className="card">
            <div className="card__thumbnail">
                <a href="/">
                    <div className="card__images">
                        <img src={image} className="front-image" alt=""/>
                        <img src={cover} className="back-image" alt=""/>
                    </div>
                </a>
            </div>

            <div className="card__content">
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default Card
