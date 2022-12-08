import { configureStore } from '@reduxjs/toolkit';
import { treatmentReducer } from '../../features/treatments/reducers/reducer.treatments';
import { userReducer } from '../../features/users/reducers/reducer.users';

export const appStore = configureStore({
    reducer: {
        users: userReducer,
        treatments: treatmentReducer,
    },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
