import Card from "../Card/Card";
import "./row.css";

const Row = () => {
    return (
        <div className="row">
            <h1>Row Heading</h1>


            <div className="row__wrapper">
                <Card />
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
