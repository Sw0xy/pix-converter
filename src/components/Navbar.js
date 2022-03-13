import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
function Navbar() {
  return (
    <div className="w-full h-24 flex items-center">
      <a href="/" className="w-28 h-16 mx-6 flex-shrink-0">
        <img src={Logo} alt="logo" />
      </a>

      <div className="flex w-full justify-end items-center">
          
        <div className="mobile-nav bg-black overflow-hidden md:hidden list-none absolute top-0 left-0 hidden w-full mt-24 text-center ">
            <li className="text-white px-2 sm:px-5 py-2">
                <Link to="/">Home</Link>
            </li>
            <li className="text-white px-2 sm:px-5 py-2">
                <Link to="/about">About</Link>
            </li>
            <li className="text-white px-2 sm:px-5 py-2">
                <Link to="/contact">Contact</Link>
            </li>
        </div>
            <button
            onClick={() => {
                const nav = document.querySelector(".mobile-nav");
                const close = document.querySelector(".close-icon");
                const hamburger = document.querySelector(".hamburger-icon");
                nav.classList.toggle("hidden");
                close.classList.toggle("hidden");
                hamburger.classList.toggle("hidden");
            }}
            className="sm:hidden mx-4 text-white">
            <AiOutlineMenu className="hamburger-icon" size={24} />
            <CgClose className="close-icon hidden" size={24} />
            </button>
      </div>

      <ul className="w-full h-16 hidden sm:flex justify-end items-center mr-6">
            <li className="text-white px-2 sm:px-5">
            <Link to="/">Home</Link>
            </li>
            <li className="text-white px-2 sm:px-5">
            <Link to="/about">About</Link>
            </li>
            <li className="text-white px-2 sm:px-5">
            <Link to="/contact">Contact</Link>
            </li>
      </ul>
    </div>
  );
}

export default Navbar;
