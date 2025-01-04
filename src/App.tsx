import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
    <Header/>
    <Hero/>
    <Skills/>
    <About/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </main>
    
    </>
  )
}

export default App
