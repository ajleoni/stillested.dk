import Head from 'next/head';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import meta from '../components/_meta.js';
import HomePage from '../components/Pages/HomePage/HomePage.js';

export default function Home() {
  return (
    <>
      <Head>{meta}</Head>
      <div id="canvas">
        <Header />
        <div className="page-divider"></div>
        <HomePage></HomePage>
        <div className="page-divider"></div>
        <Footer />
      </div>
    </>
  )
}
