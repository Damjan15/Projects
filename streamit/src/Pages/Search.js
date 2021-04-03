import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { selectOpenTerm } from "../features/posterSlice";

export const Search = () => {
    const term = useSelector(selectOpenTerm);
    const [ data, setData ] = useState([]);

    useEffect(() => {
        axios.request(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`).then(res => setData(res))

    }, [])
    return (
        <div>
            <h1>Search page</h1>
            <h2>The search term is: </h2>
            { console.log(data.data) }
        </div>
    )
}
