import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Skills from './Components/skillls'
import Experience from './Components/Experience'
import Contact from './Components/Contact'

import Education from './Components/Education'


function App() {
  return (
    <>
     <Navbar/>

     <div className="main-content">

    <Hero />
     <Skills />
     <Experience/>
     <Education />
      <Contact />
  
  </div>
  
    </>
  )
}

export default App
