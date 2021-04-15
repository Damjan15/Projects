import db from "../../db";
import { useState } from "react"
import Card from "../Card/Card"
import { RowContainer, RowH1, RowWrapper } from "./row.styles"

const Row = () => {
    const [ products, setProducts ] = useState([]);

    console.log(db[0].items);


    return (
        <RowContainer>
            <RowH1>Featured Products</RowH1>

            <RowWrapper>
                <Card />
                <Card />
                <Card />
                <Card />
            </RowWrapper>
        </RowContainer>
    )
}

export default Row
