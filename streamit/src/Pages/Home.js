import Row from "../Components/Row/Row"
import Showcase from "../Components/Showcase/Showcase"
import requests from "../requests"

export const Home = () => {
    return (
        <>
            <Showcase />
            {/* Row -> Latest Movies */}
            <Row fetchUrl={requests.fetchMovieAction} title="Action" />
            {/* Row -> Latest Shows */}
            <Row fetchUrl={requests.fetchMovieAdventure} title="Adventure" />
            {/* Row -> Most Popular Movies */}
            <Row fetchUrl={requests.fetchMovieAction} />
            {/* Row -> Most Popular Shows */}
            <Row fetchUrl={requests.fetchMovieAction} />
        </>
    )
}
