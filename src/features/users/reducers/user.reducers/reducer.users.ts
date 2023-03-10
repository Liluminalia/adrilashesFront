import { createReducer } from '@reduxjs/toolkit';
import { RoleI, UserI } from '../../models/users';
import * as ac from './action.creators';

const initialState: {
    user: UserI | null;
    isLogged: boolean;
    isLogging: boolean;
    token: string | null;
    role: RoleI | null;
} = {
    user: null,
    isLogged: false,
    isLogging: false,
    token: null,
    role: null,
};

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.spinnerActionCreator, (state, _action) => ({
        ...state,
        isLogged: false,
        isLogging: true,
        user: null,
        token: null,
    }));
    builder.addCase(ac.loginActionCreator, (state, action) => ({
        ...state,
        isLogged: true,
        isLogging: false,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.user.role,
    }));
    builder.addCase(ac.logoutActionCreator, (_state, action) => action.payload);
    builder.addCase(ac.addAppointmentActionCreator, (state, action) => ({
        ...state,
        user: action.payload,
    }));
    builder.addDefaultCase((state) => state);
});
