import React from 'react';
import { format } from 'date-fns';

const AppoinmentModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment
    const handleSubmit = e => {
        e.preventDefault()
        const appointment = {
            date: format(date, 'PP'),
            _id,
            serviceName:name,
            slot :e.target.slot.value,
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        }
        console.log(appointment)

        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="Appointment-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="Appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Book appoinment for {name} on {format(date, 'PP')}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                       
                        <select className="select select-primary w-full max-w-xs" readOnly >

                            {slots?.map((slot, index)=> <option key={index} value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" required/>
                        <input type="email" name="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" required/>
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required/>
                        <input type="submit" value="Submit" className="btn btn-primary text-white w-full max-w-xs" />

                    </form>

                </div>
            </div>
        </div>

    );
};

export default AppoinmentModal;