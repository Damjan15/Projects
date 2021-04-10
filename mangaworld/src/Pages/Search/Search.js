import Card from "../../Components/Card/Card";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "../../index.css";
import { Layout } from "../../layout/Layout";

const Search = ({ data }) => {
  return (
    <>
      <Sidebar />

      <Layout>
        <div className="row">
          <h1>Search Results: </h1>

          <div className="row__wrapper">
            {data?.results?.slice(0, 21).map((card) => (
              <Card
                id={card.mal_id}
                key={card.mal_id}
                link={card?.url}
                title={card?.title}
                image={card?.image_url}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Search;
