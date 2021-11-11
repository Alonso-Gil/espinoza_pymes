import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const id = 4;

export const ProcesosRoute = ({ userId=-1, children, ...rest }) => {

    return (
        <Route
            {...rest}
            render={({ location }) =>
                (userId === id) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}
