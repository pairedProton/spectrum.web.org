import { MdWhatsapp } from "react-icons/md"; 
import { CiLinkedin } from "react-icons/ci"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import React from "react";
import footer from "../assets/images/footer.png";
import { Link } from "react-router-dom";
import footertext from "../assets/images/footertext.svg";

const Footer = () => {
  return (
    <div className="w-full h-[60vh] bg-emerald-950  p-10 pb-0 text-white flex gap-6 relative flex-col justify-start items-end overflow-hidden ">
      <div className="w-full h-fit flex gap-6">
        <h2 className="text-4xl font-[curvyText] text-[]">
          Lets Go from <span className="">Grey</span> to{" "}
          <span className="">Green</span>
        </h2>
        <hr className="flex-1 h-px self-center text-[#D4DBB1]" />
      </div>

      {/* middle-section for links and ligin btn */}

      <div className="w-full h-auto  flex justify-between items-start mb-4" >
        <Link  to={'http://spectrumms.in/erp/admin/login'} className="border-2 border-white p-2 rounded-lg text-xl px-4" >Login</Link>
        <div className="flex flex-col gap-2 " >
          <div className="text-xl font-[curvyText] w-full text-center" >Follow Us</div>
          <ul className="flex flex-row gap-2 text-4xl" >
            <a href="https://www.instagram.com/spectrum_pvt_ltd/"><AiOutlineInstagram /></a>
            <a href="https://www.linkedin.com/company/spectrum-life/"><CiLinkedin /></a>
            <a href="https://whatsapp.com/channel/0029VbBGUI360eBhHo6HH73r"><MdWhatsapp /></a>
          </ul>
        </div>
      </div>

      {/* <ul className="flex flex-col gap-2 relative z-15 self-end px-6 mb-6">
        <li className="text-2xl  font-[curvyTextLight] text-[#D4DBB1]">
          Socials
        </li>
        <a 
          className="italic font-[semibold] cursor-pointer" 
          href={"https://www.linkedin.com/company/106071927/admin/dashboard/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a 
          className="italic font-[semibold] cursor-pointer" 
          href={"https://www.instagram.com/spectrum_pvt_ltd/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        
        <a 
          className="italic font-[semibold] cursor-pointer" 
          href={"https://whatsapp.com/channel/0029VbBGUI360eBhHo6HH73r"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Whatsapp
        </a>
      </ul> */}

      {/* <div className="w-full h-auto absolute left-0 bottom-0 flex flex-col gap-4">
        <img className=" object-contain" src={footertext} alt="" />
      </div> */}
      <h3 className="self-start">© 2025 Spectrum All rights reserved.</h3>
      <img
        className="w-full h-auto absolute left-0 bottom-0 object-contain"
        src={footertext}
        alt=""
      />
    </div>
  );
};

export default Footer;
