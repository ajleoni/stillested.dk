import Head from 'next/head';
import Header from '@components/Common/Header/Header';
import Footer from '@components/Common/Footer/Footer';
import meta from '@components/Common/_meta.js';

export default function Layout({ children }) {
  return (
    <>
      <Head>{meta}</Head>
      <div id="canvas">
        <Header />
        <div className="page-divider"></div>
        {children}
        <div className="page-divider"></div>
        <Footer />
      </div>
    </>
  )
}
