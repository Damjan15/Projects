import Hero from "../components/Hero";
import Row from "../components/Row";
const Business = ({ data }) => {
    return (
        <div>
            <Hero data={data} />
            <Row data={data} />
        </div>
    )
}

export default Business

export async function getServerSideProps(context) {
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4ac080a3168c4ca8b6995b4708e569c7")
    const data = await res.json()
  
    return {
        props: { data }
    }
}