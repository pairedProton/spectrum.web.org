import React from 'react'
import Hero2 from '../sections/Hero2'
import Navbar from '../components/Navbar'
import CeoSection from '../sections/CeoSection'
import OurMission from '../sections/OurMission'
import OurNetwork from '../sections/OurNetwork'
import OurNumber from '../sections/OurNumber'
import OurProduct from '../sections/OurProduct'
import FarmerVid from '../sections/FarmerVid'
import Footer from '../sections/Footer'

const Home = () => {
  return (
    <div>
      
      <Hero2></Hero2>
      <CeoSection></CeoSection>
      <OurMission></OurMission>
      <OurNetwork></OurNetwork>
      <OurNumber></OurNumber>
      <OurProduct></OurProduct>
      <FarmerVid></FarmerVid>
      <Footer></Footer>
    </div>
  )
}

export default Home