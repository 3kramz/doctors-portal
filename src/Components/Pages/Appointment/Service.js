import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service
    return (
        <div className="card shadow-xl">

            <div className="card-body items-center text-center">
                <h2 className="card-title text-secom">{name}</h2>
                <p>{slots.length ? slots[0] : "Try Another Day"}</p>
                <p> {slots.length} {slots.length > 1 ? " Slots" : " Slot"} available</p>
                <div className="card-actions">
                    <button
                        disabled={!slots.length}
                        
                        className="btn btn-primary modal-button text-white">Book Now</button>
                </div>
            </div>

        </div >
    );
};

export default Service;