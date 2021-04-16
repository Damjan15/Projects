import Head from 'next/head'
import BlogPosts from '../components/BlogPosts'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Row from '../components/Row'


export default function Home() {
  return (
    <div>
      <Head>
        <title>GoodNews | Articles from across the world </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <Hero />
      <Row />
      <BlogPosts />
      <Footer />
    </div>
  )
}
