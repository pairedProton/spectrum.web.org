import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Slider from '../components/Slider'
import Legal from '../pages/Legal'
import BusinessTerms from '../pages/BusinessTerms'

const Routing = () => {
  return (
    
        <Routes>
            <Route path={'/'} element={<Home/>} ></Route>
            <Route path={'/slider'} element={<Slider/>} ></Route>
            <Route path={'/legal'} element={<Legal/>} ></Route>
            <Route path={'/business-terms'} element={<BusinessTerms/>} ></Route>
            
        </Routes>
  )
}

export default Routing