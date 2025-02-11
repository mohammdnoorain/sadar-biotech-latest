import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/agro-tect-1.jpg',
  '/images/apinew.jpg',
  '/images/field.jpg',
];

const texts = [
  'Pesticide and Fertilizer',
  'Surfactant',
  'Agro Technical Product'
];

export default function Hero2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
          alt="Sliding Background"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
        {/* Main Heading with Gradient Text */}
        <motion.h1 
  className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text 
             bg-gradient-to-r text-white
             mb-8 drop-shadow-xl animate__animated animate__fadeIn animate__delay-1s"
>
  Welcome to Sadar Biotech
</motion.h1>

        
        {/* Subtitle with Typing Animation */}
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl text-white mb-10"
        >
          We specialize in agro-chemical formulations, technicals, surfactants, solvents, and pharmaceutical products (API, Intermediaries, and Excipients), operating across multiple factories in India and delivering trust globally.
        </motion.p>

        <AnimatePresence>
          <motion.h2
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-5xl text-white font-semibold"
          >
            {texts[currentIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
