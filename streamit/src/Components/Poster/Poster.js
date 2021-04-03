import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectedPoster } from "../../features/posterSlice";
import { PosterH3, PosterImage, PosterInfo, PosterOverview, PosterSpan, PosterWrapper } from "./poster.styles";

const Poster = ({ id, image, title, rating, overview }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const IMAGE_URL = "https://image.tmdb.org/t/p/original/";

    
    // =========== Truncate Text ==============
    const truncate = ( str, num ) => {
        if (str.length <= num) {
            return str;
        }

        return str.slice(0, num) + "...";
    }

    /* ============ Redux Select Poster ================ */
    const openPoster = () => {
        dispatch(selectedPoster({ id, image, title, rating, overview }));
        history.push(`/details/${id}`);
    }

    return (
        <PosterWrapper onClick={openPoster}>
            <PosterImage src={`${IMAGE_URL}${image}`} />

            <PosterInfo>
                <PosterH3>{truncate(title, 10)}</PosterH3>
                <PosterSpan>{rating}</PosterSpan>
            </PosterInfo>
            <PosterOverview>
                <PosterH3>Overview</PosterH3>
                { overview }
            </PosterOverview>
        </PosterWrapper>
    )
}

export default Poster
