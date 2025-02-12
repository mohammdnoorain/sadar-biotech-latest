import React from 'react';
import { Code, Beaker, Sprout, FlaskConical, Droplet, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductList = () => {
  const products = [
    { icon: <Code size={40} />, name: 'API' },
    { icon: <FlaskConical size={40} />, name: 'Intermediates & Excipient' },
    { icon: <Beaker size={40} />, name: 'Surfactant' },
    { icon: <Droplet size={40} />, name: 'Solvent' },
    { icon: <Sprout size={40} />, name: 'Agro-Technical Products' },
    { icon: <Leaf size={40} />, name: 'Chemical Additives' },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-white to-gray-100 p-8">
      <div className="max-w-7xl w-full">
        <h1 className='text-4xl font-bold text-center  tracking-wide'>
          <span className='text-black'>Our </span>
          <span className='text-green-600'>Product Range</span>
        </h1>

        <div className="w-24 h-1 bg-green-600 mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center p-6 bg-white rounded-xl shadow-2xl border-t-4 border-green-600 hover:shadow-green-300 transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-green-100 p-4 rounded-full mb-4">
                {product.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-800 text-center">{product.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-16 p-10 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl shadow-2xl text-white">
          <h2 className="text-3xl font-semibold mb-4 text-center">Quality You Can Trust</h2>
          <p className="mb-4 text-md text-center">
            Our extensive product range is designed to meet diverse industry needs with the highest quality standards.
          </p>
          <p className="text-md text-center">
            Each product is crafted with precision and care, ensuring optimal performance and reliability.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ProductList;
