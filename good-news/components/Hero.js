import heroStyles from "../styles/Hero.module.css";

const Hero = ({ data }) => {
    return (
        <div className={heroStyles.hero} style={{ backgroundImage: `url("${data.articles[0].urlToImage}")`}}>
            <div className={heroStyles.content}>
                <span className={heroStyles.source}>{data.articles[0].source.name}</span>
                <h1 className={heroStyles.title}>{data.articles[0].title}</h1>
                <p className={heroStyles.description}>{data.articles[0].description}</p>
                <a href={data.articles[0].url} target="_blank" className={heroStyles.btn}>Show More</a>
            </div>
        </div>
    )
}

export default Hero
