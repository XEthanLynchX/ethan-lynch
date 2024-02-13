import React, { useState, useEffect } from 'react';
import '../styling/Navbar.css'; // import the CSS file
import '../styling/style.css'; // import the CSS file
import logo from '../imgs/logo.png'; // import the logo image
import { motion } from "framer-motion"

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState('bg-berige');
  const [textColor, setTextColor] = useState('text-black');

  useEffect(() => {
    const changeNavbarColor = () => {
      // Adjust these values to match the vertical position of your about and programs sections
      const aboutSectionPosition = 0;
      const programsSectionPosition = 4770;

      if (window.scrollY >= aboutSectionPosition && window.scrollY < programsSectionPosition) {
        setNavbarColor('bg-berige');
        setTextColor('text-black');
      } else if (window.scrollY >= programsSectionPosition) {
        setNavbarColor('bg-navy'); // Change this to your desired color
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
    </div>
  );
};

export default Navbar;