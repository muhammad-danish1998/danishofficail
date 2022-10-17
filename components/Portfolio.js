import React from 'react'
import Head from "next/head";

const Portfolio = () => {
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
        <div className='max-w-7xl mx-auto'>
           
<div id="default-carousel" class="relative" data-carousel="static">
    {/* <!-- Carousel wrapper --> */}
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
            <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2014%2F02%2F27%2F16%2F10%2Fflowers-276014__340.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=gSztbPoa5QhyUM&vet=12ahUKEwiX-aigouL5AhV3ktgFHX-6CxIQMygAegUIARDfAQ..i&docid=Ba_eiczVaD9-zM&w=534&h=340&q=nature%20images&ved=2ahUKEwiX-aigouL5AhV3ktgFHX-6CxIQMygAegUIARDfAQ" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 2 --> */}
        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2014%2F02%2F27%2F16%2F10%2Fflowers-276014__340.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=gSztbPoa5QhyUM&vet=12ahUKEwiX-aigouL5AhV3ktgFHX-6CxIQMygAegUIARDfAQ..i&docid=Ba_eiczVaD9-zM&w=534&h=340&q=nature%20images&ved=2ahUKEwiX-aigouL5AhV3ktgFHX-6CxIQMygAegUIARDfAQ" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 3 --> */}
        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2014%2F02%2F27%2F16%2F10%2Fflowers-276014__340.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=gSztbPoa5QhyUM&vet=12ahUKEwiX-aigouL5AhV3ktgFHX-6CxIQMygAegUIARDfAQ..i&docid=Ba_eiczVaD9-zM&w=534&h=340&q=nature%20images&ved=2ahUKEwiX-aigouL5AhV3ktgFHX-6CxIQMygAegUIARDfAQ" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>
    {/* <!-- Slider indicators --> */}
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

        </div>
        </>
    )
}

export default Portfolio