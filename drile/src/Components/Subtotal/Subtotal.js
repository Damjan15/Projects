import "./subtotal.css";

const Subtotal = () => {
    return (
        <div className="subtotal">
            <div className="subtotal__header">
                <span>Subtotal</span>
                <span>$460.00</span>
            </div>

            <div className="subtotal__body">
                <p>Shipping options will be updated during checkout</p>
            </div>

            <div className="subtotal__total">
                <span>Total</span>
                <span>$460</span>
            </div>

            <button className="subtotal__btn">Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
