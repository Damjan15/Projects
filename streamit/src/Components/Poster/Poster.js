import { PosterH3, PosterImage, PosterInfo, PosterOverview, PosterSpan, PosterWrapper } from "./poster.styles";
import Cover from "../../assets/shortCover.jpg";

const Poster = () => {
    return (
        <PosterWrapper>
            <PosterImage src={Cover} />

            <PosterInfo>
                <PosterH3>Title</PosterH3>
                <PosterSpan>9.5</PosterSpan>
            </PosterInfo>
            <PosterOverview>
                <PosterH3>Overview</PosterH3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui provident quae eligendi doloremque in est ipsam saepe maxime deserunt soluta voluptate quasi, veritatis illum laboriosam dolore impedit hic amet dignissimos.
            </PosterOverview>
        </PosterWrapper>
    )
}

export default Poster
