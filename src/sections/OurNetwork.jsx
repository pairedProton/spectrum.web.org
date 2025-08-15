import React from "react";
import odisha from "../assets/images/odisha.webp";

const OurNetwork = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-6 bg-[#50653e] text-[#D4DBB1] p-10 items-center relative">
      <hr className="w-full h-px bg-[#D4DBB1]" />
      <div className="w-full flex flex-col lg:flex-row justify-between ">
        <h3 className="font-[curvyText] text-5xl lg:text-6xl w-full lg:w-[50%] ">
          Our Network
        </h3>
        <p className="lg:w-[50%] w-full text-start">
          We partner with local farmers and growers to give our customers only
          the best and freshest ingredients.
        </p>
      </div>
      <img
        className="w-[80%] lg:w-[30%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-auto object-center object-cover"
        src={odisha}
        alt=""
      />
    </div>
  );
};

export default OurNetwork;
