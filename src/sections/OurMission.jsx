import React from "react";
import handgrain from "../assets/images/handgrain.webp";

const OurMission = () => {
  return (
    <div className=" w-full h-screen overflow-hidden relative flex justify-center items-center">
      <img
        className=" absolute z-8 w-full h-full object-cover object-top"
        src={handgrain}
        alt=""
      />
      <div className=" relative z-10  flex flex-col gap-4 p-10  text-white justify-center items-center  text-center backdrop-blur-md">
        <h3 className="font-[curvyText] w-full text-white text-center text-6xl ">
          Our Mission and Vision
        </h3>
        <p className="" >
          Spectrum Marketing and Services Pvt. Ltd. is a new-age agricultural
          enterprise dedicated to reshaping the future of Indian farming. With a
          deep commitment to empowering farmers and revitalizing rural
          communities, Spectrum operates through four dynamic verticals—Spectrum
          Krishi, Spectrum Shuddh, Spectrum Setu, and Spectrum Vikas. Each
          represents a pillar of transformation: sustainable cultivation,
          organic value creation, direct market access, and continuous
          agricultural innovation.{" "}
        </p>

        
        <p>
          Blending traditional wisdom with cutting-edge technology, we champion
          eco-friendly practices, zero-waste models, and tech-enabled solutions
          that elevate productivity while protecting nature. From farm to
          market, seed to strategy—Spectrum is building an inclusive,
          future-ready agricultural ecosystem that nourishes people, planet, and
          prosperity.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
