import { BiSearch } from "react-icons/bi";
import "./search.css";

const Search = () => {
    return (
        <div className="search">
            <div className="search__heading">
                <h1>Explore Books</h1>
            </div>
            <form className="search__form">
                <BiSearch />
                <input type="text" placeholder="Search Mangas"/>
            </form>
        </div>
    )
}

export default Search
