import React from 'react';
import Banner from '../../CommonPages/Banner/Banner';
import Products from '../Products/Products';
import Samary from '../Samary/Samary';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="py-20" style={{"background-color": '#e5e5eb'}}>
        <Products></Products>
        <Samary></Samary>
      </div>
    </div>
  );
};

export default Home;