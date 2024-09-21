import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../pages/shared/LoadingPage/LoadingPage';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <LoadingPage></LoadingPage>
    }

    if(user){
        return children;
    }
    else{
        return  <Navigate state={{from: location}} to="/login" replace />
    }
};

export default PrivateRoute;