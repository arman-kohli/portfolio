import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Service from './Component/Service'
import Project from './Component/Prodjuct'
import Contact from './Component/Contact'
import Contects from './Component/Contects'
import Footer from './Component/Footer'
import Demo from './Component/Demo'
import CustomNavbar from './Component/CustomNavbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <CustomNavbar/>
      {/* <Navbar/> */}
      <Hero/>
      <About/>
      <Service/>
      <Project/>
    <Contects/>
    <Footer/>
      {/* <Demo/>   */}
    </div>
    </>
  )
}

export default App
