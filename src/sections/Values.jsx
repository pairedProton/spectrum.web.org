import React from "react";
import empower from "../assets/image/empowerment.png";
import impact from "../assets/image/impact.png";
import inovation from "../assets/image/inovation.png";
import sustain from "../assets/image/sustain.png";
import centerlogo from "../assets/image/centerlogo.png";

const Values = () => {
  const values = [
    {
      name: "Empowerment",
      desc: "Helping farmers achieve self-reliance through advanced farming models, fair markets, and continuous support.",
      imgUrl: empower,
      imgCss: "flex-row-reverse",
      desCss: "self-start",
    },
    {
      name: "Innovation",
      desc: "Pioneering future-ready agricultural solutions that blend tradition with technology for a resilient tomorrow.",
      imgUrl: inovation,
      imgCss: "",
      desCss: "self-end",
    },
    {
      name: "Sustainability",
      desc: "Restoring soil health and ecosystems through organic practices, zero-waste models, and nature-aligned agriculture",
      imgUrl: sustain,
      imgCss: "flex-row-reverse",
      desCss: "self-start",
    },
    {
      name: "Impact",
      desc: "Creating lasting change in rural communities through economic upliftment, environmental regeneration, and inclusive growth.",
      imgUrl: impact,
      imgCss: "",
      desCss: "self-end",
    },
  ];

  return (
    <div className="w-full min-h-screen relative h-auto lg:h-screen flex flex-col p-10 gap-6 bg-emerald-950">
      <h2 className="heading text-center md:text-start  text-white text-7xl ">Our Core Values</h2>
      <div className="relative  h-full">
        {/* center logo */}
        <div className=" hidden lg:flex  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ">
          <div className="bg-emerald-950 text-white  rounded-full w-40 h-40 flex justify-center items-center text-2xl relative z-30">
            <img className="w-36 h-auto ob" src={centerlogo} alt="" />
          </div>
        </div>

        {/* grid */}
        <div
          className="valueGrid grid  h-full gap-6 grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2"
          // style={{
          //   gridTemplateColumns: "repeat(2, 1fr)",
          //   gridTemplateRows: "repeat(2, 1fr)",
          // }}
        >
          {values.map((e, i) => (
            <div
              key={i}
              className={`w-full h-full shadow  flex   bg-white rounded-xl relative overflow-hidden ${e.imgCss}`}
            >
              <div className={`hidden md:flex  w-[40%]  h-full z-5 `}>
                <img
                  className="w-full h-full object-top object-cover"
                  src={e.imgUrl}
                  alt=""
                />
              </div>
              <div className="w-full md:w-[60%] h-full flex flex-col justify-center items-center gap-4 p-1 md:p-4 pb-2 md:pb-0 ">
                <h3
                  className={`subheading text-emerald-950 font-semibold relative z-10`}
                >
                  {e.name}
                </h3>
                <h4
                  className={`text-center relative z-10  md:w-[80%]`}
                  style={{
                    color: "#50653e",
                  }}
                >
                  {e.desc}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
