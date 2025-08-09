import React from "react";
import heroImg from "../assets/images/hero.png";
import heroFore from "../assets/images/heroFore.png";
import heroBack from "../assets/images/heroBack.png";

const Hero = () => {

  return (
    <div className="w-full h-screen">
      <div className="w-full h-full object-cover object-center">
       
      </div>

      <div className="absolute z-15  w-[92%] h-62 bottom-12 left-1/2 -translate-x-1/2  flex  items-end border-t-2 border-white ">
        <h2 className="heroText text-8xl text-white font-[curvyText] text-bold ">
           <span className="italic" >Bringing Farmers</span> <br /> <span className="italic ml-86" >Forward</span> 
        </h2>
      </div>
    </div>
  );
};

export default Hero;
