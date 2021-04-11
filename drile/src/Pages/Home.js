import Carousel from "../Components/Carousel/Carousel"
import Categories from "../Components/Categories/Categories"
import Companies from "../Components/Companies/Companies"
import Footer from "../Components/Footer/Footer"
import Products from "../Components/Products/Products"
import Sale from "../Components/Sale/Sale"

export const Home = () => {
    return (
        <>
            <Carousel />
            <Products />
            <Categories />
            <Sale />
            <Companies />
            <Footer />
        </>
    )
}
