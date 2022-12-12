import { useMemo } from 'react';
import {
    useAppDispatch,
    useAppSelector,
} from '../../../../infrastructure/store/hooks';
import { RootState } from '../../../../infrastructure/store/store';
import { UserI } from '../../models/users';
import * as ac from '../../reducers/user.reducers/action.creators';
import { UserRepository } from '../../services/user.repository';
import { useNavigate } from 'react-router-dom';
import { RepositoryUsers } from '../../services/repository';
export const useUsers = () => {
    const user = useAppSelector((state: RootState) => state.users);
    const dispatcher = useAppDispatch();
    const repositoryUser: RepositoryUsers = useMemo(
        () => new UserRepository(),
        []
    );
    const navigate = useNavigate();
    const handleLogin = (user: Partial<UserI>) => {
        repositoryUser.login(user).then((response) => {
            dispatcher(ac.loginActionCreator(response));
            localStorage.setItem('token', response.token);
            if (response.user.role === 'admin') {
                return navigate('/HomeAdmin');
            }
            navigate('/MakeAppointment');
        });
    };
    const handleLogout = () => {
        dispatcher(ac.logoutActionCreator());
        localStorage.removeItem('token');
    };
    const handleAddAppointment = (treatmentId: string) => {
        repositoryUser
            .addUserAppointment(treatmentId)
            .then((user: UserI) =>
                dispatcher(ac.addAppointmentActionCreator(user))
            );
    };

    return {
        user,
        handleLogin,
        handleLogout,
        handleAddAppointment,
    };
};
