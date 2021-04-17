import Head from 'next/head'
import Hero from '../components/Hero'
import Row from '../components/Row'


export default function Home({ data }) {

  console.log(data);
  return (
    <div>
      <Head>
        <title>GoodNews | Articles from across the world </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Hero data={data} />
      <Row data={data} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=4ac080a3168c4ca8b6995b4708e569c7")
  const data = await res.json()

  return {
      props: { data }
  }
}
