/* This example requires Tailwind CSS v2.0+ */
const people = [
    {
        name: 'Phone',
        role: '+92-3424049132',
        imageUrl:
          './images/phone.webp',
      },
    {
      name: 'Linkdedn',
      role: 'muhammad-danish',
      imageUrl:
      './images/lind.webp',
    },
    
    {
        name: 'Email',
        role: 'iamdanish1998@gmail.com',
        imageUrl:
        './images/email1.webp',
      },
   
     
    // More people...
  ]
  
  export default function Footer() {
    return (
        <div>
            <h1 className="lg:text-6xl text-4xl font-semibold my-10 text-center borderbottom">Contact me 📱</h1>
      <div className="bg-white "  >
        
        <div className="max-w-7xl  mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-8 sm:space-y-12">
           
            <ul
              role="list"
              className="  mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-2 lg:max-w-7xl lg:gap-x-24 lg:gap-y-12 grid-cols-3 xl:grid-cols-3"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 cursor-pointer rounded-md  hover:bg-indigo-400 p-4 text-gray-500 hover:text-white">
                    <img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src={person.imageUrl} alt="" />
                    <div className="space-y-2">
                      <div className="text-xs font-medium lg:text-sm">
                        <h3 className="font-bold text-xl">{person.name}</h3>
                        <p className="">{person.role}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>)
  }
  