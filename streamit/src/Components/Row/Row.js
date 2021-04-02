import axios from "axios";
import { useState, useEffect } from "react"
import Poster from "../Poster/Poster";
import { RowBody, RowHeading, RowWrapper } from "./row.styles";

const Row = ({ fetchUrl, title }) => {
    const [ posters, setPosters ] = useState([]);
    useEffect(() => {
        axios.request(`https://api.themoviedb.org/3/${fetchUrl}`)
        .then((res) => setPosters(res.data));
    }, [  fetchUrl ])

    return (
        <RowWrapper>
            <RowHeading>{title}</RowHeading>

            <RowBody>
                { console.log(posters)}
                <Poster />
                <Poster />
                <Poster />
                <Poster />
                <Poster />
            </RowBody>
        </RowWrapper>
    )
}

export default Row
