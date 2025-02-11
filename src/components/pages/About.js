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
      <div className="bg-gradient-to-b bg-white py-10">
        {/* Our Story Section */}
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-black mb-4 text-center ">
              Our Journey
            </h1>
            <p className="text-lg text-black leading-relaxed mb-4">
              Founded in 2017, Sadar Biotech Private Limited began its journey as a trading company, specializing in the export of Agro-Chemical Technicals and Active Pharmaceutical Ingredients (APIs). Driven by a vision to serve the global market, we expanded into manufacturing in 2020, acquiring two state-of-the-art agro-chemical production units in Gujarat and a pharmaceutical facility in Banda, Maharashtra.
            </p>


            {/* ########################### */}
          
          </div>
          <div>
            <img
              src="/images/about3.png"
              alt="Our Story"
              className=" w-screen rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Our Dedicated Team Section */}
      <div className="bg-white py-10">
  <div className="max-w-5xl mx-auto px-6 flex items-center">
    {/* <!-- Image Box on the Left --> */}
    <div className="w-1/3 mr-6">
      <img src="images/iso.jpg" alt="Team" className="w-full h-auto rounded-lg shadow-lg" />
    </div>
    
    {/* <!-- Text Content on the Right --> */}
    <div className="w-2/3">
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

      <CardsAbout />
       {/* Grid Sections */}
       <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Vision and Mission */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Our Vision & Mission
            </h2>
         
            <p className="text-black leading-relaxed">
              At Sadar Biotech, we envision a world where agriculture flourishes
              with the support of cutting-edge scientific solutions. Our mission
              is to provide top-tier solutions to nourish farms and safeguard
              harvests, ensuring a sustainable and thriving future for
              agriculture. We believe in the mission of safeguarding
              agricultural produce by delivering high quality products.
            </p>
          </div>

          {/* Product Specialization */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Product Specialization
            </h2>
            <p className="text-black leading-relaxed">
              In agricultural sector, we specialize in the production and
              distribution of pesticides, herbicides, fungicides and
              surfactants. Our “Factory to Farm” approach ensures that quality
              products directly reach the consumers of the agriculture
              landscape, embodying efficiency and excellence.
            </p>
          </div>

          {/* Global Presence */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Global Presence
            </h2>
            <p className="text-black leading-relaxed">
              We have expanded our reach across continents, with a significant
              presence in Russia, the CIS countries, European markets including
              the UK and Ukraine, as well as select regions in Latin America as
              well as in the United States.
            </p>
          </div>

          {/* Pharmaceutical Excellence */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Pharmaceutical Excellence
            </h2>
            <p className="text-black leading-relaxed">
              In the pharmaceutical sector, we take pride in producing
              high-quality APIs, serving as the foundation for pharmaceutical
              formulations. Our commitment to stringent quality control and
              regulatory standards positions us as a reliable partner for
              pharmaceutical companies striving for excellence.
            </p>
          </div>

          {/* Sustainability */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Commitment To Sustainability
            </h2>
            <p className="text-black leading-relaxed">
              Sadar Biotech actively pursues eco-friendly formulations and
              manufacturing processes, aligning our goals with a greener future
              for agriculture ecosystem. Our latest R&D initiatives focus on
              exploring bio-pesticides for next-generation agricultural
              sustainability.
            </p>
          </div>

          {/* Environmental Stewardship */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Environmental Stewardship
            </h2>
            <p className="text-black leading-relaxed">
              We see ourselves as protectors and stewards of the environment,
              contributing to a world where progress and preservation coexist.
              Our responsibility extends beyond profit margins, reflecting our
              dedication to a sustainable and harmonious future.
            </p>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default About;