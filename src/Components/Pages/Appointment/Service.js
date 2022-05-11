import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div className="card shadow-xl">

            <div className="card-body items-center text-center">
                <h2 className="card-title text-secom">{name}</h2>
                <p>{slots.length ? slots[0] : "Try Another Day"}</p>
                <p> {slots.length} {slots.length > 1 ? " Slots" : " Slot"} available</p>
                <div className="card-actions">
                    <label
                        disabled={!slots.length}
                        onClick={() => setTreatment(service)}
                        className="btn btn-primary modal-button text-white modal-button"
                        for="Appointment-modal"
                    >Book Now
                    </label>
                </div>


            </div>

        </div >
    );
};

export default Service;