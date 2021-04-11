import Card from "../Card/Card";
import "./products.css";
const Products = () => {
    return (
        <div className="products">
            {/* Products Title */}
            <div className="products__heading">
                <h2>New Products</h2>

                <ul className="products__menu">
                    <li>Chair</li>
                    <li>Sofa</li>
                    <li>Lamp</li>
                    <li>Table</li>
                    <li>Bed</li>
                </ul>
            </div>
            <div className="products__body">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Products
