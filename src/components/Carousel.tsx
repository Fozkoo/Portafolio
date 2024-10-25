import React, { useEffect, useState } from 'react';
import Helper from '../service/Helper';

const Carousel: React.FunctionComponent = () => {
  const images = Helper.imagesArecobus; // Accede al array de imágenes
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Cambia la imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full z-[1000] overflow-hidden shadow-lg">
      <div className="w-full h-64 ">
        <img
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt}
          className="object-cover w-full  h-full transition-opacity duration-500 ease-in-out"
        />
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
