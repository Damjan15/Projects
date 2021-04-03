import Banner from "../Components/Banner/Banner"
import Row from "../Components/Row/Row"
import requests from "../requests"

export const Popular = () => {
    return (
        <>
            <Banner title="Popular"/>
            <Row fetchUrl={requests.fetchMoviePopular} title="Popular Movie" />
            <Row fetchUrl={requests.fetchPopularTV} title="Popular TV Shows"/>
        </>
    )
}
