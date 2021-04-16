import postStyles from "../styles/Post.module.css";

const Post = () => {
    return (
        <div className={postStyles.wrapper}>
            <div className={postStyles.thumbnail}>
                <img src="https://d.newsweek.com/en/full/1772300/jason-siesser-chemical-weapon-dark-web-bitcoin.jpg" alt=""/>
            </div>

            <div className={postStyles.content}>
                <h3 className={postStyles.title}>Turkey Bans Crypto, Bitcoin Value Drops</h3>
                <span className={postStyles.author}>By: Scott Reeves</span>
                <p className={postStyles.description}>Bitcoin fell 4.32% in early trading Friday after Turkey banned the use of \"excessively volatile\" cryptocurrencies in commerce. Turkey's central bank said Bitcoin and other cryptocurrencies are unregu…</p>
            </div>
        </div>
    )
}

export default Post
