import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 mi:px-16 lg:ps-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center '>
        <div className='text-2xl font-bold hidden md:inline'>Arman Hussain</div>
        <div className='space-x-6'>
            <a href="#Home" className='hover:text-gray-400'>Home</a>
            <a href="#About" className=' hover:text-gray-400'>About</a>
            <a href="#Contact" className=' hover:text-gray-400'>Contact</a>
            <a href="#Project" className='hover:text-gray-400'>Projects</a>
            <a href="#Service" className='hover:text-gray-400'>Service</a>
            
        </div>
        <button className='bg-gradient-to-tr from-green-400 to-blue-500  text-white hidden md:inline 
        transform transition-transform 
        duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
      </div>
    </nav>
  )
}

export default Navbar
