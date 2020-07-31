import Layout from '../../components/layout'
import Head from 'next/head'
import slug from 'slug'
function CharacterDetail({ character }) {
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await fetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()

  const paths = characters.results.map((character) => ({
    params: { slug: `${slug(character.name)}-${character.id}` }
  }))
  return {
    paths,
    fallback: false // See the "fallback" section below
  }
}

export async function getStaticProps({ params }) {
  const id = params.slug.split('-').slice(-1)[0]
  const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const character = await data.json()
  return {
    props: {
      character
    } // will be passed to the page component as props
  }
}
export default CharacterDetail
