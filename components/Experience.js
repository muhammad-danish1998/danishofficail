/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'
const people = [
    {
        heading: "Frontend Developer",
        name: `I worked on the Official Letscodify Website for Trinidad and Tobago. The project
         included complete redesign of their website, and adopting the standard Starbucks style 
         for the country's website`,
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            './images/letscodify.webp',
    },
    {
        heading: "React Developer",
        name: `I worked with FIVERR to design and developed their online project management system. The system could be used to track the project progress, assign tasks, manage employees, generate reports among other works.`,
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
        './images/fiverr.png',
    },
 
 
 
 
 

    // More people...
]

export default function Experience() {
    return (<>
          <h1 className='lg:text-6xl text-4xl font-semibold my-10 text-center'>Experience 💼</h1>   
        <div className="  p-10 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-7xl mx-auto">
       
            {people.map((person) => (
                <div
                    key={person.email}
                    className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400  hover:bg-indigo-600 text-gray-500 hover:text-white"
                >
                    <div className="flex-shrink-0">
                        <img className="h-14 w-14 lg:w-24 lg:h-24 rounded-full" src={person.imageUrl} alt="" />

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
  </>  )
}
