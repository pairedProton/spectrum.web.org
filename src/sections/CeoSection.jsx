import React from "react";
import ceoImage from "../assets/images/ceo.png";

const CeoSection = () => {
  return (
    <section className="w-full min-h-screen h-auto bg-[#D4DBB1] p-10 flex gap-4">
      <section className="leftCeoSec relative  flex-1">
        <img
          className="w-full h-auto object-cover object-center"
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
        <h2 className="self-start text-7xl ">
          A <span className="italic">message</span> from <br /> Our CEO
        </h2>
        <h3 className=" text-lg">
          Annual reports usually start with brief messages from the company’s
          leadership team. Their personal take on the year that was can set the
          stage for the highlights, data and plans described in the rest of the
          report.
        </h3>
        <h3 className=" text-lg">
          Annual reports usually start with brief messages from the company’s
          leadership team. Their personal take on the year that was can set the
          stage for the highlights, data and plans described in the rest of the
          report.
        </h3>
      </section>
    </section>
  );
};

export default CeoSection;
