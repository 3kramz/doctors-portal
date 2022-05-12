import React, {useState, useEffect} from 'react';
import AppointmentModal from './AppoinmentModal'
import { format } from 'date-fns';
import Service from './Service'; 

const AvailableAppointments = ({date}) => {
    
    const [services, setServices]= useState([])
    const [treatment , setTreatment]=useState({})
    useEffect(()=>{
        fetch("http://localhost:5000/service")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div>
            <h1 className="text-secondary text-center text-xl"> Available Appointments on {format(date, 'PP')}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map(service=> < Service key={service._id} setTreatment={setTreatment} service={service}/>)}
                </div>
                {
                    treatment && <AppointmentModal treatment={treatment} date={date} setTreatment={setTreatment}/>
                }
        </div>
    );
};

export default AvailableAppointments;