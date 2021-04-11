import Carousel from "../Components/Carousel/Carousel"
import Categories from "../Components/Categories/Categories"
import Products from "../Components/Products/Products"
import Sale from "../Components/Sale/Sale"

export const Home = () => {
    return (
        <div>
            <Carousel />
            <Products />
            <Categories />
            <Sale />
        </div>
    )
}
