import Banner from "../Components/Banner/Banner";
import Poster from "../Components/Poster/Poster";
import { RowBody } from "../Components/Row/row.styles";


export const Search = ({ data }) => {
    return (
        <>
            <Banner title="Search Results" />
            <RowBody>
                { data.results?.map(card => (
                    <Poster key={card?.id} id={card?.id} title={card?.name || card?.original_name || card?.title || card?.original_title} overview={card?.overview} rating={card?.vote_average} image={card?.poster_path} />
                ))}
            </RowBody>
        </>
    )
}
