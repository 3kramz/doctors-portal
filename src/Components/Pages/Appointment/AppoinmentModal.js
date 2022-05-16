import React from 'react';
import { format } from 'date-fns';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const AppoinmentModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment
    const [user] = useAuthState(auth);



    const handleSubmit = e => {
        e.preventDefault()
        const slot = e.target.slot.value

        const appointment = {
            date: format(date, 'PP'),
            treatmentID: _id,
            treatmentName: name,
            slot,
            patientName: user.displayName,
            email: user.email,
            phone: e.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(appointment),
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set,${format(date, 'PP')} at ${slot}`)
                }
                else { toast.error(`Already have an appointment on  ${data.booking?.date} at ${data.booking?.slot}`) }

            })

        refetch()

        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="Appointment-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="Appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Book appoinment for {name} on {format(date, 'PP')}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                        <select className="select select-primary w-full max-w-xs" name="slot" required readOnly >

                            {slots?.map((slot, index) => <option key={index} value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" name="name" value={user?.displayName || ''} placeholder="Your Name" className="input input-bordered w-full max-w-xs" readOnly disabled />
                        <input type="email" name="email" value={user?.email || ''} placeholder="Email Address" className="input input-bordered w-full max-w-xs" readOnly disabled />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value="Submit" className="btn btn-primary text-white w-full max-w-xs" />

                    </form>

                </div>
            </div>
        </div>

    );
};

export default AppoinmentModal;