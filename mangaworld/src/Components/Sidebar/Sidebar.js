import { BsBook } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/" className="sidebar__logo">
                <BsBook />
                <h2>MangaWorld</h2>
            </Link>

            <div className="sidebar__menu">
                <Link to="/">Home</Link>
                <Link to="/mangas/1">Action</Link>
                <Link to="/mangas/2">Adventure</Link>
                <Link to="/mangas/4">Comedy</Link>
                <Link to="/mangas/7">Mystery</Link>
                <Link to="/mangas/8">Drama</Link>
                <Link to="/mangas/10">Fantasy</Link>
                <Link to="/mangas/13">Historical</Link>
                <Link to="/mangas/14">Horror</Link>
                <Link to="/mangas/22">Romance</Link>
                <Link to="/mangas/23">School Life</Link>
            </div>
        </div>
    )
}

export default Sidebar
