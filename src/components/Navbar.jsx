import React, { useState } from 'react';
import logo from "../assets/harshDevLogo.png";
import { FaLinkedin, FaGithub, FaDribbble, FaBehance, FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../constants/index.js";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className=' py-8 w-full'>
        <nav className='flex justify-between items-center container mx-auto px-4'>
          <a href="/">
            <img src={logo} alt="Dev logo" width={50} height={30} />
          </a>

          <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden bg-white w-[32rem]
          '>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className='text-lg text-black'>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className='hidden max-lg:flex items-center'>
            <button onClick={handleMobileMenuToggle} className='text-2xl text-black'>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className='lg:hidden absolute top-full left-0 w-full bg-white z-20 shadow-md'>
            <ul className='flex flex-col items-center gap-4 py-4'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className='text-lg text-black' onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
