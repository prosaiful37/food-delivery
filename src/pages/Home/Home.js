import React from 'react';
import Banner from './Banner/Banner';
import Summary from './BusinessSummary/Summary';
import DeliverySteps from './DeliverySteps/DeliverySteps';
import Features from './Features/Features';
import Reviews from './FoodReviews/Reviews';
import MenuDetails1 from './MenuDetails1/MenuDetails1';
import MenuPriceDetails from './MenuPriceDetails/MenuPriceDetails';
import FoodsProducts from './Products/FoodsProducts';
import SingleSide from './SingleSide/SingleSide';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <DeliverySteps></DeliverySteps>
            <SingleSide></SingleSide>
            <MenuDetails1></MenuDetails1>
            <MenuPriceDetails></MenuPriceDetails>
            <FoodsProducts></FoodsProducts>
            <Summary></Summary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;