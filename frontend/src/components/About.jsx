import React from 'react';
import About1 from '../imgs/About1.jpg';
import About2 from '../imgs/About2.jpg';
import About3 from '../imgs/About3.jpg';
import About4 from '../imgs/About4.jpg';

const images = [
  About1, 
  About2,
  About3,
  About4,
];

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-lightred">
      <div className="flex items-center justify-center w-full">
        <div className="w-1/2 p-8">
          <p className="text-gray-600">
            Hello there! I'm Ethan Lynch, a 20-year-old fitness enthusiast with a passion for self-development and continuous progress. With 2 1/2 years of dedicated experience in bodybuilding, I understand the transformative power that a commitment to health and fitness can bring.
          </p>
        </div>
        <div className="w-1/2">
          <img src={About1} alt="Image" className="object-cover w-full h-full max-w-md max-h-md" />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="w-1/2 p-8">
          <img src={About2} alt="Image" className="object-cover w-full h-full max-w-md max-h-md" />
        </div>
        <div className="w-1/2">
          <p className="text-gray-600">
            I didn't start with an extensive background in fitness; I began from scratch, just like many of you. My journey into bodybuilding has been a personal quest for self-improvement and empowerment, and I've turned that journey into a valuable resource for others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;