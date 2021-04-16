import CardCover from "../../assets/AcerNitro.png";
import { CardWrapper, CardThumbnail, CardImage, CardContent, CardH3, CardP, CardBtn, CardDescription } from "./card.styles"

const Card = ({ id, title, price }) => {
    return (
        <CardWrapper>
            <CardThumbnail>
                <CardImage src={CardCover} />
            </CardThumbnail>
            <CardContent>
                <CardH3>{title}</CardH3>
                <CardDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nemo exercitationem facere magnam deserunt accusamus temporibus libero maiores, voluptatibus eaque?</CardDescription>
                
                <CardP>${price}</CardP>

                <CardBtn>View More</CardBtn>
            </CardContent>
        </CardWrapper>
    )
}

export default Card
