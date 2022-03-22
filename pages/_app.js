import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Dashboard | FlameCode</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
