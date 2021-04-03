import { PosterLargeWrapper, PosterLargeImage, PosterLargeOverview, PosterLargeTitle } from "./posterlarge.styles";

const PosterLarge = ({ image, title, overview}) => {
    const IMAGE_URL = "https://image.tmdb.org/t/p/original/";

    // =========== Truncate Text ==============
    const truncate = ( str, num ) => {
        if (str.length <= num) {
            return str;
        }

        return str.slice(0, num) + "...";
    }

    return (
        <PosterLargeWrapper>
            <PosterLargeImage src={`${IMAGE_URL}${image}`} />

            <PosterLargeOverview>
                <PosterLargeTitle>{title}</PosterLargeTitle>
                {truncate(overview, 150)}
            </PosterLargeOverview>
        </PosterLargeWrapper>
    )
}

export default PosterLarge
