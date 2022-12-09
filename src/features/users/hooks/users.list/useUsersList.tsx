import { useMemo } from 'react';
import {
    useAppDispatch,
    useAppSelector,
} from '../../../../infrastructure/store/hooks';
import { RootState } from '../../../../infrastructure/store/store';
import { UserI } from '../../models/users';
import * as ac from '../../reducers/users.list.reducers/action.creators';
import { UserRepository } from '../../services/user.repository';

export const useUsersList = () => {
    const users = useAppSelector((state: RootState) => state.users);
    const dispatcher = useAppDispatch();
    const repositoryUser = useMemo(() => new UserRepository(), []);

    const handleGetAll = () => {
        repositoryUser
            .getAllUsers()
            .then((users) => dispatcher(ac.getAllUsersActionCreator(users)));
    };
    const handleDiscount = (
        treatmentId: string,
        userId: string,
        discount: string
    ) => {
        repositoryUser
            .updateUserAppointment(treatmentId, userId, discount)
            .then((user: UserI) =>
                dispatcher(ac.updateAppointmentActionCreator(user))
            );
    };

    const handleDeleteAppointment = (treatmentId: string, userId: string) => {
        repositoryUser
            .deleteUserAppointment(treatmentId, userId)
            .then((user: UserI) =>
                dispatcher(ac.deleteAppointmentActionCreator(user.id))
            );
    };

    return {
        users,
        handleGetAll,
        handleDiscount,
        handleDeleteAppointment,
    };
};
