import cardStyles from "../styles/Card.module.css";

const Card = () => {
    return (
        <div className={cardStyles.wrapper}>
            <a href="/">
            <div className={cardStyles.imageHolder}>
                <img src="https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2017/12/business_card-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" alt=""/>
            </div>
            <div className={cardStyles.content}>
                <h3 className={cardStyles.title}>Podcast: Tesla Semi service program, Audi e-tron Q4, Mercedes-Benz EQS, and more</h3>
                <p className={cardStyles.author}>Fred Lambert</p>
            </div>
            </a>
        </div>
    )
}

export default Card
