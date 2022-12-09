import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUsers } from '../../../../features/users/hooks/users/useUsers';

export function AdminRoute({ children }: { children: JSX.Element }) {
    const { user } = useUsers();
    // const title = 'Private.Route component';
    return user.role === 'admin' ? (
        children
    ) : (
        <Navigate to="home" replace={true} />
    );
}
