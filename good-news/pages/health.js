import Head from "next/head";
import Hero from "../components/Hero";
import Row from "../components/Row";

const Health = ({ data }) => {
  return (
    <div>
      <Head>
        <title>GoodNews | Health Articles </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero data={data} />
      <Row data={data} />
    </div>
  );
};

export default Health;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${process.env.API_KEY}`
  );
  const data = await res.json();

  return {
    props: { data },
  };
}
