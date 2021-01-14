import Head from 'next/head'
import Footer from '@components/Footer'
import GoogleAnalyticsHook from '@components/GoogleAnalyticsHook'
import Game from '@components/Game'
import About from '@components/About'
import Intro from '@components/Intro'
//`https://api.jikan.moe/v3/top/anime/${1}/bypopularity`

export default function Home (){


  return (
    <>
      <GoogleAnalyticsHook />
      <Head>
        <title>Ichiban</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Game />
      <About />
      <Footer />
    </>
  )
}