import React from 'react';
import '../styling/Navbar.css'; // import the CSS file
import logo from '../imgs/logo.png'; // import the logo image

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="bold">
        <img src={logo} alt="logo" />
      </div>

      <div class="font-semibold">
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