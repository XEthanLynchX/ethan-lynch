import React from 'react';

const ImageTextComponent = ({ text, imageUrl }) => {
  return (
    <div className="flex items-center justify-center h-screen">
     
      <div className="w-1/2 p-8">
        <h2 className="text-3xl font-bold mb-4">{text}</h2>
        <p className="text-gray-600">
          Replace this with your detailed description or any additional text you want to display.
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