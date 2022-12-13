import { configureStore } from '@reduxjs/toolkit';
import { TreatmentI } from '../../features/treatments/models/treatments';
import { treatmentReducer } from '../../features/treatments/reducers/reducer.treatments';
import { RoleI } from '../../features/users/models/users';
import { userReducer } from '../../features/users/reducers/user.reducers/reducer.users';
import { userReducerAdmin } from '../../features/users/reducers/users.list.reducers/reducer.users.list';
import { RootState } from '../store/store';

export const appointmentMock = {
    _id: { title: 'manicura' } as TreatmentI,
    treatmentId: { title: 'manicura' } as TreatmentI,
    discount: 10,
};
export const userMockAdmin = {
    name: 'froilan',
    id: '2',
    role: 'admin' as RoleI,
    isVip: false,
    phone: '666666666',
    email: 'froi@gmail',
    appointments: [appointmentMock],
};
export const userMock = {
    name: 'amador',
    id: '265',
    role: 'user' as RoleI,
    isVip: true,
    phone: '666666666',
    email: 'centurionchape@gmail',
    appointments: [appointmentMock],
};
export const treatmentMock = {
    id: '241354',
    title: 'patata',
    img: 'string',
    description: 'skdjñfhskjdhf',
    price: 456,
    time: 456,
};
export const preloadedState: Partial<RootState> = {
    users: {
        isLogged: true,
        token: 'token',
        isLogging: false,
        user: userMockAdmin,
        role: 'admin',
    },
    Appointments: [userMock],
    treatments: [treatmentMock as TreatmentI],
};
export const mockStoreAdmin = configureStore({
    reducer: {
        users: userReducer,
        Appointments: userReducerAdmin,
        treatments: treatmentReducer,
    },
    preloadedState,
});
