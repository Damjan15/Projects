import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { selectedPoster } from "../../features/posterSlice";
import { PosterLargeWrapper, PosterLargeImage, PosterLargeOverview, PosterLargeTitle } from "./posterlarge.styles";

const PosterLarge = ({ id, image, title, overview, rating}) => {
    const IMAGE_URL = "https://image.tmdb.org/t/p/original/";
    const dispatch = useDispatch();
    const history = useHistory();


    // =========== Truncate Text ==============
    const truncate = ( str, num ) => {
        if (str.length <= num) {
            return str;
        }

        return str.slice(0, num) + "...";
    }

    /* ============ Redux Select Poster ================ */
    const openPoster = () => {
        dispatch(selectedPoster({ id, image, title, overview, rating }));
        history.push(`/details/${id}`);
    }

    return (
        <PosterLargeWrapper onClick={openPoster}>
            <PosterLargeImage src={`${IMAGE_URL}${image}`} />

            <PosterLargeOverview>
                <PosterLargeTitle>{title}</PosterLargeTitle>
                {truncate(overview, 150)}
            </PosterLargeOverview>
        </PosterLargeWrapper>
    )
}

export default PosterLarge
