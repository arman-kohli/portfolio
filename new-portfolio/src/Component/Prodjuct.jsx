import React from 'react'



const projects = [
    {
     id : 1 ,
     name : " Employee Management",
     technologies : " java & Jdbc ",
    // image : 
    github: "https://github.com/arman-kohli/Second-pro.git",
    },
    {
        id : 2 ,
        name : " Notes App ",
        technologies : " ReactJs & JavaScript  ",
       // image : 
       github: "https://github.com/arman-kohli/My-FirstRepo.git",

    },
    {
        id : 3,
        name : " Student Management",
        technologies : " Spring Boot & Hibernate",
       // image : 
       github: "https://github.com/arman-kohli/Second-pro.git",
    },
    {
      id : 4,
      name : " Tic- Toi Game",
      technologies : "  HtMl , Css , JavaScript ",
     // image : 
     github: "https://github.com/arman-kohli/My-FirstRepo.git",
  },
];

const Project = () => {
  return (
    <div className='bg-black text-white py-20 ' id='Service'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Projects : </h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3  gap-8'>
           {projects.map((project) =>(
            <div key={project.id} className='  bg-gray-800 py-6 px-6 rounded-lg  hover:shadow-lg 
       transform transition-transform duration-300  hover:scale-105'>
        {/* <img src='' alt='' className='rounded-lg  mb-4 w-full h-48 object-cover '/> */}
        <h3 className='text-2xl font-bold mb-2  shadow-blue-400 '>{project.name}</h3>
        <p className='text-gray-400 mb-4'>{project.technologies}</p>
        <a href={project.github} className='inline-block bg-gradient-to-r
        from-green-400 to-blue-500 text-white px-4 py-2 rounded-full
         '  target='_blank' rel='noopener noreferrer'>github</a>
          <div>
            
          </div>
                </div>
                
           ))}

            </div>
            </div>
            </div>
            
  )
}

export default Project
