import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TopNavbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Project from '../components/Project'
import Skills from '../components/Skills'
import Testimonial from '../components/Testimonial'
import Whatido from '../components/Whatido'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Danishtanoli</title>
        <meta name="description" content="A passionate Full Stack Software Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      {/* <TopNavbar /> */}
      <div >
      <Header />
      <About />
      <Whatido />
      <Skills />
      <Experience />
      <Project />
      {/* <Portfolio /> */}
      <Testimonial />
      <Footer />

      </div>
    </div>
  )
}
