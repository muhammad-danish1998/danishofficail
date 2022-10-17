import Image from 'next/image'
import Head from "next/head";


const people = [
  {
    name: 'Estheticon',
    role: 'Aiding the medical industry through digital means',
    imageUrl:
      '/images/banner-1.webp',
    imgUel2: `/images/react1.webp`,
    imgUrl3: `/images/node.webp`,

    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Forever Beauty Collection',
    role: 'Bringing health care and cosmetics products at your doorstep',
    imageUrl:
      '/images/banner-3.webp',
    imgUel2: `/images/nextjs.webp`,
    imgUrl3: `/images/strap.webp`,

    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Mr. Fix',
    role: 'Masters of tech repairing',
    imageUrl:
      '/images/banner-4.webp',
    imgUel2: `/images/nextjs.webp`,
    imgUrl3: `/images/strap.webp`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'On Chip Tech',
    role: 'Get licensed to work your way through',
    imageUrl:
      '/images/banner-5.webp',
    imgUel2: `/images/nextjs.webp`,
    imgUrl3: `/images/node.webp`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Yasir Usmani',
    role: 'Spreading Islamic teachings and wisdom through digital means',
    imageUrl:
      '/images/banner-6.webp',
    imgUel2: `/images/nextjs.webp`,
    imgUrl3: `/images/node.webp`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },


  // More people...

]

export default function Project() {
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
    <div className="bg-white" id = "projects">
      <div className="mx-auto py-12 px-6 max-w-7xl sm:px-6 lg:px-8 lg:py-24 ">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-5xl font-semibold my-10 text-center borderbottom">Projects 💻</h2>

          </div>
          <ul
            role="list"
            className=" space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-0  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 ">
                  <div className="aspect-w-3 aspect-h-2   ">

                    <Image
                      className='object-top '
                      src={person.imageUrl}
                      alt="Picture of the author"
                      layout='fill'
                    />
                  </div>

                  <div className="space-y-2 border   p-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-gray-500">{person.role}</p>
                    </div>
                    <ul role="list" className="flex space-x-5">
                      <li>
                        <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">React</span>
                        
                          <Image
                            className='mx-auto h-12 w-12 rounded-full lg:w-8 lg:h-8'
                            src={person.imgUel2}
                            alt="Picture of the author"
                           width={40}
                           height={40}
                          />
                        </a>
                      </li>
                      <li>
                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">tailwind</span>
                       
                          <Image
                            className='mx-auto h-12 w-12 rounded-full lg:w-8 lg:h-8  '
                            src={person.imgUrl3}
                            alt="Picture of the author"
                           width={40}
                           height={40}
                          />
                        </a>
                      </li>
                    </ul>
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
