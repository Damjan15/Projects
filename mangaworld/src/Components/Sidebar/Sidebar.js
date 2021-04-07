import { BsBook } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <BsBook />
                <h2>MangaWorld</h2>
            </div>

            <div className="sidebar__menu">
                <Link to="/">Home</Link>
                <Link to="/">Action</Link>
                <Link to="/">Adventure</Link>
                <Link to="/">Comedy</Link>
                <Link to="/">Mystery</Link>
                <Link to="/">Drama</Link>
                <Link to="/">Fantasy</Link>
                <Link to="/">Historical</Link>
                <Link to="/">Horror</Link>
                <Link to="/">Martial Arts</Link>
                <Link to="/">Romance</Link>
                <Link to="/">School Life</Link>
            </div>
        </div>
    )
}

export default Sidebar
