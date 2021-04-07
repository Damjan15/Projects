import "./card.css";

const Card = () => {
    return (
        <div className="card">
            <a href="/">
                <div className="card__wrapper">
                    <img src="https://cdn.myanimelist.net/images/manga/1/209370.jpg?s=370b883c4f7f4fe08e661f89fbf0a1a5" alt=""/>
                </div>
                <h2>Manga Title</h2>
            </a>
        </div>
    )
}

export default Card
