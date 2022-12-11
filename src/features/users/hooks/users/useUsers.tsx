import { useMemo } from 'react';
import {
    useAppDispatch,
    useAppSelector,
} from '../../../../infrastructure/store/hooks';
import { RootState } from '../../../../infrastructure/store/store';
import { UserI } from '../../models/users';
import * as ac from '../../reducers/user.reducers/action.creators';
import { RepositoryUsers } from '../../services/repository';
import { UserRepository } from '../../services/user.repository';

export const useUsers = () => {
    const user = useAppSelector((state: RootState) => state.users);
    const dispatcher = useAppDispatch();
    const repositoryUser: RepositoryUsers<UserI> = useMemo(
        () => new UserRepository(),
        []
    );

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
        user,
        handleLogin,
        handleAddAppointment,
    };
};
