import Head from 'next/head';
import Header from '@components/Common/Header/Header';
import Footer from '@components/Common/Footer/Footer';
import meta from '@components/Common/_meta.js';
import Article05 from '@components/Pages/NewsPage/Articles/Article05';

export default function Home() {
  return (
    <>
      <Head>{meta}</Head>
      <div id="canvas">
        <Header />
        <div className="page-divider"></div>
        <Article05 />
        <div className="page-divider"></div>
        <Footer />
      </div>
    </>
  )
}