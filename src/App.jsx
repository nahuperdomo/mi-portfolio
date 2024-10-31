import { useState } from 'react'
import { Footer } from './components/Footer'
import './App.css'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { Projects } from './components/Projects'
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

function App() {  
  return (
    <>
      <HeroSection></HeroSection>
      <Projects></Projects>
      <Footer></Footer>
    </>
  )
}

export default App
