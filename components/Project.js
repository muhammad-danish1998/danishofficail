
const people = [
    {
      name: 'Estheticon',
      role: 'Aiding the medical industry through digital means',
      imageUrl:
        './images/banner-1.webp',
     imgUel2: `./images/react1.png`,
     imgUrl3: `./images/node.png` ,  
   
     twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
        name: 'Forever Beauty Collection',
        role: 'Bringing health care and cosmetics products at your doorstep',
        imageUrl:
          './images/banner-3.webp',
       imgUel2: `./images/nextjs.png`,
       imgUrl3: `./images/strapi.jpg` , 
      
       twitterUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'Mr. Fix',
        role: 'Masters of tech repairing',
        imageUrl:
          './images/banner-4.webp',
       imgUel2: `./images/nextjs.png`,
       imgUrl3: `./images/strapi.jpg` ,  
       twitterUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'On Chip Tech',
        role: 'Get licensed to work your way through',
        imageUrl:
          './images/banner-5.webp',
          imgUel2: `./images/nextjs.png`,
          imgUrl3: `./images/node.png` ,  
       twitterUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'Yasir Usmani',
        role: 'Spreading Islamic teachings and wisdom through digital means',
        imageUrl:
          './images/banner-6.webp',
       imgUel2: `https://hamna.dev/static/media/react.7098e2714733fed1ce8cdb90d51c4289.svg`,
       imgUrl3: ` https://hamna.dev/static/media/tailwind.717d7e811e2eaaa5785b50648353e9ae.svg` ,  
       twitterUrl: '#',
        linkedinUrl: '#',
      },
    

    // More people...
   
  ]
  
  export default function Project() {
    return (
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24 ">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-6xl font-semibold my-10 text-center borderbottom">Projects 💻</h2>
             
            </div>
            <ul
              role="list"
              className=" space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-0  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 ">
                    <div className="aspect-w-3 aspect-h-2   ">
                      <img className="object-top   " src={person.imageUrl} alt="" />
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
                            <img className="mx-auto h-12 w-12 rounded-full lg:w-8 lg:h-8" src={person.imgUel2} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">tailwind</span>
                            <img className="mx-auto h-12 w-12 rounded-full lg:w-8 lg:h-8" src={person.imgUrl3} alt="" />
                           
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
    )
  }
  