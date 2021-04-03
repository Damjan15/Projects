import { useSelector } from "react-redux";
import {  selectOpenPoster } from "../../features/posterSlice";
import { DetailsWrapper, DetailsLeft, DetailsImage, DetailsRight, DetailsH1, DetailsRating, DetailsH3 } from "./details.styles";

export const Details = () => {
    const poster = useSelector(selectOpenPoster);
    const IMAGE_URL = "https://image.tmdb.org/t/p/original/";

    return (
        <DetailsWrapper style={{ backgroundImage: `url("${IMAGE_URL}${poster?.image}")`}}>
            <DetailsLeft>
                <DetailsImage src={`${IMAGE_URL}${poster?.image}`} />
            </DetailsLeft>

            <DetailsRight>
                <DetailsH1>{poster?.title}</DetailsH1>
                <DetailsRating>{poster?.rating}</DetailsRating>

                <DetailsH3>Overview</DetailsH3>
                { poster?.overview }
            </DetailsRight>
        </DetailsWrapper>
    )
}
