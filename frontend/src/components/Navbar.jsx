import React, { useState, useEffect } from 'react';
import '../styling/Navbar.css'; // Import the existing Navbar styles
import logo from '../imgs/logo.png'; // Import the logo image
import { motion } from "framer-motion"

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState('bg-berige');
  const [textColor, setTextColor] = useState('text-black');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      const aboutSectionPosition = 0;
      let programsSectionPosition = 4770;

      if (window.innerWidth <= 768) {
        programsSectionPosition = 8280; // Adjust this value as needed
      }

      if (window.scrollY >= aboutSectionPosition && window.scrollY < programsSectionPosition) {
        setNavbarColor('bg-berige');
        setTextColor('text-black');
        
      } else if (window.scrollY >= programsSectionPosition) {
        setNavbarColor('bg-navy');
        setTextColor('text-white');
       
      }
    };

    window.addEventListener('scroll', changeNavbarColor);

    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  return (
    <div className={`navbar ${navbarColor}`}>
      <div className="bold">
        <img src={logo} alt="logo" />
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-2 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white ">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>

      <div className={`font-semibold font-[monospace] ${textColor} text-xl ${isOpen ? "" : "hidden"} md:block`}>
        <ul>
          <li className='transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110'><a href="#about"  >About</a></li>
          <li className='transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110'><a href="#programs">Programs</a></li>
          <li className='transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110'><a href="#testimonials">Testimonials</a></li>
          <li className='transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110'><a href="#contact">Contact</a></li>
          <li className='transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110'><a href="#faq">FAQ</a></li>
        </ul>
      </div>

     
    </div>
  );
};

export default Navbar;