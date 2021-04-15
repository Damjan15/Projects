import CartRow from "../CartRow/CartRow"
import CartTotal from "../CartTotal/CartTotal"
import { CartBtn, CartButtons, CartContainer, CartTitle, CartWrapper } from "./cartbody.styles"

const CartBody = () => {
    return (
        <CartWrapper>

            <CartContainer>
                <CartTitle>Your cart items</CartTitle>

                <CartRow />
                <CartRow />
                <CartRow />

                <CartButtons>
                    <CartBtn>Continue Shopping</CartBtn>
                    <CartBtn selected>Clear Shopping Cart</CartBtn>
                </CartButtons>

                <CartTotal />
            </CartContainer>
        </CartWrapper>
    )
}

export default CartBody
