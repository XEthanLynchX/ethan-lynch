import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Ethan from '../imgs/before&after/Ethan.png';
import Alex from '../imgs/before&after/Alex.png';
import Juan from '../imgs/before&after/Juan.png';
import Wub from '../imgs/before&after/Wub.png';
import Will from '../imgs/before&after/Will.png';

const Testimonials = () => {
  const images = [Ethan, Juan, Alex, Wub, Will];

  return (
    <div className="p-4">
      <div className="flex items-center justify-center md:justify-start space-x-4">
        <h1 className="text-2xl md:text-4xl font-bold">Client Transformations</h1>
        <img src={images[0]} alt="Transformation 1" className="w-32 h-32 md:w-64 md:h-64 object-cover rounded" />
      </div>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {images.slice(1).map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Transformation ${index + 2}`} className="w-full h-32 md:h-64 object-cover rounded" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;