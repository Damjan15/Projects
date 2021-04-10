import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Layout } from "../layout/Layout";
import axios from "axios";
import Card from "../Components/Card/Card";
import Search from "../Components/Search/Search";
import "../index.css";

export const Discover = ({ setData }) => {
  const { id } = useParams();
  const [mangas, setMangas] = useState([]);

  
  useEffect(() => {

    const options = {
      url: `https://jikan1.p.rapidapi.com/genre/manga/${id}/1`,
      headers: {
        "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
      },
    };

    axios.request(options).then((res) => setMangas(res.data))
  }, [ id ]);


  return (
    <>
      <Layout>
        <Search setData={setData} />
        <div className="row">
            <h1>{mangas?.mal_url?.name}</h1>

          <div className="row__wrapper">
            { mangas?.manga?.slice(0, 21).map(card => (
                <Card id={card.mal_id} key={card.mal_id} link={card?.url} title={card?.title} image={card?.image_url} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};
