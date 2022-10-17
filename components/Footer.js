/* This example requires Tailwind CSS v2.0+ */
import Head from "next/head";

const people = [
  {
    name: 'Phone',
    role: '+92-3424049132',
    imageUrl:
      './images/phone.webp',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'LinkedIn',
    role: 'muhammad-danish-0619a51a3',
    imageUrl:
      './images/lind.webp',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Email',
    role: 'iamdanish1998@gmail.com',
    imageUrl:
      './images/email1.webp',
    twitterUrl: '#',
    linkedinUrl: '#',
  }
  // More people...
]

export default function Footer() {
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
    <div className="bg-white " id ="contact">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact me 📱</h2>
           
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 cursor-pointer">
                  <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={person.imageUrl} alt="" />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
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
