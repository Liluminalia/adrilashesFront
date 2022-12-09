import { useMemo } from 'react';
import {
    useAppDispatch,
    useAppSelector,
} from '../../../../infrastructure/store/hooks';
import { RootState } from '../../../../infrastructure/store/store';
import { UserI } from '../../models/users';
import * as ac from '../../reducers/user.reducers/action.creators';
import { UserRepository } from '../../services/user.repository';

export const useUsers = () => {
    const users = useAppSelector((state: RootState) => state.users);
    const dispatcher = useAppDispatch();
    const repositoryUser = useMemo(() => new UserRepository(), []);

    const handleLogin = (user: Partial<UserI>) => {
        repositoryUser
            .login(user)
            .then((response) => dispatcher(ac.loginActionCreator(response)));
    };

    const handleAddAppointment = (userId: string) => {
        repositoryUser
            .addUserAppointment(userId)
            .then((user: UserI) =>
                dispatcher(ac.addAppointmentActionCreator(user))
            );
    };

    return {
        users,
        handleLogin,
        handleAddAppointment,
    };
};
