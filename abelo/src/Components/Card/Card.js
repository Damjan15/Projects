import CardCover from "../../assets/AcerNitro.png";
import { CardWrapper, CardThumbnail, CardImage, CardContent, CardH3, CardP, CardBtn, CardDescription } from "./card.styles"

const Card = () => {
    return (
        <CardWrapper>
            <CardThumbnail>
                <CardImage src={CardCover} />
            </CardThumbnail>
            <CardContent>
                <CardH3>Laptop Name</CardH3>
                <CardDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nemo exercitationem facere magnam deserunt accusamus temporibus libero maiores, voluptatibus eaque?</CardDescription>
                
                <CardP>$21.51</CardP>

                <CardBtn>View More</CardBtn>
            </CardContent>
        </CardWrapper>
    )
}

export default Card
