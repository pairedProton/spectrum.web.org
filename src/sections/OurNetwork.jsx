import React, { useRef } from "react";
import india from "../assets/images/india.png";
import odhisha from "../assets/images/odhisha3.png";
import marker from "../assets/images/marker2.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const markerData = [
  { top: "21%", left: "80%", label: "Balasore" },
  { top: "45%", left: "60%", label: "Bhuwaneshwar" },
  { top: "37%", left: "53%", label: "Dhenkanal" },
  { top: "55%", left: "45%", label: "Barampur" },
  
  // { top: "35%", left: "61%", label: "Calcutta" },
  // { top: "21%", left: "63%", label: "Assam" },
  // { top: "26%", left: "45%", label: "UP" },
  // { top: "35%", left: "10%", label: "Ahmedabad" },
  // { top: "33%", left: "56%", label: "Ranchi" },
  // { top: "46%", left: "42%", label: "Raipur" },
  // { top: "58%", left: "38%", label: "Amravati" },
  // { top: "80%", left: "27%", label: "Kerela" },
];

const OurNetwork = () => {
  const componentRef = useRef(null);
  const markerRefs = useRef([]);

  useGSAP(
    () => {
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
    },
    { scope: componentRef }
  );

  return (
    <div
      ref={componentRef}
      className="w-full min-h-screen flex flex-col gap-6 bg-[#50653e] text-emerald-950 p-10 items-center relative"
    >
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
        <img
          className="w-full h-auto object-center object-cover"
          src={odhisha}
          alt=""
        />
        {markerData.map((markerItem, idx) => (
          <div
            key={idx}
            ref={(el) => (markerRefs.current[idx] = el)}
            className={`absolute flex flex-col justify-center items-center `}
            style={{ top: markerItem.top, left: markerItem.left }}
          >
            <span className="block text-xs font-bold text-emerald-950 text-center mt-1">
              {markerItem.label}
            </span>
            <img
              className="w-8 drop-shadow-emerald-950 drop-shadow-2xl"
              src={marker}
              alt=""
            />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurNetwork;
