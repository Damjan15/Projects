import Categories from "../Components/Categories/Categories"
import Hero from "../Components/Hero/Hero"
import Row from "../Components/Row/Row"
import Shipping from "../Components/Shipping/Shipping"
import  db from "../db";

const Home = () => {
    const newArrivals = db[4].items;
    const featured = db[5].items;
    const bestSellers = db[6].items;

    console.log(bestSellers);
    
    return (
        <>
            <Hero />
            <Shipping />
            <Row title="New Arrivals" fetchProducts={newArrivals} />
            <Categories />
            <Row title="Featured Products" fetchProducts={featured}  />
            <Row title="Best Sellers" fetchProducts={bestSellers} />
        </>
    )
}

export default Home
