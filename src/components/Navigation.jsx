import React, { useState } from "react";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-[#161c29]">
      <div className="flex global-container justify-between items-center font-[monospace] text-[18px] h-[90px]">
        <a className="font-bold cursor-pointer" href="#home">
          Daniel<span className="text-[#eb4646]">.</span>
        </a>
        <div className="hidden md:flex gap-4">
          <a
            href="#about"
            className="hover:text-[#eb4646] cursor-pointer transition-all duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-[#eb4646] cursor-pointer transition-all duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-[#eb4646] cursor-pointer transition-all duration-200"
          >
            Contact
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#eb4646] focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#1c2333] text-[18px] text-white">
          <a
            href="#home"
            className="hover:text-[#eb4646] cursor-pointer transition-all duration-200 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-[#eb4646] cursor-pointer transition-all duration-200 py-2"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-[#eb4646] cursor-pointer transition-all duration-200 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-[#eb4646] cursor-pointer transition-all duration-200 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}

export default Navigation;
