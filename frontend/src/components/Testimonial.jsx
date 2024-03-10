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
    { name: "Juan", image: Juan, alt: "Juan's Transformation", quote: 
    "Being in the Air Force, I can't stress enough how Ethan's custom workout plans and dietary advice have truly changed the game for me. It's not just about feeling physically stronger or performing better on duty although that's definitely a big part of it. It's also about the mental boost knowing I'm taking care of myself in the best way possible. Ethan's approach isn't just a routine; it's a lifestyle that's given me a whole new level of confidence." },
    { name: "Alex", image: Alex, alt: "Alex's Transformation", quote: 
    "From day one, my focus has been on powerbuilding, and Ethan's nutrition strategies and workout plans have been perfect from the start. His personalized approach, I've not only achieved the physique I've always wanted but also reached strength levels I once thought weren't possible for me. Ethan's dedication and guidance have really pushed me." },
    { name: "Wub", image: Wub, alt: "Wub's Transformation", quote: "At first, I just wanted to get stronger and feel better overall. With Ethan's help, I've not only gained muscle, but I've also made big improvements to my health and fitness. His support and knowledge have been crucial in making real progress." },
    { name: "Will", image: Will, alt: "Will's Transformation", quote: "My main goal was to achieve a more aesthetic physique, lose weight and gain muscle. Ethan has been super helpful in helping me achieve my goal. With his help I've lost 50 pounds and I've put on a bunch of muscle onto my frame." }
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
    <div className="p-8 bg-navy text-white border-black border-t-[12px] border-b-[12px]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
        <div className="mb-4 md:mb-0 md:max-w-[50%] ml-4 md:ml-12 mt-8 md:mt-20">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-left mb-2">Client </h1>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-left mb-4 text-red">Transformations</h1>
          <p className='text-lg md:text-xl lg:text-2xl font-[Georgia] font-semibold'>ELC takes pride in providing the highest quality service to clients. Below you will find several client transformations of ELC.</p>
        </div>
        <div className="max-w-[100%] mx-auto mt-4 md:mt-0 md:mr-12">
          <img
            src={Ethan}
            alt="Ethan's Transformation"
            className="w-full md:h-auto rounded-lg shadow-lg mx-auto cursor-pointer"
            onClick={() => openModal(Ethan)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-8 xl:gap-12 px-4 md:px-12 xl:px-24 mt-36">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center m-4 font-[Georgia]">
            <div className="w-full md:w-72 xl:w-96">
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-full h-auto object-cover rounded-md shadow-lg cursor-pointer"
                onClick={() => openModal(testimonial.image)}
              />
              <p className="mt-2 text-center xl:text-xl">"{testimonial.quote}"</p>
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