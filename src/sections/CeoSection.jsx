import React from "react";
// import ceoImage from "../assets/images/ceo.webp";
import ceoImage from "../assets/image/ceopic.jpg";

const CeoSection = () => {
  return (
    <section className="w-full min-h-screen lg:h-auto bg-[#D4DBB1] p-10 flex  flex-col lg:flex-row lg:gap-8">
      <section className="leftCeoSec relative p-4 lg:flex-1 flex justify-center lg:justify-start items-center ">
        <div className="w-full h-auto rounded-full overflow-hidden mb-6 lg:mb-36 justify-self-center " >
        <img
          className="w-full h-full object-cover object-center"
          src={ceoImage}
          alt=""
        />
        </div>
        {/* <div className="absolute -bottom-5 -right-2 w-55 h-30 bg-[#50653e] flex flex-col gap-2 items-start p-4  ">
          <h3 className="font-[curvyText] text-white text-2xl font-semibold">
            DK Aryabratta
          </h3>
          <h4 className="text-white font-semibold">
            Founder and CEO <br />
            Spectrum
          </h4>
        </div> */}
      </section>
      <section className="rightCeoSec  flex flex-col flex-1 font-[curvyText] gap-6  items-center p-2 text-[#50653e] ">
        <h2 className="self-start text-lg lg:text-3xl text-emerald-950">
          A <span className="italic ">message</span> from  Our CEO
        </h2>
        <hr className="w-full h-px bg-[#50653e]" />
        <h2 className=" self-start text-2xl  -mb-4 text-emerald-950" >Mission</h2>
        <h3 className=" text-lg">
          Spectrum Marketing and Services Pvt. Ltd. is a new-age agricultural enterprise dedicated to reshaping the future of Indian farming. With a deep commitment to empowering farmers and revitalizing rural communities, Spectrum operates through four dynamic verticals—Spectrum Krishi, Spectrum Shuddh, Spectrum Setu, and Spectrum Vikas. Each represents a pillar of transformation: sustainable cultivation, organic value creation, direct market access, and continuous agricultural innovation.s
        </h3>

        <h2 className=" self-start text-2xl  -mb-4 text-emerald-950" >Vision</h2>
        <h3 className=" text-lg">
         Blending traditional wisdom with cutting-edge technology, we champion eco-friendly practices, zero-waste models, and tech-enabled solutions that elevate productivity while protecting nature. From farm to market, seed to strategy—Spectrum is building an inclusive, future-ready agricultural ecosystem that nourishes people, planet, and prosperity.
        </h3>

        <h2 className=" self-start text-2xl  -mb-4 text-emerald-950" >Message</h2>
        <h3 className=" text-lg font-[curvyTextItalic]">
           "At Spectrum Marketing and Services, we believe that sustainable agriculture is the key to a better tomorrow. From humble beginnings to becoming a catalyst for rural empowerment, our mission is simple—support the hands that feed the nation.Together, let’s cultivate a future where every farmer thrives."
        </h3>
        <div className="flex flex-col gap-0 self-end">
          <h3 className="italic text-emerald-950 text-2xl font-semibold"  >
            DK Aryabratta
          </h3>
          <h4 className=" text-emerald-950">
            Founder and CEO
            Spectrum
          </h4>
        </div>

        
      </section>
    </section>
  );
};

export default CeoSection;
