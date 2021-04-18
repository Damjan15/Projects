import Head from "next/head";
import Hero from "../components/Hero";
import Row from "../components/Row";

const Entertainment = ({ data }) => {
  return (
    <div>
      <Head>
        <title>GoodNews | Entertainment Articles </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero data={data} />
      <Row data={data} />
    </div>
  );
};

export default Entertainment;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${process.env.API_KEY}`
  );
  const data = await res.json();

  return {
    props: { data },
  };
}
