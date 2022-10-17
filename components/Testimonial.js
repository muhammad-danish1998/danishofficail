/* This example requires Tailwind CSS v2.0+ */
import Head from "next/head";

export default function Testimonial() {
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
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="p-2 px-6">
      <section className="bg-indigo-800 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
          <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-indigo-900 lg:pr-16">
            <div className="md:flex-shrink-0">
              {/* <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg" alt="Tuple" /> */}
            </div>
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">
                One of the best people and team to work with here. Expect great communication/collaboration, thorough understanding of your requirements and progress updates. Highly recommended
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="./images/nomtrip.webp"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">nomtrips</div>
                    <div className="text-base font-medium text-indigo-200">CEO, ED</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div className="py-12 px-4 border-t-2 border-indigo-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
            <div className="md:flex-shrink-0">
              {/* <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                alt="Workcation"
              /> */}
            </div>
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">
                The service was amazing, got the job done quickly and efficiently, showed the process and reviewed everything, with meeting clients satisfaction. Will go to them again. Thanks
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="/images/ww.webp"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">wacky78618</div>
                    <div className="text-base font-medium text-indigo-200">CEO, wacky</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
      </div>
      </>
    )
  }
  