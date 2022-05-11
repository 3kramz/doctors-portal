import React from 'react';
import Banner from './Banner'
import Contact from './Contact';
import Footer from '../../Shared/Footer';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment';
import ServicesSection from './ServicesSection/ServicesSection';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div >
            <Banner />
            <Info />
            <ServicesSection />
            <MakeAppointment />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home; 