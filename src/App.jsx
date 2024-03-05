import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Number from './Components/Number/Number'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Services/>
    <Portfolio/>
    <Number/>
    <Testimonials/>
    <Contact/>
    </>
  )
}

export default App
