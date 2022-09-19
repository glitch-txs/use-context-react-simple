import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NameProvider from '../useContext/useContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NameProvider>
      <Component {...pageProps} />
    </NameProvider>
  )
}

export default MyApp
