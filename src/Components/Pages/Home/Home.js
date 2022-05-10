import React from 'react';
import Banner from './Banner'
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment';
import ServicesSection from './ServicesSection/ServicesSection';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
           <Banner/>
           <Info />
           <ServicesSection/>
           <MakeAppointment/>
          <Testimonials/>
        </div>
    );
};

export default Home;