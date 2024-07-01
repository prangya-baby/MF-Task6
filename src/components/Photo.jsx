import React from 'react';

const Photo = ({ src }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
      <img src={src} alt="Gallery Photo" className="w-full h-full object-cover" />
    </div>
  );
};

export default Photo;
