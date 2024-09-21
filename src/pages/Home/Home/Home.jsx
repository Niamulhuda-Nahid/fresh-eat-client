import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import FastFood from '../FastFood/FastFood';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Chefs></Chefs>
          <FastFood></FastFood>
        </div>
    );
};

export default Home;