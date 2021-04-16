import { useHistory } from "react-router";
import CardCover from "../../assets/AcerNitro.png";
import { useStateValue } from "../../context/stateProvider";
import { CardWrapper, CardThumbnail, CardImage, CardContent, CardH3, CardP, CardBtn, CardDescription } from "./card.styles"

const Card = ({ id, title, price, image }) => {
    const [{}, dispatch ] = useStateValue();
    const history = useHistory();

    const selectCard = () => {
        dispatch({
            type: "SELECT_CARD",
            item: {
                id,
                title,
                price
            }
        })
        history.push("/details");
    }
    return (
        <CardWrapper>
            <CardThumbnail>
                <CardImage src={CardCover} />
            </CardThumbnail>
            <CardContent>
                <CardH3>{title}</CardH3>
                <CardDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nemo exercitationem facere magnam deserunt accusamus temporibus libero maiores, voluptatibus eaque?</CardDescription>
                
                <CardP>${price}</CardP>

                <CardBtn onClick={selectCard}>View More</CardBtn>
            </CardContent>
        </CardWrapper>
    )
}

export default Card
