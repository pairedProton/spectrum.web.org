import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Numbers = ({ num, text, numberAchieved ,perc,width}) => {
  const componentRef = useRef(null);
  const progressRef = useRef(null);

  useGSAP(() => {
    gsap.from(
      progressRef.current,
      {
        width: "0%",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: componentRef.current,
          // start: "top center", // starts animation when top of component hits center of viewport
          start: "top 80%", // starts animation when top of component hits center of viewport
          // end: "+=300", // ends 300px after start
          end: "top 70%", // ends 300px after start
          toggleActions: "play none none reverse",
          // markers: true, // uncomment for debugging
        },
      }
    );
  }, { scope: componentRef });

  return (
    <div
      ref={componentRef}
      className="md:w-[40%] w-full min-w-50 gap-2 md:gap-5 text-white flex flex-col"
    >
      <hr className="w-full h-px bg-white" />
      <h2 className="subheading font-[curvyText] text-white">{num}</h2>
      <h2 className=" ">{text}</h2>

      <div className="w-full h-8 overflow-hidden bg-gray-200 rounded relative flex   ">
        {/* <div
          ref={progressRef}
          className={`bg-emerald-950 absolute top-0 left-0 h-full flex justify-center items-center text-xs font-medium text-blue-100 text-center p-0.5 leading-none ${width}`} style={{width:`${perc}%`}}
        >
          {`${perc}%`}
        </div> */}

        <div className={`barLeft bg-emerald-950  h-full flex justify-center items-center text-xs font-medium text-blue-100 text-center p-0.5 leading-none ${width} `}  style={{width:`${perc}%`,minWidth:'5%'}} >
          
        </div>
        <div className="barRight flex-1 flex  justify-center items-center text-emerald-950">{`${perc}%`}</div>
      </div>
    </div>
  );
};

export default Numbers;
