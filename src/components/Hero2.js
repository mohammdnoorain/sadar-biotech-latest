import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/20004.avif',
  '/images/s2.jpg',
  '/images/20005.jpg',
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
      {/* Background Image Transition */}
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

      {/* Content Container */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
        {/* Main Heading with Gradient Text */}
        <motion.h1
          className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text 
                     bg-gradient-to-r text-white mb-8 drop-shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to Sadar Biotech
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl text-white mb-12 max-w-[1300px]"
        >
          We specialize in agro-chemical formulations, technicals, surfactants, solvents, and pharmaceutical products (API, Intermediaries, and Excipients), operating across multiple factories in India and delivering trust globally.
        </motion.p>
      </div>

      {/* Subheading Text */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <AnimatePresence>
          <motion.h2
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-5xl text-center text-white font-semibold"
          >
            {texts[currentIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Indicator Dots */}
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
