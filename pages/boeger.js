import Head from 'next/head';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import meta from './_meta.js';
import BooksPage from '@components/Pages/BooksPage/BooksPage.js';

export default function Home() {
  return (
    <>
      <Head>{meta}</Head>
      <div id="canvas">
        <Header />
        <div className="page-divider"></div>
        <BooksPage />
        <div className="page-divider"></div>
        <Footer />
      </div>
    </>
  )
}
