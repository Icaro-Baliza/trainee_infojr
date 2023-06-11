import type { AppProps } from 'next/app'
import "../styles/index.css"
import "../styles/hero.css"
import "../styles/about.css"


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='App'>
      <Component {...pageProps} />
    </div>
  )
}
