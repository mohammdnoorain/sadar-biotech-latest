// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../components/styleCssFiles/burningLine.css";

// const Showcase = () => {
//   const navigate = useNavigate();
//   const industries = [
//     {
//       name: "API & Excipients",
//       image: "images/unnamed.png",
//     },
//     {
//       name: "Agro Chemical Tech",
//       image: "images/agro-chem.jpg",
//     },
//     {
//       name: "Surfactants for Agro",
//       image: "images/s.jpg",
//     },
//     // {
//     //   name: "Surfactants for Home and Personal Care",
//     //   image: "images/homecare2.webp",
//     // },
//   ];

//   return (
//     <div className="bg-white flex flex-col items-center py-16 px-4 md:px-6">
//       <h1 className="text-3xl md:text-4xl  font-bold text-green-600 mb-8 text-center hover:text-blue-900">
//         We Target the Industries
//       </h1>

//       {/* Responsive Grid with fixed width on large screens */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full lg:w-[1400px] px-4">
//         {industries.map((industry, index) => (
//           <div
//             key={index}
//             className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//           >
//             <div
//               className="relative cursor-pointer"
//               onClick={() => navigate(industry.link)}
//             >
//               <img
//                 src={industry.image}
//                 alt={industry.name}
//                 className="w-full h-56 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-gray-800 text-center">
//                 {industry.name}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Showcase;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/styleCssFiles/burningLine.css";

const Showcase = () => {
  const navigate = useNavigate();
  const industries = [
    {
      name: "API & Excipients",
      image: "images/unnamed.png",
    },
    {
      name: "Agro Chemical Tech",
      image: "images/agro-chem.jpg",
    },
    {
      name: "Surfactants for Agro",
      image: "images/s.jpg",
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center py-16 px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-8 text-center hover:text-blue-900">
        We Target the Industries
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center px-4">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm h-[300px] md:h-[360px] flex flex-col"
          >
            <div
              className="cursor-pointer h-[85%]"
              onClick={() => navigate(industry.link)}
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-[15%] flex items-center justify-center px-4 bg-white">
              <h3 className="text-base font-semibold text-gray-800 text-center">
                {industry.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;

