import { AppProps } from 'next/app'
import Head from 'next/head'
import './styles.css'
import 'antd/dist/antd.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to ebay-tool-user!</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default CustomApp
