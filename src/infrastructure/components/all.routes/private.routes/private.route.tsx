import { Navigate } from 'react-router-dom';
import { useUsers } from '../../../../features/users/hooks/users/useUsers';

export function PrivateRoute({ children }: { children: JSX.Element }) {
    const { user } = useUsers();
    return user.isLogged ? children : <Navigate to="home" replace={true} />;
}
