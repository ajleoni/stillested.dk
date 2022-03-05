import Head from 'next/head';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import meta from '../_meta.js';
import Article02 from '@components/Pages/NewsPage/Articles/Article02';

export default function Home() {
  return (
    <>
      <Head>{meta}</Head>
      <div id="canvas">
        <Header />
        <div className="page-divider"></div>
        <Article02 />
        <div className="page-divider"></div>
        <Footer />
      </div>
    </>
  )
}