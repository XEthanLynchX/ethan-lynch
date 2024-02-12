import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Ethan from '../imgs/before&after/Ethan.png';
import Alex from '../imgs/before&after/Alex.png';
import Juan from '../imgs/before&after/Juan.png';
import Wub from '../imgs/before&after/Wub.png';
import Will from '../imgs/before&after/Will.png';

const Testimonials = () => {
  const testimonials = [
    { name: "Ethan", image: Ethan, alt: "Ethan's Transformation" },
    { name: "Juan", image: Juan, alt: "Juan's Transformation" },
    { name: "Alex", image: Alex, alt: "Alex's Transformation" },
    { name: "Wub", image: Wub, alt: "Wub's Transformation" },
    { name: "Will", image: Will, alt: "Will's Transformation" }
  ];

  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const modalContainer = document.getElementById("modal-container");
      if (modalContainer && !modalContainer.contains(event.target)) {
        closeModal();
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="p-8 bg-berige text-black">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Client Transformations</h1>
      <div className="flex justify-center mb-8">
        {testimonials.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.image}
            alt={testimonial.alt}
            className="w-20 h-20 md:w-72 md:h-auto object-cover rounded-md shadow-lg mx-2 cursor-pointer"
            onClick={() => openModal(testimonial.image)}
          />
        ))}
      </div>
      <Carousel autoPlay infiniteLoop showThumbs={false} className="max-w-xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex justify-center">
            <img src={testimonial.image} alt={testimonial.alt} className="w-full md:h-96  rounded-lg shadow-lg" />
          </div>
        ))}
      </Carousel>
      {modalImage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-50">
          <div className="relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-xl focus:outline-none">X</button>
            <img src={modalImage} alt="Modal" className="max-w-full max-h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
