import React from "react";
import heroImg from "../assets/images/hero6.jpg";
import Navbar from '../components/Navbar'

const Hero2 = () => {

  return (
    <div className="w-full h-screen relative">
      <Navbar ></Navbar>
     <img  className="w-full h-full    lg:object-center object-bottom object-cover" src={heroImg} alt="" />
    </div>
  );
};

export default Hero2;
