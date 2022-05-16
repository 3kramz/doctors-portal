import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const [appointment, setAppointment] = useState([])
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointment(data))
        }
    }, [user])

    return (
        <div>
            my Appointment {appointment.length}
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Patient</th>
                            <th>Date</th>
                            <th>TIme</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
{

    appointment.map((a,index)=><tr>
        <td>{index+1}</td>
        <td>{a.patientName}</td>
        <td>{a.date}</td>
        <td>{a.slot}</td>
        <td>{a.treatmentName}</td>
    </tr>)
}
                        

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;