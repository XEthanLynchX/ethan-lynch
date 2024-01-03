import React from 'react';
import Navbar from '../components/Navbar';
import Motivation from '../components/Motivation';

const Homepage = () => {
  return(
    <div style={{ position: 'relative' }}>
      <Navbar />
      <Motivation />
    </div>
  );
};

export default Homepage;