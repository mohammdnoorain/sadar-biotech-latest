import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 h-auto py-10 px-6 md:px-20 flex flex-col md:flex-row items-center justify-around text-gray-800 space-y-8 md:space-y-0">
      {/* Company Logo */}
      <div className="hidden md:block">
        <img src="images/logo.jpg" alt="Logo" className="w-32 h-auto mb-20" />
      </div>
      
      {/* Contact Info */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-lg font-semibold text-green-600">Contact</h2>
        <p className="mt-1">+91 9226077649</p>
        <p className="mt-1">Above Puma Store, Floor 2</p>
        <p className="mt-1">Chogm Road, Porvorim</p>
        <p className="mt-1">North Goa 40352, India</p>
      </div>
      
      {/* Social Media Links */}
      <div className="flex flex-col items-center text-center  ">
        <h2 className="text-lg font-semibold text-green-600  ">Connect</h2>
        <div className="flex space-x-4 mb-[95px] ">
          <Link to="https://www.facebook.com/Sadarbiotech/" className="text-gray-500 hover:text-gray-700 ">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="https://www.linkedin.com/in/sadarbiotech/" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link to="#" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-twitter"></i>
          </Link> 
           <Link to="#" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-youtube"></i>
          </Link>
        </div>
      </div>
      
      {/* World Map with Marker */}
      <div className="relative hidden md:block">
        <img src="images/map3.jpeg" alt="World Map" className="w-48 h-auto" />
        <i className="fas fa-map-marker-alt text-green-600 absolute top-14 left-[99px] text-l"></i>
      </div>
    </footer>
  );
};

export default Footer; 
