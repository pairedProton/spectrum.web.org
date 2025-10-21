import React, { useRef } from "react";
import india from "../assets/images/india.png";
import marker from "../assets/images/marker2.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const markerData = [
  { top: "40%", left: "60%", label: "Balasore" },
  { top: "45%", left: "52%", label: "Bhubaneswar" },
  { top: "42%", left: "56%", label: "Dhenkanal" },
  { top: "47%", left: "51%", label: "Berhampur" },

  { top: "35%", left: "61%", label: "Calcutta" },
  { top: "21%", left: "63%", label: "Assam" },
  { top: "26%", left: "45%", label: "UP" },
  { top: "35%", left: "10%", label: "Ahmedabad" },
  { top: "33%", left: "56%", label: "Ranchi" },
  { top: "46%", left: "42%", label: "Raipur" },
  { top: "58%", left: "38%", label: "Amravati" },
  { top: "80%", left: "27%", label: "Kerela" },
];

const OurNetwork2 = () => {
  const componentRef = useRef(null);
  const markerRefs = useRef([]);
  const stateRefs = useRef([]);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
       
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top top",
          end: `+=${markerData.length * 1000}`,
          pin: componentRef.current,
          scrub: 5,
          // markers: true, // Enable for debugging
  
        },
      });

      // Reset all scales first
      gsap.set([...markerRefs.current, ...stateRefs.current], {
        scale: 1,
      });

      // Create animations for each pair
      markerData.forEach((_, index) => {
        if (index > 0) {
          // Scale down previous pair
          tl.to(
            [markerRefs.current[index - 1], stateRefs.current[index - 1]],
            {
              scale: 1,
              duration: 0.1,
              immediateRender: true,
              ease:'none'
            },
            `step${index}`
          );
        }

        // Scale up current pair
        tl.to(
          [markerRefs.current[index], stateRefs.current[index]],
          {
            // scale: 1.2,
            duration: 0.1,
            opacity:'100%',
            immediateRender: true,
            ease:"power2.inOut"
          },
          `step${index}`
        );

      //   tl.to('.Networkheadings',{
      //     opacity:1,
      //     duration:1,

      //   })
      });
    },
    { scope: componentRef }
  );

  return (
    <div
      ref={componentRef}
      className="w-full min-h-screen flex flex-col gap-6 bg-[#50653e] text-emerald-950 p-10 items-center relative"
    >
      <hr className="w-full h-px bg-emerald-950" />
      <div className=" Networkheadings w-full flex flex-col lg:flex-row justify-between mb-10">
        <h3 className="heading font-[curvyText]  w-full lg:w-[50%] text-white">
          Our Network
        </h3>
        <p className="lg:w-[50%] w-full text-start text-white ">
          We partner with local farmers and growers to give our customers only
          the best and freshest ingredients.
        </p>
      </div>
      <div
        ref={containerRef}
        className="mapSec flex flex-col lg:flex-row justify-between w-full h-100"
      >
        <div className="mapLeft relative flex-1 flex justify-center items-center h-full">
          <div className="flex justify-center items-center relative h-full">
            <img
              className="w-auto h-full  md:-translate-y-10 -translate-y-6 md:-translate-x-2
              -translate-x-1
               object-center object-contain"
              src={india}
              alt=""
            />
            {markerData.map((markerItem, idx) => (
              <div
                key={idx}
                ref={(el) => (markerRefs.current[idx] = el)}
                className="absolute flex flex-col justify-start items-center transition-transform duration-300"
                style={{ top: markerItem.top, left: markerItem.left }}
              >
                {/* <span className="block text-[.55rem] font-bold text-emerald-950 text-center mt-1">
                  {markerItem.label}
                </span> */}
                <img
                  className="w-5  drop-shadow-emerald-950 drop-shadow-2xl"
                  src={marker}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mapRight relative flex-1 flex justify-center items-center">
          <div className="statesList flex md:flex-col flex-wrap md:flex-nowrap gap-1 md:gap-2 ">
            {markerData.map((e, i) => (
              <li
                key={i}
                ref={(el) => (stateRefs.current[i] = el)}
                className="flex w-36 md:w-50 h-auto gap-4 md:gap-6 items-center transition-transform duration-300"
              >
                <div className="w-5 h-5 rounded-full bg-white" />
                <h3 className="font-semibold text-md text-white">
                  {e.label}
                </h3>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurNetwork2;
