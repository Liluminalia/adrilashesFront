import { createAction } from '@reduxjs/toolkit';
import { UserI } from '../../models/users';
import { actionTypes } from './action.types';

export const spinnerActionCreator = createAction<void>(actionTypes.login);
export const loginActionCreator = createAction<{ user: UserI; token: string }>(
    actionTypes.logged
);
export const logoutActionCreator = createAction<void>(actionTypes.logout);
export const addAppointmentActionCreator = createAction<UserI>(
    actionTypes.addAppointment
);
