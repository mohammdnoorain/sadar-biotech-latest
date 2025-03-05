import React, { useState,useRef } from "react";
import HeroSectionProduct from "../HeroSectionProduct";
import Footer from "../Footer";
import Showcase2 from "../Showcase2";
import ProductList from "../productList";
import "../styleCssFiles/ProductShowcase.css"; // Import the CSS file for styles

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [linePosition, setLinePosition] = useState(null);
  const productRefs = useRef([]);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

   

  

  const productData = [
    {
      id: 1,
      name: "API & Excipient",
      table: [
        {
          category: "API",
          products: [
            { name: "Amitriptyline HCL", standards: ["IP", "BP", "USP"] },
            { name: "Bisoprolol Fumarate", standards: ["USP", "BP"] },
            { name: "Calcium D Saccharate", standards: ["USP"] },
            { name: "Clotrimazole", standards: ["IP", "BP", "USP"] },
            { name: "Desloratadine", standards: ["EP"] },
            { name: "Diclofenac Sodium", standards: ["IP", "USP"] },
            { name: "Fluconazole", standards: ["IP", "BP", "USP", "EP"] },
            { name: "Folic Acid", standards: ["IP", "BP", "USP"] },
            { name: "Gabapentin", standards: ["IP", "BP", "USP"] },
            { name: "Gliclazide", standards: ["IP", "BP"] },
            { name: "Iron sucrose", standards: ["USP"] },
            { name: "Labetalol HCL", standards: ["USP", "BP", "IP"] },
            { name: "Levocetirizine HCL", standards: ["IP", "USP"] },
            { name: "Lisinopril", standards: ["USP"] },
            { name: "Loratidine", standards: ["IP", "P", "USP"] },
            { name: "Lumefantrine", standards: ["USP"] },
            { name: "Minoxidil", standards: ["BP", "IP", "EP", "USP"] },
            { name: "N-Acetyl-L-Cysteine", standards: ["USP", "EP"] },
            { name: "Nebivolol Hydrochloride", standards: ["IP"] },
            { name: "Ondansetron Hydrochloride", standards: ["BP", "USP", "EP"] },
            { name: "Phenylephrine HCL", standards: ["IP", "BP", "USP"] },
            { name: "Rosuvastatin Calcium", standards: ["IP", "BP", "EP"] },
            { name: "Salbutamol Sulphate", standards: ["IP", "BP"] },
            { name: "Sodium Valproate", standards: ["IP", "BP"] },
            { name: "Topiramate", standards: ["IP", "USP"] },
            { name: "Paracetamol", standards: ["CEP", "IP"] }
          ],
        },
        {
          category: "Excipient",
          products: [
            { name: "Crospovidone" },
            { name: "Ethyl Cellulose" },
            { name: "Hydroxy Propyl Methyl Cellulose" },
            { name: "Hydroxypropyl Methyl Cellulose Phthalate" },
            { name: "Low Substituted Hydroxypropyl Cellulose" },
            { name: "Fumed Silica" },
            { name: "Povidone K" },
            { name: "Lactulose" },
            { name: "Ethyl cellulose" },
            { name: "Hypromellose Phthalate" },
            { name: "Trichloroisocyanzuric Acid Dry" },
            { name: "Hydroxypropyl Methyl Cellulose or Polyvinyl alcohol" },
            { name: "Pregelatinized Starch" },
            { name: "Creatine Mono 200 mesh" },
            { name: "Ashwagandha Root Powder" },
            { name: "Xanthum Gum" },
            { name: "Sucralose USP/FCC" },
            { name: "Alpha Lipoic Acid USP" },
            { name: "Pancreatin" }
          ],
        },
      ],
    },

    {
      id: 3,
      name: "Surfactant & Solvent",
      table: [
        {
          category: "Surfactants ",
          products: [
            {
              Name: "SBAG OR 36,40",
              chemicalName: "Castor Oil Ethoxylates",
              casNo: "61791-12-6",
            },
            {
              Name: "SBAG VO/ 2003",
              chemicalName: "Polyethylene Glycol Fatty Acid Ester",
              casNo: "220037-02-5",
            },
            {
              Name: "SBAG 4894",
              chemicalName: "Fatty Alcohol Ethoxylate",
              casNo: "68131-39-5",
            },
            {
              Name: "SBAG B10",
              chemicalName: "Fatty Alcohol Ethoxylated",
              casNo: "68439-46-3",
            },
            {
              Name: "SBAG ET/15,25",
              chemicalName: "Tallow Amine Ethoxylated",
              casNo: "61791-26-2",
            },
            {
              Name: "SBAG 800",
              chemicalName: "Isodecyl Alcohol Ethoxylate",
              casNo: "61827-42-7",
            },
            {
              Name: "SBAG LT 70",
              chemicalName: "Lauryl Alcohol Ethoxylates 7 moles of EO",
              casNo: "68439-50-9",
            },
            {
              Name: "SBAG 860/P",
              chemicalName: "Isodecyl Alcohol Ethoxylate",
              casNo: "78330-20-8",
            },
            {
              Name: "SBAG 4DV",
              chemicalName: "Polyarylphenyl ether sulphate ammonium salt",
              casNo: "137672-70-9",
            },
            {
              Name: "SBAG CY/8",
              chemicalName: "Tristyrenated Phenol Ethoxylated",
              casNo: "99734-09-5",
            },
            {
              Name: "SBAG FL",
              chemicalName: "Tristyrylphenol ethoxylated 16 EO phosphate ester, TEA Sal",
              casNo: "105362-40-1",
            },
            {
              Name: "SBAG T20",
              chemicalName: "Polysorbate 20",
              casNo: "9005-64-5",
            },
            {
              Name: "SBAG T60",
              chemicalName: "Polysorbate 60",
              casNo: "9005-67-8",
            },
            {
              Name: "SBAG T80",
              chemicalName: "Polysorbate 80",
              casNo: "9005-65-6",
            },
            {
              Name: "SBAG T85",
              chemicalName: "Polysorbate 85",
              casNo: "9005-70-3",
            }
          ],
        },


 
        {
          category: "Solvent",
          products: [
          
            {
    
              name: "Isophorone",
              packaging: "195 Kg Drum",
              purity: "95-99%",
            },
            {
       
              name: "Solvent S 150",
              packaging: "200 Kg Drum, IBC",
            },
            {
        
              name: "Solvent S 200",
              packaging: "200 Kg Drum, IBC",
            }
          ],
        },
      ],
    },
  
    {
      id: 5,
      name: "Agro-Chemical Technical",
      table: [
        {
          category: "Agro-Technical Products",
          products: [
            {
              name: "Alpha Cypermethrin",
              concentration: "97%",
              category: "Insecticide",
              packaging: "50 Kg Drum",
            },
            {
              name: "Aluminum Phosphide",
              concentration: "56%",
              category: "Insecticide",
              packaging: "20 Kg Box",
            },
            {
              name: "Bifenthrin",
              concentration: "96% – 98%",
              category: "Insecticide",
              packaging: "120 Kg Drum",
            },
            {
              name: "Chlorantraniliprole",
              concentration: "97%",
              category: "Insecticide",
              packaging: "25 Kg",
            },
            {
              name: "Chlormequat Chloride",
              concentration: "60% – 78%",
              category: "PGR",
              packaging: "50/1000 Lt",
            },
            {
              name: "Chlorpyrifos",
              concentration: "97% – 98%",
              category: "Insecticide",
              packaging: "275 Kg",
            },
            {
              name: "Cloquintocet Mexyl",
              concentration: "95% – 97%",
              category: "Herbicide",
              packaging: "25 Kg",
            },
            {
              name: "Copper Hydroxide",
              concentration: "77%",
              category: "Fungicide",
              packaging: "10 Kg",
            },
            {
              name: "Copper Oxychloride",
              concentration: "58%",
              category: "Fungicide",
              packaging: "25 Kg",
            },
            {
              name: "Cypermethrin",
              concentration: "93% – 95%",
              category: "Insecticide",
              packaging: ["25 Kg", "200 Kg", "225 Kg", "240 Kg"],
            },
            {
              name: "Cyproconazol",
              concentration: "95%",
              category: "Fungicide",
              packaging: "25 Kg",
            },
            {
              name: "Deltamethrin",
              concentration: "98%",
              category: "Insecticide",
              packaging: ["25 Kg", "50 Kg", "100 Kg"],
            },
            {
              name: "Dicamba",
              concentration: "98%",
              category: "Herbicide",
              packaging: ["50 Kg", "800 Kg"],
            },
            {
              name: "2,4 D Acid",
              concentration: "98%",
              category: "Herbicide",
              packaging: ["900 Kg", "500 Kg", "25 Kg"],
            },
            {
              name: "2,4D Ester",
              concentration: "97%",
              category: "Herbicide",
              packaging: ["1100 Kg", "250 Kg"],
            },
            {
              name: "Fipronil",
              concentration: "95%",
              category: "Herbicide",
              packaging: "25 Kg Drum",
            },
            {
              name: "Indoxocarb",
              concentration: "9:1",
              category: "Insecticide",
              packaging: "25 Kg",
            },
            {
              name: "Lambda Cyhalothrin",
              concentration: "97%",
              category: "Insecticide",
              packaging: ["25 Kg", "50 Kg"],
            },
            {
              name: "Mancozeb",
              concentration: "80-85%",
              category: "Fungicide",
              packaging: ["10 Kg", "15 Kg"],
            },
            {
              name: "Metribuzin",
              concentration: "97%",
              category: "Herbicide",
              packaging: "25 Kg",
            },
            {
              name: "Mesotrione",
              concentration: "97%",
              category: "Herbicide",
              packaging: ["25 Kg", "50 Kg"],
            },
            {
              name: "Permethrin",
              concentration: "92% – 94%",
              category: "Insecticide",
              packaging: ["200 Kg", "25 Kg"],
            },
            {
              name: "Propiconazole",
              concentration: "95%",
              category: "Fungicide",
              packaging: "220 Kg Drum",
            },
            {
              name: "Propoxur",
              concentration: "98%",
              category: "Insecticide",
              packaging: "25 Kg Drum",
            },
            {
              name: "Thiacloprid",
              concentration: "97%",
              category: "Insecticide",
              packaging: "25 Kg",
            },
            {
              name: "Transfluthrin",
              concentration: "98%",
              category: "Insecticide",
              packaging: ["25 Kg", "50 Kg"],
            },
            {
              name: "Tribasic Copper Sulphate",
              concentration: "97%",
              category: "Fungicide",
              packaging: "25 Kg",
            },
            {
              name: "Trichoderma Viride",
              concentration: "Bio",
              category: "Fungicide",
              packaging: "Not Specified",
            }
          ],
        },
      ],
    },

  ];

  return (
    <div>
    <HeroSectionProduct />
    <ProductList />
    <div className="w-full px-4 py-10 bg-gradient-to-r from-white via-blue-50 to-green-200">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-green-600 hover:text-blue-900 transition-colors duration-300">
        Our Products
      </h1>
  
      <div className="flex flex-wrap justify-center gap-4 md:gap-1 mb-6">
  {productData.map((item, index) => (
    <div
      key={item.id}
      className="w-full sm:w-1/3 md:w-1/3 lg:w-[425px] h-20 bg-white border-l-2 border-r-2 border-blue-800 rounded-lg shadow-lg p-4 md:p-6 cursor-pointer relative hover:text-blue-800 flex items-center justify-center"
      ref={(el) => (productRefs.current[index] = el)}
      onClick={() => toggleDropdown(index)}
    >
      <h2
        className={`text-lg md:text-2xl font-semibold text-center cursor-pointer transition-transform duration-300 hover:scale-105 ${activeIndex === index ? 'text-green-600' : ''}`}
      >
        <span className="text-2xl md:text-3xl mr-3 ">
          {activeIndex === index ? "-" : "+"}
        </span>
        {item.name}
      </h2>
      {activeIndex === index && (
  <div className="absolute left-1/2 transform -translate-x-1/2 
                  hidden lg:block  /* Hide on small & medium devices, show on large screens */
                  lg:top-20 lg:h-9 lg:w-[2px] bg-green-600 transition-all duration-300">
  </div>
)}

    </div>
  ))}
</div>


      {/* ############# */}
  
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 ">
        {productData.map((item, index) => (
          <div
            key={item.id}
            className={`w-full max-w-7xl rounded-lg shadow-lg p-4 md:p-6 border-t-4 border-green-600 ${
              activeIndex === index ? "" : "hidden"
            }`}
          >
            <h2 className="text-lg md:text-2xl font-semibold text-center">{item.name}</h2>
  
            <div className="relative w-full flex justify-center items-center">
              {activeIndex === index && (
                <div className="mt-4 w-full">
                  {item.table.map((tableItem, i) => (
                    <div key={i} className="mb-6">
                      <h3 className="text-base md:text-xl font-semibold mb-4 transition-transform duration-300 ">
                        {tableItem.category}
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-blue-500">
                          <thead>
                            <tr className="bg-blue-900 text-white text-xs md:text-sm">
                              {Object.keys(tableItem.products[0] || {}).map((header, idx) => (
                                <th
                                  key={idx}
                                  className="border border-blue-300 p-2 capitalize  transition-transform duration-300 hover:scale-105"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {tableItem.products.map((product, j) => (
                              <tr
                                key={j}
                                // className="hover:bg-green-600 cursor-pointer transition-transform duration-300 hover:scale-105 hover:text-white text-xs md:text-sm"
                                 className="  text-xs md:text-sm"
                              >
                                {Object.values(product).map((value, idx) => (
                                  <td key={idx} className="border border-blue-500 p-2">
                                    {value}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  
    <Footer />
  </div>


  
  );
};

export default Products;
