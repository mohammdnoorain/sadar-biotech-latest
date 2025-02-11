import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer'
import '../../App.css';
import HeroSectionHome from '../HeroSectionHome'
import Cards from '../Cards'
import ContactSection from '../ContactSection';
import ProductShowcase from '../ProductShowcase';
import Showcase from '../Showcase';
import Showcase2 from '../Showcase2';
import Certification from '../Certification';
import Productrange from '../Productrange';
import Hero2 from '../Hero2';
import ProductList from '../productList';
const Home = () => {
  return (
    <div>

    {/* <HeroSectionHome/> */}
    <Hero2/>
    <Productrange/>
    <Showcase/>
    <ProductShowcase/>
    {/* <ProductList/> */}
    <Showcase2/>


  
    <ContactSection/>
    {/* <Certification/> */}
    <Footer />
    </div>
  )
}

export default Home
