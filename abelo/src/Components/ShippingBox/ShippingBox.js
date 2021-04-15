import { FaShippingFast } from "react-icons/fa";
import { BoxContent, BoxH3, BoxIcon, BoxP, BoxWrapper } from "./shippingbox.styles"

const ShippingBox = () => {
    return (
        <BoxWrapper>
            <BoxIcon>
                <FaShippingFast />
            </BoxIcon>

            <BoxContent>
                <BoxH3>Free Shipping</BoxH3>
                <BoxP>On all orders over $75.00</BoxP>
            </BoxContent>
        </BoxWrapper>
    )
}

export default ShippingBox
