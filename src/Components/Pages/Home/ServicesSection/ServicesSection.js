import React from 'react';
import Service from './Service';
import Services from './Services';

const ServicesSection = () => {
    return (
        <div className="mt-24">
            <h3 className="text-center text-primary font-bold text-2xl mt-5 uppercase">Our Services</h3>
            <h1 className="text-center font-normal text-accent text-5xl mt-5 mb-20">Service We Provide</h1>
            <Services/>
            <Service/>
        
        </div>
    );
};

export default ServicesSection;