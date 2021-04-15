import { TotalButton, TotalContainer, TotalPrice, TotalTitle, TotalWrapper } from "./carttotal.styles"

const CartTotal = () => {
    return (
        <TotalContainer>
            <TotalWrapper>
                <TotalTitle>Grand Total</TotalTitle>
                <TotalPrice>$260.00</TotalPrice>
            </TotalWrapper>

            <TotalButton>Procceed to checkout</TotalButton>
        </TotalContainer>
    )
}

export default CartTotal
