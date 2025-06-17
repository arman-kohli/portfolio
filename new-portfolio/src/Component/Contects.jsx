import React from 'react'
import { FaPhone, FaVoicemail } from 'react-icons/fa'

const Contects = () => {
    return (

        <div className='bg-black text-white py-20 ' id='about'>
            <div className='container mx-auto px-8 md:px-15   lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12 '>Contact Me</h2>
                <div className='flex flex-col md:flex-row items-center  w-full md:space-x-12'>

                    <div className='flex-1  p-5 items-center'>
                        <h3 className='item-center hover:text-blue-400'>Let's Talk..</h3>
                        <p className='items-center hover:text-blue-400'>I 'm open to discussing Web Development Projects or Partnerships opportunuities.</p>
                        <div className='mb-4 mt-8'>
                            <p className='inline-block text-green-400 mr-2 '></p>
                            <a href="mailto:armanhu0786@gmail.com" className='hover:underline hover:text-blue-400'> 
                             armanhu0786@gmail.com
                            </a>
                        </div>

                        <div className='mb-4 mt-8 '>
                            <div className='inline-block text-green-400 mr-2'><FaPhone/></div>
                            <span>+91-7654163671</span>
                        </div>

                        <div className='mb-4 mt-8'>
                            <div className='inline-block text-green-400 mr-2'></div>
                            <span>City : New Delhi ,  Near  Chhaterpur Metro </span>
                        
                        </div>

                    </div>


                    <div className='flex-1 w-2/3 mt-10  p-5 shadow-gray-200 ' >
                        <form className='space-y-4'>
                            <div>
                                <label htmlFor="name" className='text-2xl'><span className='text-transparent bg-clip-text  bg-gradient-to-r from-green-400 to-yellow-500'>Enter Name : </span></label>
                                <input type='text' className='w-full rounded bg-gray-800 border mt-2 border-gray-600 
                    focus:outline-none focus:border-green-400 ' placeholder='Enter your name' />
                            </div>

                            <div>
                                <label htmlFor="email" className='text-2xl'> <span className='text-transparent bg-clip-text  bg-gradient-to-r from-blue-400 to-yellow-500'>Enter Email  : </span> </label>
                                <input type='text' className='w-full rounded  mt-2 bg-gray-800 border border-gray-600 
                    focus:outline-none focus:border-green-400 ' placeholder='Enter your name' />
                            </div>

                            <div>
                                <label htmlFor="message" className='block mb-2 text-2xl'><span className='text-transparent bg-clip-text  bg-gradient-to-r from-yellow-400 to-blue-500'>Messages : </span> </label>
                                <textarea type='text' className='w-full rounded bg-gray-800 border border-gray-600 
                    focus:outline-none focus:border-green-400 ' rows={"5"} placeholder='Enter your message' />
                            </div>
                            <button className='bg-gradient-to-r from-green-400 to-blue-400 text-white
                              md:inline transform transition-transform duration-300 hover:scaler-105 
                             px-4 py-2 rounded-full '>Send here

                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contects
