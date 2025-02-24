import React from 'react';
import { CheckCircle, Award, Package, Factory, FlaskConical, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductRange = () => {
  const features = [
    { icon: <Award size={30} />, name: '8+ Years Of Expertise' },
    { icon: <CheckCircle size={30} />, name: 'Certified Team Of Experts' },
    { icon: <Package size={30} />, name: 'Wide Range Of Products' },
    { icon: <Factory size={30} />, name: 'Manufacturing Facility' },
    { icon: <FlaskConical size={30} />, name: 'In-House R&D Facility' },
    { icon: <Truck size={30} />, name: 'Distribution Network' },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-white to-gray-100 p-4 sm:p-8">
      <div className=" lg:w-[1400px]">
        <h1 className='text-3xl sm:text-4xl font-bold text-center mb-4 tracking-wide'>
          {/* <span className='text-green-600  hover:text-blue-900'></span> */}
          <span className='text-green-600  hover:text-blue-900 '>Why Choose  Sadar Biotech?</span>
        </h1>

        {/* <div className="w-16 sm:w-24 h-1 bg-green-600 mx-auto mb-6 rounded-full"></div> */}

        <div className="flex flex-col lg:flex-row gap-4 items-start mt-8">
          {/* <div className="flex-1 p-4 sm:p-6 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg shadow-lg text-white min-w-[250px]"> */}
          <div className="flex-1 p-4 sm:p-6  rounded-lg shadow-lg  min-w-[250px] h-[205px] border-t-4 border-green-600 ">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center text-blue-900">Our Core Values</h2>
            <p className="mb-4 sm:mb-2 text-l text-center  text-black">
              With over years of experience, we are dedicated to delivering premium quality products. Our relentless commitment to innovation and excellence drives us to be industry leaders.
            </p>
            <p className="text-l text-center">
              Our certified experts ensure top-notch standards in every product we deliver, making Sadar Biotech a name synonymous with trust and reliability.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow-lg border-t-4 border-green-600 hover:shadow-green-300 transition-shadow duration-300 min-w-[120px] sm:min-w-[150px]"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-blue-100 p-2 sm:p-1 rounded-full ">
                  {feature.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-800 text-center">{feature.name}</h3>
              </motion.div>
              // 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRange;



// ################

// import React from 'react';
// import { CheckCircle, Award, Package, Factory, FlaskConical, Truck } from 'lucide-react';
// import { motion } from 'framer-motion';

// const ProductRange = () => {
//   const features = [
//     { icon: <Award size={40} />, name: '20+ Years Of Expertise' },
//     { icon: <CheckCircle size={40} />, name: 'Certified Team Of Experts' },
//     { icon: <Package size={40} />, name: 'Wide Range Of Products' },
//     { icon: <Factory size={40} />, name: 'Manufacturing Facility' },
//     { icon: <FlaskConical size={40} />, name: 'In-House R&D Facility' },
//     { icon: <Truck size={40} />, name: 'Distribution Network' },
//   ];

//   return (
//     <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto text-center">
//         <h1 className='text-5xl font-bold text-gray-800 mb-4'>Why Choose <span className="text-green-600">Sadar Biotech</span></h1>
//         <p className="text-lg text-gray-600 mb-12">Excellence and innovation in every product we deliver.</p>

//         <div className="flex flex-wrap justify-center gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               className="w-64 h-64 bg-white border border-gray-200 rounded-xl shadow-md flex flex-col items-center justify-center text-center p-6 hover:shadow-xl transition-shadow duration-300"
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <div className="text-green-600 mb-4">
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800">{feature.name}</h3>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-16 bg-green-600 text-white py-10 px-6 rounded-xl shadow-lg">
//           <h2 className="text-3xl font-bold mb-4">Our Commitment to Quality</h2>
//           <p className="text-lg mb-4">
//             With over two decades of industry leadership, we remain dedicated to innovation, quality, and sustainable practices.
//           </p>
//           <p className="text-lg">
//             Our certified experts ensure that each product meets the highest standards, fostering trust and excellence globally.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductRange;
