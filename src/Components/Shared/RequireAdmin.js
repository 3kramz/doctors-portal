import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init'

const RequireAdmin = ({ children }) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    



    if(loading){
        return <button className="btn loading "></button>
    }
    
    if (!user) { return <Navigate to="/login" state={{ from: location }} replace />; }

    return children;
};

export default RequireAdmin;