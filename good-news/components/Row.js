import Card from "./Card"
import Heading from "./Heading"
import rowStyles from "../styles/Row.module.css";

const Row = () => {
    return (
        <div className={rowStyles.wrapper}>
            <Heading />

            <div className={rowStyles.body}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Row
