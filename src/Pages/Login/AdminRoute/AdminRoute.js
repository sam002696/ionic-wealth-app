import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuthContexts from '../../../Hooks/Firebase/useAuthContexts';
import PreLoader from '../../Shared/PreLoader/PreLoader';




const AdminRoute = ({ children, ...rest }) => {
    const { user, isAdmin, isLoading } = useAuthContexts();

    if (isLoading) {
        return <PreLoader />;
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/notfound',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;