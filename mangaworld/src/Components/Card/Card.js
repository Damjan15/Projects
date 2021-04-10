import "./card.css";

const Card = ({ id, link, image, title }) => {
    return (
        <div className="card">
            <a href={link} target="_blank" rel="noreferrer">
                <div className="card__wrapper">
                    <img src={image} alt=""/>
                </div>
                <h2>{title}</h2>
            </a>
        </div>
    )
}

export default Card
