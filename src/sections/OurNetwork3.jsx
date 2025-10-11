import React, { useRef } from "react";
import india from "../assets/images/india.png";
import marker from "../assets/images/marker2.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const markerData = [
  // Left side labels
  { 
    top: "45%", 
    left: "52%", 
    label: "Bhuwaneshwar",
    side: "left",
    lineLength: "100px" 
  },
  // { 
  //   top: "35%", 
  //   left: "61%", 
  //   label: "Calcutta",
  //   side: "left",
  //   lineLength: "120px"
  // },
  // // Right side labels
  // { 
  //   top: "21%", 
  //   left: "63%", 
  //   label: "Assam",
  //   side: "right",
  //   lineLength: "80px"
  // },
  // { top: "26%", left: "45%", label: "UP", side: "right", lineLength: "90px" },
  // { top: "35%", left: "10%", label: "Ahmedabad", side: "right", lineLength: "110px" },
  // { top: "33%", left: "56%", label: "Ranchi", side: "left", lineLength: "130px" },
  // { top: "46%", left: "42%", label: "Raipur", side: "left", lineLength: "140px" },
  // { top: "58%", left: "38%", label: "Amravati", side: "right", lineLength: "150px" },
  // { top: "80%", left: "27%", label: "Kerela", side: "right", lineLength: "160px" },
];

const OurNetwork3 = () => {
  const componentRef = useRef(null);
  const markerRefs = useRef([]);
  const labelRefs = useRef([]);
  const lineRefs = useRef([]);

  useGSAP(() => {
    // Marker animation
    gsap.from(markerRefs.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "elastic.inOut(1,0.3)",
      scrollTrigger: {
        trigger: componentRef.current,
        start: "top 20%",
        end: "top top",
        toggleActions: "play none none reverse",
      },
    });

    // Lines and labels animation
    markerData.forEach((marker, index) => {
      // Animate lines
      gsap.from(lineRefs.current[index], {
        width: 0,
        duration: 1,
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 30%",
          end: "center center",
          scrub: 1,
        },
      });

      // Animate labels - using marker.side instead of dataset
      gsap.from(labelRefs.current[index], {
        opacity: 0,
        x: marker.side === 'left' ? -20 : 20,
        duration: 0.5,
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 30%",
          end: "center center",
          scrub: 1,
        },
      });
    });
  }, { scope: componentRef });

  return (
    <div ref={componentRef} className="w-full min-h-screen flex flex-col gap-6 bg-[#50653e] text-emerald-950 p-10 items-center relative">
      <hr className="w-full h-px bg-emerald-950" />
      <div className="w-full flex flex-col lg:flex-row justify-between ">
        <h3 className="font-[curvyText] text-5xl lg:text-6xl w-full lg:w-[50%] ">
          Our Network
        </h3>
        <p className="lg:w-[50%] w-full text-start">
          We partner with local farmers and growers to give our customers only
          the best and freshest ingredients.
        </p>
      </div>
      <div className="w-full lg:w-[30%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto object-center object-cover mt-10">
        <img className="w-full h-auto object-center object-cover" src={india} alt="" />
        {markerData.map((markerItem, idx) => (
          <div
            key={idx}
            className="absolute"
            style={{ top: markerItem.top, left: markerItem.left }}
          >
            {/* Marker */}
            <div ref={el => markerRefs.current[idx] = el}>
              <img
                className="w-8 drop-shadow-emerald-950 drop-shadow-2xl"
                src={marker}
                alt=""
              />
            </div>

            {/* Line */}
            <div
              ref={el => lineRefs.current[idx] = el}
              className={`absolute top-1/2 h-[1px] bg-emerald-950 origin-${markerItem.side}`}
              style={{
                width: markerItem.lineLength,
                left: markerItem.side === 'left' ? `-${markerItem.lineLength}` : '100%',
              }}
            />

            {/* Label */}
            <div
              ref={el => labelRefs.current[idx] = el}
              data-side={markerItem.side}
              className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-bold
                ${markerItem.side === 'left' 
                  ? '-left-[calc(100%+5px)]' 
                  : 'left-[calc(100%+5px)]'}`}
            >
              {markerItem.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurNetwork3;
