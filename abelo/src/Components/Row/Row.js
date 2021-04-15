import Card from "../Card/Card"
import { RowContainer, RowH1, RowWrapper } from "./row.styles"

const Row = () => {
    return (
        <RowContainer>
            <RowH1>Featured Products</RowH1>

            <RowWrapper>
                {/* Card */}
                <Card />
                {/* Card */}
                <Card />
                <Card />
                <Card />
            </RowWrapper>
        </RowContainer>
    )
}

export default Row
