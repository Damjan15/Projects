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
            { console.log(posters.results)}
            <RowBody>
                { posters.results?.map(card => (
                    <Poster key={card?.id} id={card?.id} image={card?.poster_path} title={card?.name || card?.title || card?.original_title} overview={card?.overview} rating={card?.vote_average} />
                ))}
            </RowBody>
        </RowWrapper>
    )
}

export default Row
