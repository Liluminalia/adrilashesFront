import { createAction } from '@reduxjs/toolkit';
import { UserI } from '../../models/users';
import { actionTypes } from './action.types';

export const getAllUsersActionCreator = createAction<Array<UserI>>(
    actionTypes.getAllUsers
);
export const updateAppointmentActionCreator = createAction<UserI>(
    actionTypes.updateAppointment
);
export const deleteAppointmentActionCreator = createAction<string>(
    actionTypes.deleteAppointment
);
