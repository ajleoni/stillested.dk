import Layout from '../components/layout';
import '@styles/globals.css'
import '@styles/Header.css'

function Application({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Application;