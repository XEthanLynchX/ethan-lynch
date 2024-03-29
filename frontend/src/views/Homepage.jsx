import React from 'react';
import Navbar from '../components/Navbar';
import Motivation from '../components/Motivation';
import About from '../components/About';
import Programs from '../components/Programs';
import Testimonial from '../components/Testimonial';
import ContactForm from '../components/ContactForm';
import Faq from '../components/Faq';
import { motion, useScroll, useSpring } from 'framer-motion';
import '../styling/style.css';

const Homepage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.0
  });

  return (
    <div>
      <motion.div className="progress-bar" style={{ scaleX }} />
      
      <Navbar />
      <Motivation />
      <div id="about"> 
        <About />
      </div>
      <div id="programs">
        <Programs />
      </div>
      <div id="testimonials">
        <Testimonial />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
};

export default Homepage;
