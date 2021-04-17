import Card from "./Card"
import rowStyles from "../styles/Row.module.css";

const Row = ({ data }) => {
    return (
        <div className={rowStyles.wrapper}>
            <h1 className={rowStyles.title}>Latest</h1>
            <div className={rowStyles.body}>
                { data?.articles?.map(article => (
                    <Card key={article?.id} link={article?.url} title={article?.title} image={article?.urlToImage} author={article?.author} />
                ))}
            </div>
        </div>
    )
}

export default Row;