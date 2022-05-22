import React from 'react';
import Banner from '../../CommonPages/Banner/Banner';
import Carousel from '../Carousel/Carousel';
import Products from '../Products/Products';
import Review from '../Review/Review';
import Samary from '../Samary/Samary';
import Visualizations from '../Visualizations/Visualizations';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="py-20" style={{"background-color": '#e5e5eb'}}>
        <Products></Products>
        <Samary></Samary>
        <Review></Review>
        <Visualizations></Visualizations>
        <Carousel></Carousel>
      </div>
    </div>
  );
};

export default Home;