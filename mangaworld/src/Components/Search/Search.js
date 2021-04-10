import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import "./search.css";

const Search = ({ setData }) => {
    const [ term, setTerm ] = useState("");
    const history = useHistory();

    const options = {
        url: 'https://jikan1.p.rapidapi.com/search/manga',
        params: {q: `${term}`},
        headers: {
          'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
        }
    };

    const search = (e) => {
        e.preventDefault();
        history.push("/search");

        axios.request(options).then(function (response) {
            setData(response.data);
        }).catch(function (error) {
            alert(error);
        });

        setTerm("");
    }
    
    return (
        <div className="search">
            <div className="search__heading">
                <h1>Explore Mangas</h1>
            </div>
            <form className="search__form">
                <BiSearch />
                <input type="text" placeholder="Search Mangas" value={term} onChange={(e) => setTerm(e.target.value)}/>
                <button onClick={search}></button>
            </form>
        </div>
    )
}

export default Search
