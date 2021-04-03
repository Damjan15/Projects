import axios from "axios";
import { useEffect, useState } from "react";
import PosterLarge from "../PosterLarge/PosterLarge"
import { ShowcaseBody, ShowcaseWrapper, ShowcaseH1 } from "./showcase.styles"

const Showcase = () => {
    const [ showcase, setShowcase ] = useState([]);
    

    useEffect(() => {
        axios.request(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
        .then((response) => setShowcase(response.data?.results))

    }, [])
    return (
        <ShowcaseWrapper>

            <ShowcaseH1>Showcase</ShowcaseH1>

            <ShowcaseBody>
                { showcase.slice(0, 3).map(poster => (
                    <PosterLarge image={poster?.backdrop_path} title={poster?.title} overview={poster?.overview}  />
                ))}
            </ShowcaseBody>
        </ShowcaseWrapper>
    )
}

export default Showcase
