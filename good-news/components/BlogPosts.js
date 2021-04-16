import Heading from "./Heading"
import Post from "./Post"
import blogStyles from "../styles/Blogposts.module.css";

const BlogPosts = () => {
    return (
        <div className={blogStyles.wrapper}>
            <Heading />

            <div>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default BlogPosts
