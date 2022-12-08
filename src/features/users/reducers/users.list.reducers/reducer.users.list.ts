import { createReducer } from '@reduxjs/toolkit';
import { UserI } from '../../models/users';
import * as ac from './action.creators';

// const user0= UserRepository.prototype.getOneUser();
// user0.
const initialState: Array<UserI> = [];

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        ac.getAllUsersActionCreator,
        (_state, action) => action.payload
    );

    builder.addCase(ac.deleteAppointmentActionCreator, (state, action) =>
        state.filter((user) => user.id !== action.payload)
    );
    builder.addCase(ac.updateAppointmentActionCreator, (state, action) =>
        state.map((user) =>
            user.id === action.payload.id ? action.payload : user
        )
    );
    builder.addDefaultCase((state) => state);
});
