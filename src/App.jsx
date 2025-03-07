import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <section id="contato" className="py-20">
        <div className="container">
          <h2 className="section-title">Contato</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default App 