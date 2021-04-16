import { useEffect, useState } from "react"
import Card from "../Card/Card"
import { RowContainer, RowH1, RowWrapper } from "./row.styles"

const Row = ({ title, fetchProducts }) => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        setProducts(fetchProducts)
    }, [ fetchProducts ]);

    
    return (
        <RowContainer>
            <RowH1>{title}</RowH1>

            <RowWrapper>
                { products.map(item => (
                    <Card key={item?.id} id={item?.id} title={item?.title} price={item?.price} />
                ))}
            </RowWrapper>
        </RowContainer>
    )
}

export default Row
