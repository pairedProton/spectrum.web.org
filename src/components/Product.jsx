import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Product = ({ img, name, desc, imgUrl }) => {

  const [isHover,setIsHover] = useState(false)

  const onHover =() =>{
    setIsHover(!isHover)
  }

  useGSAP(()=>{
    

  })


  return (
    <div className={` tiles w-full transition-all duration-700 ease-in-out  h-full gap-4 flex flex-col p-4 relative justify-end ${isHover?"flex-3":"flex-1"} `} onMouseEnter={()=>{
      onHover()
    }} onMouseLeave={onHover}>
      <div className={`absolute  top-0 left-0 w-full h-full bg-black/20 z-20 ease-in transition-all duration-200 ${isHover?'':'opacity-0'} `}></div>
      <img
        className=" absolute top-0 left-0 w-full h-full object-center object-cover z-10"
        src={imgUrl}
        alt=""
      />
      <div className=" flex flex-col gap-4 relative z-40 backdrop-blur-2xl p-4 rounded-xl transition-all duration-700 ease-in-out">
        <h3 className="text-3xl font-[curvyText] text-[#D4DBB1]  relative z-40 ">
          {name}
        </h3>
        <p className={`text-white relative z-40 ease-in-out transition-all delay-100 duration-750 ${isHover?'relative opacity-100 ':'hidden opacity-0'} `}>{desc}</p>
      </div>
    </div>
  );
};

export default Product;
