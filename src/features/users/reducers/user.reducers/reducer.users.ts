import { createReducer } from '@reduxjs/toolkit';
import { UserI } from '../../models/users';
import * as ac from './action.creators';

const initialState: {
    user: UserI | null;
    isLogged: boolean;
    isLogging: boolean;
    token: string | null;
    role: 'admin' | 'user' | null;
} = {
    user: null,
    isLogged: false,
    isLogging: false,
    token: null,
    role: null,
};

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loginActionCreator, (state, _action) => ({
        ...state,
        isLogged: false,
        isLogging: true,
        user: null,
        token: null,
    }));
    builder.addCase(ac.loggedActionCreator, (state, action) => ({
        ...state,
        isLogged: true,
        isLogging: false,
        user: action.payload.user,
        token: action.payload.token,
    }));
    builder.addCase(ac.logoutActionCreator, (_state, action) => action.payload);
    builder.addCase(ac.addAppointmentActionCreator, (state, action) => ({
        ...state,
        user: action.payload,
    }));
    builder.addDefaultCase((state) => state);
});
