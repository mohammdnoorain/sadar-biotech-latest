import React, { useState } from "react";
import "./styleCssFiles/ProductShowcase.css"; // Import the updated CSS file

const ProductShowcase = () => {
  const products = [
    {
      name: "Agro-Technical Product",
      manufacturer: "Sujag Fine Chemicals Pvt Ltd",
      description:
        "Innovative solutions for sustainable crop production and agricultural efficiency.",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      image: "images/factory2.webp",
      link: "https://sujagfinechemicals.com/",
    },
    {
      name: "Surfactant",
      manufacturer: "Sadar Biotech Pvt Ltd",
      description:
        "Surfactants play a key role in industrial cleaning and product formulations.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      image: "images/factory.jpg",
    },
    // {
    //   name: "API and Excipients",
    //   manufacturer: "Vinishaw Pharmaceuticals Pvt Ltd",
    //   description:
    //     "High-quality APIs and excipients for advanced pharmaceutical solutions.",
    //   bgColor: "bg-yellow-100",
    //   textColor: "text-yellow-700",
    //   image: "images/unnamed7.png",
    // },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="container">
      <h1 className="heading">Our Manufacturing Facilities</h1>

      {/* Burning Movable Line (Fixed) */}
      {/* <div className="burning-line-container">
        <div className="burning-line"></div>
      </div> */}

      {/* Cards Layout */}
      <div className="cards-container">
        {products.map((product, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className={`product-card ${hoverIndex === index ? "hover" : ""}`}
          >
            {/* Image Section */}
            <div className="image-container">
              <img src={product.image} alt={product.name} />
              <h2 className="image-text">{product.name}</h2>
            </div>
            {/* Manufacturer Section */}
            <p className={`manufacturer ${product.textColor}`}>
              {product.manufacturer}
            </p>
            {/* Description Section */}
            <p className="description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
