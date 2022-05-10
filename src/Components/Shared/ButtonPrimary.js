import React from 'react';

const ButtonPrimary = ({children}) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold rounded-lg  uppercase">{children}</button>
    );
};

export default ButtonPrimary;