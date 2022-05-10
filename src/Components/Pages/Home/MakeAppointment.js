import React from 'react';
import appointmentBg from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'
import ButtonPrimary from '../../Shared/ButtonPrimary';

const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointmentBg   })`
        }} 
        className="flex justify-center items-center mt-24  ">
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className="text-white  text-xl font-bold "> Appointment </h3>
                <h2 className='text-primary text-3xl'> Make an appointment Today</h2>
                <p className='text-white' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non similique totam sequi impedit. Nulla, odit veritatis cupiditate quidem officiis magnam temporibus sunt aliquam praesentium est sequi fuga atque quas illum neque officia laboriosam excepturi iusto, commodi quia, autem facere dignissimos.</p>
                <ButtonPrimary>Appointment</ButtonPrimary>
            </div>
        </section>
    );
};

export default MakeAppointment;