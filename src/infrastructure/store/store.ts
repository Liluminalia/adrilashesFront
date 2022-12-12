import { configureStore } from '@reduxjs/toolkit';
import { treatmentReducer } from '../../features/treatments/reducers/reducer.treatments';
import { userReducer } from '../../features/users/reducers/user.reducers/reducer.users';
import { userReducerAdmin } from '../../features/users/reducers/users.list.reducers/reducer.users.list';

export const appStore = configureStore({
    reducer: {
        users: userReducer,
        Appointments: userReducerAdmin,
        treatments: treatmentReducer,
    },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
