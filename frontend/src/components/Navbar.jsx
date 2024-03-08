import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import { HiOutlineMail } from 'react-icons/hi'
import logo from '../imgs/logo.png'; // Import the logo image
import '../styling/Navbar.css'; // Import the existing Navbar styles

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState('bg-berige');
  const [textColor, setTextColor] = useState('text-black');
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = window.innerWidth <= 768; // Check if the screen is small

  useEffect(() => {
    const changeNavbarColor = () => {
      const aboutSectionPosition = 0;
      const programsSectionPosition = document.getElementById('programs').offsetTop;
      const faqSectionPosition = document.getElementById('faq').offsetTop;

      if (window.scrollY >= aboutSectionPosition && window.scrollY < programsSectionPosition) {
        setNavbarColor('bg-berige');
        setTextColor('text-black');
      } else if (window.scrollY >= programsSectionPosition && window.scrollY < faqSectionPosition) {
        setNavbarColor('bg-navy');
        setTextColor('text-white');
      } else if (window.scrollY >= faqSectionPosition) {
        setNavbarColor('bg-dark');
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
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-2 py-2 border rounded  hover:text-white hover:border-white mr-8 text-xs">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>

      <div className={`font-semibold font-[monospace] ${textColor} ${isSmallScreen ? "text-sm" : "text-xl"} ${isOpen ? "hidden" : ""} md:block`}>
        <ul>
          <li className='transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110'><a href="#about">About</a></li>
          <li className='transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110'><a href="#programs">Programs</a></li>
          <li className='transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110'><a href="#testimonials">Testimonials</a></li>
          <li className='transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110'><a href="#faq">FAQ</a></li>
        </ul>
      </div>

      {/* Contact Box */}
      {isOpen && (
        <div className={`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-red ${isOpen ? "" : "sm:-mr-10"}`}>
          <a href="#contact" className={`inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 ${textColor} whitespace-no-wrap bg-indigo-600 border border-indigo-700 rounded-sm shadow-sm hover:bg-indigo-700 focus:outline-none`}>
            <HiOutlineMail className="w-6 h-6" />
            <span className="hidden sm:block pl-2">Contact</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
