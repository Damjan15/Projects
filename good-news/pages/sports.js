import Head from "next/head";
import Hero from "../components/Hero";
import Row from "../components/Row";

const Sports = ({ data }) => {
  return (
    <div>
      <Head>
        <title>GoodNews | Sports Articles </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero data={data} />
      <Row data={data} />
    </div>
  );
};

export default Sports;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${process.env.API_KEY}`
  );
  const data = await res.json();

  return {
    props: { data },
  };
}
