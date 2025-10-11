import React from 'react'
import Hero2 from '../sections/Hero2'
import Navbar from '../components/Navbar'
import CeoSection from '../sections/CeoSection'
import OurMission from '../sections/OurMission'
import OurNetwork2 from '../sections/OurNetwork2'
import OurNetwork3 from '../sections/OurNetwork3'
import OurNetwork from '../sections/OurNetwork'
import OurNumber from '../sections/OurNumber'
import OurProduct from '../sections/OurProduct'
import FarmerVid from '../sections/FarmerVid'
import Footer from '../sections/Footer'
import About from '../sections/About'
import Gallery from '../sections/Gallery'
import Marquee from '../sections/Marquee'
import Values from '../sections/Values'


const Home = () => {
  return (
    <div>
      
      
      <Hero2></Hero2>
      <About></About>
      {/* <OurMission></OurMission> */}
      <CeoSection></CeoSection>
      <Values/>
      {/* <OurNetwork></OurNetwork> */}
      <OurNetwork2></OurNetwork2>
      {/* <OurNetwork3></OurNetwork3> */}
      <OurNumber></OurNumber>
      <OurProduct></OurProduct>
      <Marquee/>
      <FarmerVid></FarmerVid>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  )
}

export default Home