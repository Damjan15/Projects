import ProductImage from "../../assets/AcerNitro.png";
import { GrClose } from "react-icons/gr";
import { CartCloseH3, CartRowClose, CartRowImage, CartRowImageBox, CartRowPrice, CartRowPriceBox, CartRowTitle, CartRowTitleBox, CartRowWrapper } from "./cartrow.styles"

const CartRow = () => {
    return (
        <CartRowWrapper>
            <CartRowImageBox>
                <CartRowImage src={ProductImage} />
            </CartRowImageBox>

            <CartRowTitleBox>
                <CartRowTitle>Product Name</CartRowTitle>
            </CartRowTitleBox>

            <CartRowPriceBox>
                <CartRowPrice>$20.00</CartRowPrice>
            </CartRowPriceBox>

            <CartRowClose>
                <CartCloseH3>Remove From Cart</CartCloseH3>
                <GrClose />
            </CartRowClose>
        </CartRowWrapper>
    )
}

export default CartRow
