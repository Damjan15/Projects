import Head from 'next/head'
import Hero from '../components/Hero'
import Row from '../components/Row'


export default function Home({ data }) {
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
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`)
  const data = await res.json()

  return {
      props: { data }
  }
}
