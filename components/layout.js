import Navigation from '../components/navigation'
import Head from 'next/head'
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Adem İlter'in web sitesi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>design by cakirefekan</footer>
    </div>
  )
}

export default Layout
