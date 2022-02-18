import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';
import Login from './Login';

function ProtectedRoute() {
    const { isLoggedIn } = useContext(AuthContext);

    return (<>
        {isLoggedIn ? <Outlet /> :
            <Login />}
    </>);
}

export default ProtectedRoute;