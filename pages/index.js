import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import slug from 'slug'
function HomePage({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>
      <h1>The Rick And Morty</h1>
      <ul>
        {characters.results.map((character) => (
          <li key={character.id}>
            <Link
              href="/character/[slug]"
              as={`/character/${slug(character.name)}-${character.id}`}
            >
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
export async function getStaticProps() {
  // data fetch

  const data = await fetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()
  return {
    props: {
      characters
    } // will be passed to the page component as props
  }
}
export default HomePage
