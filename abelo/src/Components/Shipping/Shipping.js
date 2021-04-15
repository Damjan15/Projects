import ShippingBox from "../ShippingBox/ShippingBox";
import { ShippingRow, ShippingWrapper } from "./shipping.styles";

const Shipping = () => {
    return (
        <ShippingRow>

            <ShippingWrapper>
            <ShippingBox />
            <ShippingBox />
            <ShippingBox />
            <ShippingBox />
            </ShippingWrapper>
        </ShippingRow>
    )
}

export default Shipping
