import React from 'react';
import { Beaker, Sprout, FlaskConical, Droplet } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductList = () => {
  const products = [
    { icon: <FlaskConical size={30} />, name: 'API & Excipient' },
    { icon: <Beaker size={30} />, name: 'Surfactant' },
    { icon: <Droplet size={30} />, name: 'Solvent' },
    { icon: <Sprout size={30} />, name: 'Agro-Chemical Technical' },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-white to-gray-100 p-8">
      <div className="max-w-7xl w-full">
        <h1 className='text-4xl font-bold text-center tracking-wide mb-6'>
          <span className='text-green-600 hover:text-blue-900'>Our Product Range</span>
        </h1>

        {/* Grid container */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="w-full flex flex-col items-center p-6 sm:p-4 bg-white rounded-xl shadow-2xl border-t-4 border-green-600 hover:shadow-green-300 transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* ✅ Properly Centered Icon */}
              <div className="bg-blue-100 p-5 sm:p-4 rounded-full flex items-center justify-center aspect-square">
                {product.icon}
              </div>
              
              <h3 className="text-lg font-medium text-gray-800 text-center mt-2">{product.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
