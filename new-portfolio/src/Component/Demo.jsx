import React from 'react'
import { motion } from 'framer-motion';
const Demo = () => {
  return (
    <section id="resume" class="py-10">
    <div class="container  flex-1 flex-col mx-auto ">
      <h2 class="text-3xl font-bold mb-5 text-center ">Resume</h2>
      <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h3 class="text-xl font-semibold mb-3">John Doe</h3>
        <p class="mb-5">Web Developer with expertise in React and Tailwind CSS.</p>
        <h4 class="text-lg font-bold mb-2">Skills</h4>
        <ul class="list-disc ml-5 mb-5">
          <li>JavaScript (React)</li>
          <li>CSS (Tailwind)</li>
          <li>Node.js</li>
        </ul>
        <h4 class="text-lg font-bold mb-2">Experience</h4>
        <p class="mb-3">Web Developer at XYZ Company - 2021 to Present</p>
      </div>
    </div>
  </section>
  )
}

export default Demo
