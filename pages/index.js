import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopNavbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Testimonial from "../components/Testimonial";
import Whatido from "../components/Whatido";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Danishtanoli</title>
        <link rel="icon" href="/favicon.png" />
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="A passionate Full Stack Software Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
        />
        <meta
          name="keywords"
          content="
        web developer
        front end developer
        backend developer
        web design company
        website developer
        web dev
        ui developer
        front end web developer
        front end back end
        front end and back end
        freelance web designer
        junior web developer
        web design near me
        stack developer
        website developer near me
        website designing company
        web developer near me
        best website design 2021
        google web developer
        web programmer
        web application developer
        freelance website developer
        html css and javascript for web developers
        back end web developer
        front end coding
        web app developer
        react js tutor
        reactjs tutor
        nextjs developr
        nextjs tutor
        mern stack developer
        mern full form
        mern developer
        mern stack projects
        mern stack course
        mern stack development
        full stack mern
        best mern stack course
        mern full stack
        mern full stack developer
        full stack mern developer
        mern stack developer meaning
        "
        />
        <meta name="author" content="Muhammad Danish" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* <TopNavbar /> */}
      <div>
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
  );
}
