import Head from 'next/head'
import Header from '../components/Header'


export default function Home() {
  return (
    <div>
      <Head>
        <title>GoodNews | Articles from across the world </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <h1>Let's build the news website</h1>
    </div>
  )
}
