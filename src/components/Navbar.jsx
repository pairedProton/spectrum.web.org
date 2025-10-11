import { FaUserAlt } from "react-icons/fa"; 
import React from "react";
import web_logo from "../assets/logo/web_logo.png";
import login from "../assets/logo/login.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className=" absolute w-full h-16 flex justify-between  z-19 items-center px-4 p-1">
      
        <figure className="h-full w-auto flex " >
          <img className="w-auto h-full object-cover object-center" src={web_logo} />
        </figure>
        {/* <Link  to={'http://spectrumms.in/erp/admin/login'} className="w-auto h-[50%]  rounded flex gap-3 justify-center items-center p-4 cursor-pointer text-white bg-[#1b3a2a]" >
          <FaUserAlt className=" " />
          <h4 className="  font-semibold" >Login</h4>
        </Link> */}
        {/* <nav className="w-100 h-full flex justify-center">
          <ul className="list-none w-full flex justify-around items-center text-lg text-white font-semibold ">
            <li>Home</li>
            <li>Vision</li>
            <li>Stories</li>
            <li>Partners</li>
          </ul>
        </nav> */}
      
    </header>
  );
};

export default Navbar;
