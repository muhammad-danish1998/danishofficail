/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Head from "next/head";

const people = [
    {
        heading: "Frontend Developer",
        name: `I worked on the Official Letscodify Website for Trinidad and Tobago. The project
         included complete redesign of their website, and adopting the standard Starbucks style 
         for the country's website`,
        email: 'leslie.alexander@example1.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            '/images/letscodify.webp',
    },
    {
        heading: "React Developer",
        name: `I worked with FIVERR to design and developed their online project management system. The system could be used to track the project progress, assign tasks, manage employees, generate reports among other works.`,
        email: 'leslie.alexander@example2.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            '/images/fiverr.webp',
    },






    // More people...
]

export default function Experience() {
    return (<>
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
        <h1 className='lg:text-6xl text-4xl font-semibold my-10 text-center'>Experience 💼</h1>
        <div id="experience" className="  p-6 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-7xl mx-auto">

            {people.map((person) => (
                <div
                    key={person.email}
                    className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400  hover:bg-indigo-600 text-gray-500 hover:text-white"
                >
                    <div className="flex-shrink-0">

                        <Image
                            className='h-14 w-14 lg:w-24 lg:h-24 rounded-full'
                            src={person.imageUrl}
                            alt="Picture of the author"
                            width={90}
                            height={90}
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <a href="#" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <h1 className='font-bold  lg:text-3xl py-2'>{person.heading}</h1>
                            <p className="text- font-sm hover:text-white-900">{person.name}</p>
                            <h1 className='font-bold  lg:text-3xl py-2'>Responsibilites</h1>
                            <ul className='ml-8 list-disc '>
                                <li>Conerting the designs into working site</li>
                                <li>Cleaning existing pages and converting to newer designs</li>
                                <li>Constantly delivering and receiving the feedback</li>
                                <li>Work on the feedback points</li>


                            </ul>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </>)
}
