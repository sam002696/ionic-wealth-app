import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuthContexts from '../../../Hooks/Firebase/useAuthContexts';
import PreLoader from '../../Shared/PreLoader/PreLoader';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuthContexts();

    if (isLoading) {
        return <PreLoader />;
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;