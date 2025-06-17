import React from 'react'


const services = [
  {
    id : 1 ,
    title : "Web Designing",
    description : " Creating visually appealing and user-friendly Web-Designing...",
  },
  {
    id :2 ,
    title : " Backend Developer",
    description : " creating Rest Api So quickly by the help of SpringBoot Framework ...",
  },
  {
    id : 3 ,
    title : "Frontend Developer",
    description : " Building  responsive and interactive user interfaces..",
  },
  {
    id : 4,
    title : " Java-FullStack Developer",
    description : " Combine both frontend and backend development Skill....",
  },
  {
    id : 5 ,
    title : "Content Writing",
    description : " Creating visually appealing and user-friendly Web-Designing...",
  },
  {
    id : 6 ,
    title : " Digital Marketing",
    description : " creating Rest Api So quickly by the help of SpringBoot Framework ...",
  },
  

];


const Service = () => {
  return (
    <div className='bg-black text-white py-20 ' id='Service'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Services</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3  gap-8'>
             {services.map((service) =>(
              <div
               key={service.id} 
               className='bg-gray-800 py-6 px-6 rounded-lg  hover:shadow-lg
       transform transition-transform duration-300  hover:scale-105  '
       >

        <div className=' text-right text-2xl font-bold text-transparent   bg-clip-text bg-gradient-to-r from-green-600 to-blue-500'>
        {service.id}
        </div >
        <h3 className=' mt-2  text-2xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-green-400 to-blue-500  '>
           {service.title}
        </h3>
        <p className='mt-2 text-gray-300 '>
          {service.description}
        </p>
        <a href="#" className='mt-4 inline-block  text-green-400 hover:text-blue-500'>Read More</a>
                </div>
             ))}
          </div>  
  

        </div>
        </div>
  )
}

export default Service
