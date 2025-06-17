import React from 'react'
import bannerImage from '../assets/Ar3.png'

const About = () => {
    return (
        <div className='bg-black text-white py-20 ' id='about'>
            <div className='container mx-auto px-8 md:px-15 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={bannerImage} alt=''
                        className='mx-auto mb-8 w-96 h-96 rounded-lg shadow-2xl object-cover transform transition-transform  hover:bg-fuchsia-300  hover:scale-105' />
                    <div className='flex-1'>
                        <p className='text-lg mb-8 hover:text-blue-400'>
                            I am a Passionate Full-Stack Developer With
                            a focus on building Modern and Responsive
                            application .  with 1 years of experience in designing, developing, and maintaining 
                            full-stack web applications. Proficient in both frontend and backend 
                            technologies, with a strong focus on building scalable, efficient, and secure systems.

                            {/* with a Strong foundation in both
                            frontend and backend technologies ,  I Striver
                            to create seamless and efficient user experience. */}
                        </p>
                        <div className='space-x-4'>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w- 2/12  items-center'>Java & SpringBoot :  </label>

                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400   to-blue-500  
             transform transition-transform duration-300  hover:scale-105  rounded-full h-2.5 w-11/12'>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center mt-2'>
                                <label htmlFor="htmlandcss" className='w- 2/12  items-center'>HTML $ CSS :  </label>

                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400   to-blue-500  
       transform transition-transform duration-300  hover:scale-105  rounded-full h-2.5 w-10/12'>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center mt-2'>
                                <label htmlFor="htmlandcss" className='w- 2/12  items-center'>React $ NextJs:  </label>

                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400   to-blue-500  
       transform transition-transform duration-300  hover:scale-105  rounded-full h-2.5 w-8/12'>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center mt-2'>
                                <label htmlFor="htmlandcss" className='w- 2/12 items-center'>MySql & Oracle :  </label>

                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400   to-blue-500  
       transform transition-transform duration-300  hover:scale-105  rounded-full h-2.5 w-9/12'>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='mt-12 flex justify-between text-center'>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to-blue-500'>
                                    1+
                                </h3>

                                <p>
                                    Years Experiences
                                </p>
                            </div>
                            <div>
                                <div>
                                    <h3 className='text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to-blue-500'>
                                        10+
                                    </h3>
                                </div>
                                <p>
                                    Completed Projects
                                </p>
                            </div>

                             <div>
                                <div>
                                    <h3 className='text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to-blue-500'>
                                        150+
                                    </h3>
                                </div>
                                <p>
                                 Solving LeetCode & HackerRank Problem
                                </p>
                            </div> 

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
