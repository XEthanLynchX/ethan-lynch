import React from 'react';
import '../styling/Navbar.css'; // import the CSS file
import '../styling/style.css'; // import the CSS file
import logo from '../imgs/logo.png'; // import the logo image
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar bg-berige">
      <div className="bold">
        <img src={logo} alt="logo" />
      </div>

      <div class="font-semibold font-[monospace] text-black text-xl">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;