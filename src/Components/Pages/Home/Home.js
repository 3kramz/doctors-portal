import React from 'react';
import Banner from './Banner'
import Info from './Info/Info';
import ServicesSection from './ServicesSection/ServicesSection';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Info />
           <ServicesSection/>
        </div>
    );
};

export default Home;