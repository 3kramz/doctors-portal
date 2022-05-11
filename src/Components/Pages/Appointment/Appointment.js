import React , {useState} from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';
import Footer from '../../Shared/Footer'

const Appointment = () => {
    const [date, setDate]= useState(new Date())
    return (
        <div className="my-10">
           <AppointmentBanner date={date} setDate={setDate}/>
           <AvailableAppointments date={date}/>
           <Footer/>
        </div>
    );
};

export default Appointment;