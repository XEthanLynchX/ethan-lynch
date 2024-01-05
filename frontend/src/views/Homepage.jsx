import React from 'react';
import Navbar from '../components/Navbar';
import Motivation from '../components/Motivation';
import About from '../components/About';
import { motion, useScroll, useSpring } from 'framer-motion';
import '../styling/style.css';

const Homepage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01
  });

  return (
    <div>
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* Include the Navbar component */}
      <Navbar />

      {/* Include the Motivation component */}
      <Motivation />

      {/* Include the About component */}
      <About />


    </div>
  );
};

export default Homepage;
