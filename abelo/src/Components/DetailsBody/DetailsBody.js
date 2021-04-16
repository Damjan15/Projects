import { AiFillStar } from "react-icons/ai";
import ProductCover from "../../assets/HPPavilion.png";
import { useStateValue } from "../../context/stateProvider";
import { BodyLeft, BodyRight, BodyWrapper,  ProductBtn, ProductDescription, ProductImage,  ProductPrice, ProductRatings, ProductTitle } from "./detailsbody.styles"

const DetailsBody = () => {
    const [{ selected }] = useStateValue();
    console.log(selected);
    return (
        <BodyWrapper>
            <BodyLeft>
                <ProductImage src={ProductCover} />
            </BodyLeft>

            <BodyRight>
                <ProductTitle>Laptop Name</ProductTitle>
                <ProductRatings>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </ProductRatings>
                <ProductPrice>$21.51</ProductPrice>
                <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat eos quisquam illum odio dignissimos unde sapiente architecto consequatur, ab voluptate eaque soluta, iste doloribus cumque nostrum ut quod cupiditate exercitationem beatae. Dignissimos dolorem fugit vel omnis ipsa, neque quae aut! </ProductDescription>

                <ProductBtn>Add to cart</ProductBtn>
            </BodyRight>
        </BodyWrapper>
    )
}

export default DetailsBody
