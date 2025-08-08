import React from "react";
import web_logo from "../assets/logo/web_logo.png";

const Navbar = () => {
  return (
    <header className="w-full h-16 flex justify-between  z-19 items-center px-4 p-1">
      
        <figure className="h-full w-auto flex " >
          <img className="w-auto h-full object-cover object-center" src={web_logo} />
        </figure>
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
