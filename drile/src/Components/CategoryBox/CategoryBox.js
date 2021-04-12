import "./categorybox.css";

const CategoryBox = ({ title, Icon, products, state }) => {
    return (
        <div className="categoryBox" onClick={state}>
            <div className="categoryBox__left">
                <Icon />
            </div>
            <div className="categoryBox__right">
                <h3>{title}</h3>
                <p>{products} Products</p>
            </div>
        </div>
    )
}

export default CategoryBox
