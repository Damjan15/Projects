import Banner from "../Components/Banner/Banner"
import Row from "../Components/Row/Row"
import requests from "../requests"

export const Shows = () => {
    return (
        <>
            <Banner title="Shows" />
            <Row fetchUrl={requests.fetchActionAdventureTV} title="Action & Adventure" />
            <Row fetchUrl={requests.fetchDramaTV} title="Drama" />
            <Row fetchUrl={requests.fetchCrimeTV} title="Crime" />
            <Row fetchUrl={requests.fetchMysteryTV} title="Mystery" />
            <Row fetchUrl={requests.fetchSciFiTV} title="Sci Fi" />
        </>
    )
}
