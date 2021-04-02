import { Banner } from "../Components/Banner/Banner"
import Row from "../Components/Row/Row"
import requests from "../requests"

export const Movies = () => {
    return (
        <>
            <Banner />

            {/* Render the rows below */}
            <Row fetchUrl={requests.fetchMovieAction} title="Action" />
            <Row fetchUrl={requests.fetchMovieAdventure} title="Adventure" />
            <Row fetchUrl={requests.fetchMovieComedy} title="Comedy" />
            <Row fetchUrl={requests.fetchMovieDrama} title="Drama" />
            <Row fetchUrl={requests.fetchMovieRomance} title="Romance" />
            <Row fetchUrl={requests.fetchMovieHorror} title="Horror" />
            <Row fetchUrl={requests.fetchMovieSciFi} title="Sci Fi"/>
            <Row fetchUrl={requests.fetchMovieCrime} title="Crime" />
        </>
    )
}
