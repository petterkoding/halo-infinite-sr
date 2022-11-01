import NextHead from 'next/head'

function Head({title}) {
  return (
    <NextHead>
        <title>{title}</title>
        <meta name="description" content="InfiniteSR, Halo Infinite players multiplayer Service Record statistics. Look up your and others multiplayer stats by searching by gamertags." />
        <meta name="keywords" content="Halo game, Infinite, service record, multiplayer statistics, social and ranked stats." />
        <meta name="author" content="Petter Iversen" />
    </NextHead>
  )
}

export default Head