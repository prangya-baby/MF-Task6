import React from 'react';
import Photo from './Photo';

const photos = [
  'photo1.jpg',
  'photo2.jpg',
  'photo3.jpg',
  'photo4.jpg',
  'photo5.jpg',
  'photo6.jpg',
  'photo7.jpg',
  'photo8.jpg',
  'photo9.jpg',
  'photo10.jpg',
  'photo11.jpg',
  'photo12.jpg',
  'photo13.jpg',
  'photo14.jpg',
  'photo15.jpg',
  
  
  // add more photos
];

const PhotoGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <Photo key={index} src={`/photos/${photo}`} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
