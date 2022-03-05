import Head from 'next/head';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import meta from '../../components/_meta.js';
import Article04 from '@components/Pages/NewsPage/Articles/Article04';

export default function Home() {
  return (
    <>
      <Head>{meta}</Head>
      <div id="canvas">
        <Header />
        <div className="page-divider"></div>
        <Article04 />
        <div className="page-divider"></div>
        <Footer />
      </div>
    </>
  )
}