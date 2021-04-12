import { useState, useEffect } from "react";
import Card from "../Card/Card";
import beds from '../../db/beds';
import chairs from "../../db/chairs";
import lamps from "../../db/lamps";
import sofas from "../../db/sofas";
import newProducts from "../../db/new";
import "./products.css";

const Products = () => {
    const default_products = newProducts;
    const [ products, setProducts ] = useState([]);


    // When the page loads we should have a default state with products
    useEffect(() => {
        setProducts(default_products);
    }, [ default_products ]);


    return (
        <div className="products">
            <div className="products__heading">
                <h2>New Products</h2>

                <ul className="products__menu">
                    <li onClick={() => setProducts(chairs)}>Chair</li>
                    <li onClick={() => setProducts(sofas)}>Sofa</li>
                    <li onClick={() => setProducts(lamps)}>Lamp</li>
                    <li onClick={() => setProducts(beds)}>Bed</li>
                </ul>
            </div>
            <div className="products__body">
                { products?.map(product => (
                    <Card key={product?.id} title={product?.title} image={product?.image} cover={product?.cover} price={product?.price} />
                )) }
            </div>
        </div>
    )
}

export default Products
