/* This example requires Tailwind CSS v2.0+ */
import Head from "next/head";

import Image from 'next/image'
const people = [
    {
      name: 'ReactJs',
      role: 'Co-Founder / CTO',
      abbrs: "reactjs",
      imageUrl:
        '/images/react1.webp',
    },
    {
        name: 'NextJs',
        role: 'Co-Founder / CTO',
        abbrs: "nextjs",
        imageUrl:
          '/images/nextjs.webp',
      },
      {
        name: 'JavaScript',
        role: 'Co-Founder / CTO',
        abbrs: "javascript",
        imageUrl:
          '/images/js.webp',
      },
      {
        name: 'Html',
        role: 'Co-Founder / CTO',
        abbrs: "Html",
        imageUrl:
          '/images/html.webp',
      },
      {
        name: 'Css',
        role: 'Co-Founder / CTO',
        abbrs: "css",
        imageUrl:
          '/images/css.webp',
      },
      {
        name: 'Bootstrap',
        role: 'Co-Founder / CTO',
        abbrs: "bootstrap",
        imageUrl:
          '/images/bootstrap.webp',
      },
      {
        name: 'Tailwind Css',
        role: 'Co-Founder / CTO',
        abbrs: "tailwind css",
        imageUrl:
          '/images/tailwind.webp',
      },
      {
        name: 'Node.Js',
        role: 'Co-Founder / CTO',
        abbrs: "node.js",
        imageUrl:
          '/images/node.webp',
      },
      {
        name: 'MongoDb',
        role: 'Co-Founder / CTO',
        abbrs: "mongodb",
        imageUrl:
          '/images/mongodb.webp',
      },
      {
        name: 'Strapi',
        role: 'Co-Founder / CTO',
        abbrs: "strapi",
        imageUrl:
          '/images/strap.webp',
      },
      {
        name: 'Figma',
        role: 'Co-Founder / CTO',
        abbrs: "strapi",
        imageUrl:
          '/images/figma.webp',
      },
      {
        name: 'Api',
        role: 'Co-Founder / CTO',
        abbrs: "strapi",
        imageUrl:
          '/images/api.webp',
      },

    // More people...
  ]
  
  export default function Skills() {
    return (
      <>
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
      <div className="bg-white" id ="skills">
        <div className="py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="lg:text-6xl text-4xl font-semibold my-10 text-center borderbottom">Skills 🔥</h2>
            
            </div>
            <ul
              role="list"
              className="mx-auto  grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-7xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6" 
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 cursor-pointer" >
                  <abbr title={person.abbrs}>
                   
                    <Image
                    className='mx-auto   h-20 w-20 rounded-full lg:w-24 lg:h-24'
                    src={person.imageUrl}
                    alt="Picture of the author"
                    width={110}
                    height={110}
                  />
                    </abbr>
                    <div className="space-y-2">
                      <div className="text-xs font-medium lg:text-sm">
                        <h3>{person.name}</h3>
                        {/* <p className="text-indigo-600">{person.role}</p> */}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </>
    )
  }
  