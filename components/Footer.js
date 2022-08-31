/* This example requires Tailwind CSS v2.0+ */
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
    <div className="bg-white ">
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
  )
}
