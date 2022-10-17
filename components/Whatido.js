/* This example requires Tailwind CSS v2.0+ */
import Head from "next/head";

import { CheckIcon } from '@heroicons/react/outline'
const people = [
    {
      name: 'Prepare variety of different designs, layouts and websites ',
      email: 'leslie.alexander@example1.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: `Actively listen to customers' requests, confirming full understanding before addressing concerns`,
        email: 'leslie.alexander@example2.com',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: `Use Seo Optimization and other software tools to create to grow their business`,
        email: 'leslie.alexander@example3.com',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: `Identify issues, analyzed information and provided solutions to problems`,
        email: 'leslie.alexander@example4.com',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: `Convert graphic designs to usable web images using React JS`,
        email: 'leslie.alexander@example5.com',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: `Plann website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding`,
        email: 'leslie.alexander@example6.com',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: `Provide front-end website development using WordPress, Hubspot and other editing software`,
        email: 'leslie.alexander@example7.com',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: `Establish presentation consistency across Chrome, Safari, Firefox and other common browser interfaces`,
        email: 'leslie.alexander@example8.com',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    // More people...
  ]
  
  export default function Whatido() {
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
        web developer,
        front end developer,
        backend developer,
        web design company,
        website developer,
        web dev,
        ui developer,
        front end web developer,
        front end back end,
        front end and back end,
        freelance web designer,
        junior web developer,
        web design near me,
        stack developer,
        website developer near me,
        website designing company,
        web developer near me,
        best website design 2021,
        google web developer,
        web programmer,
        web application developer,
        freelance website developer,
        html css and javascript for web developers,
        back end web developer,
        front end coding,
        web app developer,
        react js tutor,
        reactjs tutor,
        nextjs developr,
        nextjs tutor,
        mern stack developer,
        mern full form,
        mern developer,
        mern stack projects,
        mern stack course,
        mern stack development,
        full stack mern,
        best mern stack course,
        mern full stack,
        mern full stack developer,
        full stack mern developer,
        mern stack developer meaning,
        danishtanoli
        "
        />
        <meta name="author" content="Muhammad Danish" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h1 className='lg:text-6xl text-4xl font-semibold my-10 text-center borderbottom '>What I Do? 👩‍💻</h1>
      <div className="  p-6 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-7xl mx-auto" id = "whatido">
        {people.map((person) => (
          <div
            key={person.email}
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400  hover:bg-indigo-600 text-gray-500 hover:text-white"
          >
            <div className="flex-shrink-0">
              {/* <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" /> */}
              <CheckIcon className=" h-6 w-6 text-gray-00" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-lg font-sm hover:text-white-900">{person.name}</p>
               
              </a>
            </div>
          </div>
        ))}
      </div>
   </> )
  }
  