// Navbar.js
import React, { useState, useEffect } from 'react';
import '../styling/Navbar.css'; // Import the existing Navbar styles
import logo from '../imgs/logo.png'; // Import the logo image
import { motion } from "framer-motion"

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState('bg-berige');
  const [textColor, setTextColor] = useState('text-black');

  useEffect(() => {
    const changeNavbarColor = () => {
      const aboutSectionPosition = 0;
      const programsSectionPosition = 4770;

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

      <div className={`font-semibold font-[monospace] ${textColor} text-xl`}>
        <ul>
          <li className='transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110'><a href="#about"  >About</a></li>
          <li className='transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110'><a href="#programs">Programs</a></li>
          <li className='transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110'><a href="#testimonials">Testimonials</a></li>
          <li className='transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110'><a href="#contact">Contact</a></li>
          <li className='transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110'><a href="#faq">FAQ</a></li>
        </ul>
      </div>

      {/* Add the scrollbar component */}
      <div className="scrollbar-container">
        <div className="scrollbar-track">
          <div className="scrollbar-thumb"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
