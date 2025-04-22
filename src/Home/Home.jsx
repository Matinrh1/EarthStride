import React from 'react';
import HeroSection from './HeroSection';
import TextSection from './TextSection';
import ProductShowcase from './ProductShowcase';
import StyleCards from './StyleCards';
import ShopSlider from './ShopSlider';
import SignupCard from './SignupCard';
import CategorySection from './CategorySection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategorySection/>
      <TextSection />
      <ProductShowcase />
      <StyleCards />
      <ShopSlider />
      <SignupCard />
    </>
  );
};

export default Home;
