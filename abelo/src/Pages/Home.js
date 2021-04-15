import Categories from "../Components/Categories/Categories"
import Hero from "../Components/Hero/Hero"
import Row from "../Components/Row/Row"
import Shipping from "../Components/Shipping/Shipping"

const Home = () => {
    return (
        <>
            {/* Hero */}
            <Hero />
            {/* Shipping */}
            <Shipping />
            {/* New Arrivals */}
            <Row />
            {/* Categories */}
            <Categories />
            {/* Featuerd Products */}
            <Row />
            {/* Best Sellers */}
            <Row />
        </>
    )
}

export default Home
