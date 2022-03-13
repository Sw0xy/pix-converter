import React from "react";

function Footer() {
  return (
    <div className="w-full relative bottom-0 left-0 h-20 mt-11 p-6 border-t border-white flex flex-col md:flex-row text-center md:text-left justify-between bg-dark text-primary">
      <p className="px-11">© 2022</p>
      <a href="/" className="text-sm hover:text-white">
        pixconverter.com
      </a>
     <div className="mt-3 md:mt-0">
     <a href="/" className="text-sm px-6 hover:text-white">
       contact
      </a>
      <a href="/" className="text-sm px-6 hover:text-white">
        privacy
      </a>
     </div>

    </div>
  );
}

export default Footer;
