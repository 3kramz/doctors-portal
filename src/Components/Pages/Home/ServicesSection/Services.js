import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import teeth from '../../../../assets/images/whitening.png'

const ServiceCards = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity filling",
            img: cavity
        },

        {
            _id: 3,
            name: "Teeth Whitening",
            img: teeth
        },
    ]
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {services.map(service => <ServiceCard key={service._id} img={service.img} cardTitle={service.name}/>)}
        </div>
    );
};

export default ServiceCards;