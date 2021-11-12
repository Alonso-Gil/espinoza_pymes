import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    userId,
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    let redirect="/";
    switch (userId) {
        case 1:
             redirect="/agenteDifusor"
            break;
        case 2: 
             redirect="/manager"
            break;
        case 3: 
            redirect="/recepcion"
            break;
        case 4: 
            redirect="/procesos"
            break;
        case 5:
            redirect="/agenteCerrador"
            break;
        case 6:
            redirect="/asesor"
            break;
        case 7:
            redirect="/finanzas"
            break;
        case 8:
            redirect="/recursosHumanos";
            break;
        case 9:
            redirect="/superAdmin"
            break;
        default:
            redirect="/"
            break;
    }

    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? ( <Redirect to= {redirect} /> )
                    : ( <Component { ...props } /> )
            )}
        
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
