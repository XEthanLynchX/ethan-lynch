import React from 'react';


const ImageTextComponent = ({ text, imageUrl }) => {
  return (
    <div className="flex items-center justify-center h-screen">
     
      <div className="w-1/2 p-8">
        <h2 className="text-3xl font-bold mb-4">{text}</h2>
        <p className="text-gray-600">
        Hello there! I'm Ethan Lynch, a 20-year-old fitness enthusiast with a passion for self-development and continuous progress. With 2 1/2 years of dedicated experience in bodybuilding, I understand the transformative power that a commitment to health and fitness can bring.
        </p>
      </div>

     
      <div className="w-1/2">
        <img
          src={imageUrl}
          alt="Image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>




  );
};

export default ImageTextComponent;