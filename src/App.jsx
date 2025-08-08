import React from 'react'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import CeoSection from './sections/CeoSection'

const App = () => {
  return (
    <div className='w-full h-full flex flex-col ' >
      <Navbar></Navbar>
      <Hero></Hero>
      <CeoSection></CeoSection>
    </div>
  )
}

export default App