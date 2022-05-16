import React, { useState } from 'react';
import AppointmentModal from './AppoinmentModal'
import { format } from 'date-fns';
import Service from './Service';
import { useQuery } from 'react-query';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))
    if (isLoading) { return <button className="btn loading "></button> }





    return (
        <div>
            <h1 className="text-secondary text-center text-xl"> Available Appointments on {format(date, 'PP')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services?.map(service => < Service key={service._id} setTreatment={setTreatment} service={service} />)}
            </div>
            {
                treatment && <AppointmentModal 
                treatment={treatment} date={date} 
                setTreatment={setTreatment} 
                refetch={refetch}
                />
            }
        </div>
    );
};

export default AvailableAppointments;