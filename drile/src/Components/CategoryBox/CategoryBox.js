import { GiBedLamp } from "react-icons/gi";
import "./categorybox.css";

const CategoryBox = () => {
    return (
        <div className="categoryBox">
            <div className="categoryBox__left">
                <GiBedLamp />
            </div>
            <div className="categoryBox__right">
                <h3>Lamp</h3>
                <p>8 Products</p>
            </div>
        </div>
    )
}

export default CategoryBox
