import React from "react";
import ceoImage from "../assets/images/ceo.webp";

const CeoSection = () => {
  return (
    <section className="w-full min-h-screen lg:h-screen bg-[#D4DBB1] p-10 flex  flex-col lg:flex-row gap-4">
      <section className="leftCeoSec relative  flex-1">
        <img
          className="w-full h-full object-contain object-center"
          src={ceoImage}
          alt=""
        />
        <div className="absolute -bottom-5 -right-2 w-55 h-30 bg-[#e68f5c] flex flex-col gap-2 items-start p-4 jus ">
          <h3 className="font-[curvyText] text-[#50653e] text-2xl font-semibold">
            DK Aryabhatta
          </h3>
          <h4 className="text-white font-semibold">
            Founder and CEO <br />
            Spectrum
          </h4>
        </div>
      </section>
      <section className="rightCeoSec  flex flex-col flex-1 font-[curvyText] gap-6  items-center p-2 text-[#50653e] ">
        <hr className="w-full h-px bg-[#50653e]" />
        <h2 className="self-start text-5xl lg:text-7xl ">
          A <span className="italic">message</span> from <br /> Our CEO
        </h2>
        <h3 className=" text-lg">
          "At Spectrum Marketing and Services, we believe that sustainable agriculture is the key to a better tomorrow. From humble beginnings to becoming a catalyst for rural empowerment, our mission is simple—support the hands that feed the nation.Together, let’s cultivate a future where every farmer thrives."
        </h3>
      </section>
    </section>
  );
};

export default CeoSection;
