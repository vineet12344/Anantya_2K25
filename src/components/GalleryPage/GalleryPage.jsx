import React, { useState } from 'react';
import AnimatedGallery from './GalleryComponent.jsx';

const Gallery = () => {
  // Define an array of image paths directly
  // const items = [
  //   { id: 1, url: '/gallery/alogo.jpg' },
  //   { id: 2, url: '/gallery/alogo.jpg' },
  //   { id: 3, url: '/gallery/alogo.jpg' },
  //   { id: 4, url: '/gallery/alogo.jpg' },
  //   { id: 5, url: '/gallery/alogo.jpg' },
  //   { id: 6, url: '/gallery/alogo.jpg' },
  //   { id: 7, url: '/gallery/alogo.jpg' },
  //   { id: 8, url: '/gallery/alogo.jpg' },
  //   { id: 9, url: '/gallery/alogo.jpg' },
  //   { id: 10, url:'/gallery/alogo.jpg' },
  // ];

  return (
    // className="grid grid-cols-3 gap-4
    <div>   
      {/* {items.map((item, index) => (
        <SliderModal key={index} item={item} itemArr={items} uniqueId={`id-${index}`} />
      ))} */}

      <AnimatedGallery/>
    </div>
  );
};

export default Gallery;
