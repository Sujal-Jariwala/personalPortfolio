import { useRef } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null)
  const headerRef = useRef(null)

  const refs = {
    aboutRef,
    skillsRef,
    projectRef,
    contactRef
  };

 
  return (
    <>
    <main>
        <Header ref={headerRef} refs={refs}/>
        <Hero/>
        <Skills ref={skillsRef}/>
        <About ref={aboutRef}/>
        <Projects ref={projectRef}/>
        <Testimonials/>
        <Contact ref={contactRef}/>
        <Footer/>
    </main>
    </>
  )
}

export default App
