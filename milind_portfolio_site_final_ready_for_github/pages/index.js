import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Milind Cherukuri | Modeling Portfolio</title>
        <meta name="description" content="Modeling Portfolio of Milind Cherukuri" />
      </Head>
      <main className="bg-gray-50 text-gray-900 font-sans">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}
