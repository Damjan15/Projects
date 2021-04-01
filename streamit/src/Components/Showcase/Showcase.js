import PosterLarge from "../PosterLarge/PosterLarge"
import { ShowcaseBody, ShowcaseWrapper, ShowcaseH1 } from "./showcase.styles"

const Showcase = () => {
    return (
        <ShowcaseWrapper>

            <ShowcaseH1>Showcase</ShowcaseH1>

            <ShowcaseBody>
                <PosterLarge />
                <PosterLarge />
                <PosterLarge />
            </ShowcaseBody>
        </ShowcaseWrapper>
    )
}

export default Showcase
