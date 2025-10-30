import { MdWhatsapp } from "react-icons/md"; 
import { CiLinkedin } from "react-icons/ci"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import React from "react";
import { Link } from "react-router-dom";
import footertext from "../assets/images/footertext.svg";

const Footer = () => {
  return (
    <div className="w-full h-[60vh] md:h-[40vh] lg:h-[85vh] bg-emerald-950 p-5 md:p-10 pb-0 text-white flex gap-6 relative flex-col justify-start items-end overflow-hidden  ">
      <div className="w-full h-fit flex gap-2 md:gap-6">
        <h2 className="text-2xl md:text-4xl font-[curvyText]">
          Lets Go from <span className="">Grey</span> to{" "}
          <span className="">Green</span>
        </h2>
        <hr className="flex-1 h-px self-center text-[#D4DBB1]" />
      </div>

      {/* middle-section for links and login btn */}

      <div className="w-full h-auto  flex justify-between items-start lg:mb-0 " >
        <div className="leftFooterSec flex flex-col gap-2 ">
        <Link  to={'http://spectrumms.in/erp/admin/login'} className="border-2 border-white p-2 rounded-lg text-xl px-4 w-fit mb-4 lg:mb-6" >Login</Link>

        <Link to={'tel:+919114040067'} className="" >Contact: <br className="flex md:hidden" /> +91-9114040067</Link>
        <Link to={'mailto:info@thespec.life'} className="" >Email: <br className="flex md:hidden" /> Info@TheSpec.Life</Link>
        <Link to={'https://maps.app.goo.gl/dUR9MPJ4dnLviHrt8'} className="" >Address:<br className="flex md:hidden" /> Block - 2, Second Floor <br />
        BMC Bhawani Mall St, <br /> 
        Saheed Nagar,<br className="" />
         Bhubaneswar,<br className="" /> Odisha 751007
        
        </Link>
        </div>
        <div className="flex flex-col gap-2 -mt-2" >
          <div className="text-xl font-[curvyText] w-full text-center" >Follow Us</div>
          <ul className="flex flex-row gap-2 text-4xl" >
            <a href="https://www.instagram.com/spectrum_pvt_ltd/"><AiOutlineInstagram /></a>
            <a href="https://www.linkedin.com/company/spectrum-life/"><CiLinkedin /></a>
            <a href="https://whatsapp.com/channel/0029VbBGUI360eBhHo6HH73r"><MdWhatsapp /></a>
          </ul>
        </div>
      </div>

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
