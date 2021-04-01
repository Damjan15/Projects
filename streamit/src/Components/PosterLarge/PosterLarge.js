import { PosterLargeWrapper, PosterLargeImage, PosterLargeOverview, PosterLargeTitle } from "./posterlarge.styles";
import Image from "../../assets/longCover.jpg";

const PosterLarge = () => {
    return (
        <PosterLargeWrapper>
            <PosterLargeImage src={Image} />

            <PosterLargeOverview>
                <PosterLargeTitle>Movie Title</PosterLargeTitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic, tempore, itaque eaque aspernatur quis ullam eligendi quasi fugiat fugit officiis ea facilis pariatur aut ipsum voluptate animi repellendus illo!
            </PosterLargeOverview>
        </PosterLargeWrapper>
    )
}

export default PosterLarge
