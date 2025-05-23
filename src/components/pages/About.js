import React from "react";
import HeroSectionAbout from "../HeroSectionAbout";
import Footer from "../Footer";
import CardsAbout from "../CardsAbout";
import ContactSection from "../ContactSection";
import '../styleCssFiles/burningLine.css'

const About = () => {
  return (
    <div>
      <HeroSectionAbout />
      <div className="bg-gradient-to-b from-white to-white py-10">
  {/* Our Story Section */}
  <div className="max-w-5xl mx-auto px-4 text-center">
    <h1 className="text-4xl font-bold text-black mb-4">Our Journey</h1>
    <p className="text-lg text-black leading-relaxed">
      Founded in 2017, Sadar Biotech Private Limited began its journey as a trading company,
      specializing in the export of Agro-Chemical Technicals and Active Pharmaceutical Ingredients (APIs).
      Driven by a vision to serve the global market, we expanded into manufacturing in 2020, acquiring two
      state-of-the-art agro-chemical production units in Gujarat and a pharmaceutical facility in Banda, Maharashtra.
    </p>
  </div>
</div>


      {/* Our Dedicated Team Section */}
      <div className="bg-white py-10  ">
      <div className="max-w-5xl mx-auto px-6 flex flex-col-reverse sm:flex-row items-center ">


    {/* <!-- Image Box on the Left --> */}
    <div className="w-1/3 mr-6 mt-4">
      <img src="images/iso.jpg" alt="Team" className="w-full h-auto rounded-lg shadow-lg" />
    </div>
    
    {/* <!-- Text Content on the Right --> */}
    <div className="w-full sm:w-4/5 md:w-2/3">

      <p className="text-lg text-black leading-relaxed mb-6">
        With a customer-centric approach and a commitment to quality, Sadar Biotech now serves over 25 countries, earning a reputation as a trusted and reliable supplier. Our success is built on a foundation of excellence in product innovation, robust logistics support, and the dedication of our skilled professionals. At Sadar Biotech, we believe in making a positive impact—delivering high-quality solutions that drive growth and sustainability in the industries we serve.
      </p>
      <h2 className="text-2xl font-bold text-black mb-6 ">Our Dedicated Team</h2>
      <p className="text-lg text-black leading-relaxed mb-4">
        We believe that our team is our greatest asset. Our highly skilled and experienced professionals are passionate about agriculture and committed to exceeding customer expectations.
      </p>
      <ul className="list-disc list-inside text-black leading-relaxed">
        <li><strong>Manufacturing Experts:</strong> Our team of qualified chemists and engineers ensures the efficient and consistent production of our products.</li>
        <li><strong>Logistics Specialists:</strong> Our dedicated logistics team ensures timely and secure delivery of your orders across the globe.</li>
        <li><strong>Marketing Professionals:</strong> Our marketing team stays abreast of the latest market trends and customer needs, enabling us to develop innovative solutions that meet your specific requirements.</li>
      </ul>
    </div>
  </div>
</div>




      {/* ########################### */}

      {/* Building Long-Term Partnerships Section */}
      <div className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-6 ">Building Long-Term Partnerships</h2>
          <p className="text-lg text-black  leading-relaxed mb-4">
            At Sadar Biotech, we prioritize building strong and lasting relationships with our clients. We believe that trust, reliability, and punctuality are the cornerstones of a successful partnership. We are committed to:
          </p>
          <ul className="list-disc list-inside text-black  leading-relaxed mb-4">
            <li><strong>Understanding Your Needs:</strong> We take the time to understand your specific requirements and challenges to offer customized solutions.</li>
            <li><strong>Transparent Communication:</strong> We maintain open and honest communication with our clients throughout the entire process.</li>
          </ul>
        </div>
      </div>

      {/* Join Us on Our Journey Section */}
      <div className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-6 ">
          <h2 className="text-2xl font-bold text-black mb-6">Join Us on Our Journey</h2>
          <p className="text-lg text-black  leading-relaxed">
            As we continue to grow and innovate, we invite you to join us on our journey. Whether you are a business seeking a trusted supplier, or an individual business owner passionate about sustainable agriculture methods and practices, Sadar Biotech Private Limited is your partner of choice. Together, we can create a greener, more productive future for agriculture.
          </p>
        </div>
      </div>


       {/*  research and development */}
       <div className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-6 ">
          <h2 className="text-2xl font-bold text-green-600 text-center hover:text-blue-900 mb-6">Research & Development</h2>


{/* ########################### */}
<div className="bg-gradient-to-b from-white to-white py-2">
  <div className="max-w-7xl mx-auto px-2 ">
    <p className="text-lg text-black leading-relaxed mb-4">
      At Sadar Biotech Private Limited, our Research and Development (R&D) is the driving force behind sustainable agricultural innovation. With a strong focus on bio-pesticides and surfactants, we continuously strive to enhance the efficiency of agricultural inputs while maintaining our commitment to environmental responsibility. Inspired by our customers' evolving needs, we develop cutting-edge solutions that ensure optimal performance across diverse conditions.
    </p>
    <p className="text-lg text-black leading-relaxed">
      Our “Factory to Farm” approach bridges the gap between innovation and real-world application, delivering high-quality, eco-friendly products directly to you. Join us in cultivating a greener, more sustainable future for agriculture and beyond.
    </p>
  </div>
</div>




{/* ########################### */}

        </div>
      </div>

      {/* <CardsAbout /> */}
       {/* Grid Sections */}
       <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default About;