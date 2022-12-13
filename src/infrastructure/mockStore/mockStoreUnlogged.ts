import { configureStore } from '@reduxjs/toolkit';
import { TreatmentI } from '../../features/treatments/models/treatments';
import { treatmentReducer } from '../../features/treatments/reducers/reducer.treatments';
import { RoleI } from '../../features/users/models/users';
import { userReducer } from '../../features/users/reducers/user.reducers/reducer.users';
import { userReducerAdmin } from '../../features/users/reducers/users.list.reducers/reducer.users.list';
import { RootState } from '../store/store';
import { userMock } from './mockStore';

export const appointment2Mock = {
    _id: { title: 'manicura' } as TreatmentI,
    treatmentId: { title: 'manicura' } as TreatmentI,
    discount: 10,
};
export const userMock2 = {
    name: 'tomas',
    id: '2',
    role: 'user' as RoleI,
    isVip: false,
    phone: '666666666',
    email: 'froi@gmail',
    appointments: [appointment2Mock],
};
export const user2Mock = {
    name: 'ernesto',
    id: '32',
    role: 'user' as RoleI,
    isVip: true,
    phone: '666666666',
    email: 'capitansevilla@gmail',
    appointments: [appointment2Mock],
};
export const treatmentMock = {
    id: '1456',
    title: 'tomate',
    img: '555555',
    description: 'dfsghdgur',
    price: 4153,
    time: 123,
};
export const preloadedState: Partial<RootState> = {
    users: {
        isLogged: false,
        token: null,
        isLogging: true,
        user: null,
        role: null,
    },
    Appointments: [user2Mock],
    treatments: [treatmentMock as TreatmentI],
};
export const mockStoreUnlogged = configureStore({
    reducer: {
        users: userReducer,
        Appointments: userReducerAdmin,
        Treatments: treatmentReducer,
    },
    preloadedState,
});
