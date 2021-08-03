import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Chart Challenge</title>
        <meta name="description" content="Chart Challenge update" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
export default App
