import React from "react";
import footer from "../assets/images/footer.png";
import { Link } from "react-router-dom";
import footertext from '../assets/images/footertext.svg'


const Footer = () => {
  return (
    <div className="w-full h-[50vh] bg-[#50653e] p-10 pb-0 text-white flex gap-6 relative flex-col justify-start items-end overflow-hidden ">
      <div className="w-full h-fit flex gap-6">
        <h2 className="text-4xl font-[curvyText] text-[]">
          Lets Go from <span className="text-zinc-400">Grey</span> to{" "}
          <span className="text-[#D4DBB1] italic">Green</span>
        </h2>
        <hr className="flex-1 h-px self-center text-[#D4DBB1]" />
      </div>
      <ul className="flex flex-col gap-2 relative z-15" >
        <li className="text-2xl  font-[curvyTextLight] text-[#D4DBB1]" >Links</li>
        <Link className="italic font-[semibold] cursor-pointer"  to={'/legal'} >Legal</Link>
        <Link  className="italic font-[semibold] cursor-pointer" to={'/business-terms'} >Business Terms</Link>
        
      </ul>
     <img className="w-full h-auto absolute left-0 bottom-0 object-contain"  src={footertext} alt="" />
    </div>
  );
};

export default Footer;
