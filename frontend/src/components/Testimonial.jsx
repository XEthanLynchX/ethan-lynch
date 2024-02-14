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
    { name: "Juan", image: Juan, alt: "Juan's Transformation", quote: "As a member of the Air Force, I've experienced tremendous benefits from Ethan's personally crafted workout routines and dietary guidance. Not only have these plans enhanced my performance at work, but they've also instilled a newfound sense of confidence within me. " },
    { name: "Alex", image: Alex, alt: "Alex's Transformation", quote: "Powerbuilding has always been my primary goal, and Ethan's nutrition plans and workout routines have been instrumental in helping me achieve a physique and strength levels that I once thought were beyond reach. His approach and tailored guidance have pushed me to surpass my own expectations" },
    { name: "Wub", image: Wub, alt: "Wub's Transformation", quote: "My initial aim was simple, to pack on muscle and improve my overall health. With Ethan's guidance, I've not only added significant muscle mass but also made remarkable strides towards a healthier lifestyle. His expertise and support have been invaluable on this journey" },
    { name: "Will", image: Will, alt: "Will's Transformation", quote: "My main goal was to achieve a more aesthetic physique, lose weight and gain muscle. Ethan's nutrition plan and workout routines has been super helpful in helping me achieve my goal. With his help I've lost 50 pounds and I've put on muscle onto my frame.  " }
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
      if (event.target.nodeName === 'IMG') {
        return;
      }

      const modalContainer = document.getElementById("modal-container");
      if (modalContainer && !modalContainer.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="p-8 bg-navy text-white border-black border-t-[12px] ">
     <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-8 md:mb-72 ml-72 mt-36 ">
        <h1 className="text-4xl md:text-7xl font-bold text-left mb-2">Client </h1>
        <h1 className="text-4xl md:text-7xl font-bold text-left mb-8 text-red">Transformations</h1>
        <p className='text-2xl font-[roboto] font-semibold w-5/6'>ELC takes pride in providing the highest quality service to clients. Below you will find several client transformations of ELC.</p>
      </div>
      <div className="max-w-xl mx-auto mr-36">
        <img src={Ethan} alt="Ethan's Transformation" className="w-full md:h-full rounded-lg shadow-lg" />
      </div>
    </div>
      <div className="inline-grid grid-cols-2 gap-4 mt-32">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center m-4 w-full">
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className="w-20 h-20 md:w-1/2 md:h-auto object-cover rounded-md shadow-lg mx-2 cursor-pointer"
              onClick={() => openModal(testimonial.image)}
            />
            <div className='w-1/2'>
              <p className="mt-2 text-center text-xl ">"{testimonial.quote}"</p>
            </div>
            
          </div>
        ))}
      </div>
      {modalImage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-50">
          <div className="relative" id="modal-container">
            <button onClick={closeModal} className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-lightred text-4xl text-bold border-black rounded-full  bg-dark p-2">✖</button>
            <img src={modalImage} alt="Modal" className="max-w-full max-h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;