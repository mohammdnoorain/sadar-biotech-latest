import React, { useState } from "react";
import emailjs from "emailjs-com";
import HeroSectionContactus from "../HeroSectionContactus";
import Footer from "../Footer";
import ContactSection from "../ContactSection";
import "../styleCssFiles/burningLine.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    designation: "",
    email: "",
    phone: "",
    subject: "",
    enquiry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here

    const serviceID = "service_y3e0suh";
    const templateID = "template_dhrarpe";
    const userID = "1Rqrv9R0hhYRVNSWb";
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({
          companyName: "",
          name: "",
          designation: "",
          email: "",
          phone: "",
          subject: "",
          enquiry: "",
        });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send the message. Please try again.");
      });
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSectionContactus />

      <div className="bg-gradient-to-r from-white via-blue-50 to-green-100 min-h-screen py-12 ">
        <div className="max-w-7xl mx-auto px-6">
          {/* Contact Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-600 hover:text-blue-900 transition-colors duration-300">
              Get in Touch
            </h1>
            {/* <div className="burning-line-container mb-8">
              <div className="burning-line"></div>
            </div> */}
            <p className="mt-4 text-lg text-gray-700">
              We’d love to hear from you! Reach out to us for any inquiries or
              support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Contact Info */}
            <div className="space-y-6 text-gray-700">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Our Units & Addresses
              </h2>
              {/* <p className="transition-transform duration-300 hover:translate-x-2">
                <span className="font-semibold text-green-600">Email:</span>{" "}
                info@sadarbiotech.com
              </p>
              <p className="transition-transform duration-300 hover:translate-x-2">
                <span className="font-semibold text-green-600">Phone:</span> +91
                9226077649
              </p> */}

              {/* ########################### */}

              <div className="space-y-4">
  {/* Registered and Admin Office in one row */}
  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
    <div className="border border-gray-300 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-1/2">
      <p className="transition-transform duration-300 hover:translate-x-2">
        <span className="font-semibold black">Registered office:</span>
        Sy. No. 136/11, Gauravaddo, Calangute, North Goa 403516
      </p>
    </div>

    <div className="border border-gray-300 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-1/2">
      <p className="transition-transform duration-300 hover:translate-x-2">
        <span className="font-semibold bold">Admin office:</span>
        Above Puma Store, Floor 2, Chogm Road, Porvorim, North Goa 403521
      </p>
    </div>
  </div>

  {/* Manufacturing Units */}
  <div className="space-y-4">
    <p className="font-semibold text-blue-900 text-2xl">Manufacturing Units:</p>

    {/* Unit 1 and Unit 2 side by side */}
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
      <div className="border border-gray-300 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-1/2">
        <p className="transition-transform duration-300 hover:translate-x-2">
          <span className="font-semibold">Unit 1:</span> C1B/42/4 & 5 G.I.D.C. Estate, 
          Nandesari, 391 340 Dist.Baroda, Gujarat India
        </p>
      </div>

      <div className="border border-gray-300 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-1/2">
        <p className="transition-transform duration-300 hover:translate-x-2">
          <span className="font-semibold">Unit 2:</span> C1B/42/6 & 7 G.I.DC. Estate, 
          Nandesari, 391 349 Dist. Baroda, Gujarat, India
        </p>
      </div>
    </div>

    {/* Unit 3 centered below */}
    <div className="flex justify-center">
      <div className="border border-gray-300 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-1/2">
        <p className="transition-transform duration-300 hover:translate-x-2">
          <span className="font-semibold">Unit 3:</span> Khasra. No. 245/46. Village Chhapur 
          Sher Afganpur Bhagwanpur Haridwar-247661
        </p>
      </div>
    </div>
  </div>
</div>



{/* ########################### */}
<div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
  <p className="transition-transform duration-300 hover:translate-x-2">
    <span className="font-semibold text-green-600">Email:</span> info@sadarbiotech.com
  </p>
  <p className="transition-transform duration-300 hover:translate-x-2">
    <span className="font-semibold text-green-600">Phone:</span> +91 9226077649
  </p>
</div>



              <div className="bg-white  flex items-center justify-center  ">
                <div className="  mx-auto p-6 shadow-lg border border-gray-200 w-[1300px] ">
                  {/* Outer Wrapper */}
                  <div className="flex flex-col md:flex-row ">
                    {/* Left Div - Contact Details */}

                    {/* Right Div - Map */}
                    <div className="w-full md:w-1/2 relative p-6 sm:object-fill">
                      {/* Map */}
                      <div className="w-full h-64 bg-gray-200  relative z-10 ">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248930.01903409262!2d73.71256223828127!3d15.525503400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfbae3f4e0ffaf%3A0x5ab7a4ffce5da3f9!2sAbove%20Puma%20Store%2C%20Floor%202%2C%20Chogm%20Rd%2C%20Porvorim%2C%20North%20Goa%2C%20Goa%20403521!5e0!3m2!1sen!2sin!4v1678192862191!5m2!1sen!2sin"
                          width="200%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          title="Google Map"
                        ></iframe>
                      </div>

                      {/* Green Div */}
                      <div className="absolute bg-green-600 w-2/3 h-[300px] top-0 left-[120%] shadow-md z-0 ">
                        {/* Green div with sharp corners */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 order-first lg:order-last">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Fill the Form to Connect
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Company Name */}
                <div className="mb-4">
                  <label
                    htmlFor="companyName"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200 hover:border-green-600"
                  />
                </div>

                {/* Name */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200 hover:border-green-600"
                  />
                </div>

                {/* Designation */}
                <div className="mb-4">
                  <label
                    htmlFor="designation"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Designation
                  </label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200 hover:border-green-600"
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200 hover:border-green-600"
                  />
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200 hover:border-green-600"
                  />
                </div>

                {/* Subject */}
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200 hover:border-green-600"
                  />
                </div>

                {/* Enquiry */}
                <div className="mb-6">
                  <label
                    htmlFor="enquiry"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Enquiry
                  </label>
                  <textarea
                    id="enquiry"
                    name="enquiry"
                    value={formData.enquiry}
                    onChange={handleChange}
                    rows="4"
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200 hover:border-green-600"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white p-3 rounded-md shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <ContactSection/> */}
      <Footer />
    </div>
  );
};

export default ContactUs;
