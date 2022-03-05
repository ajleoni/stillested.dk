import Head from 'next/head';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import meta from './_meta.js';
import NewsPage from '../components/Pages/NewsPage/NewsPage.js';

export default function Home() {
  return (
    <>
      <Head>{meta}</Head>
      <div id="canvas">
        <Header />
        <div className="page-divider"></div>
        <NewsPage />
        <div className="page-divider"></div>
        <Footer />
      </div>
    </>
  )
}
