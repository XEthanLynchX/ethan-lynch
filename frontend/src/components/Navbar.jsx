import React from 'react';

const Navbar = () => {
  return (
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1em', backgroundColor: '#f8f8f8' }}>
        <div style={{ fontWeight: 'bold' }}>
          <a href="#!">Ethan Lynch</a>
        </div>

        <div>
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '1em' }}>
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