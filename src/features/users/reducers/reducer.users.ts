import { createReducer } from '@reduxjs/toolkit';
import { UserI } from '../models/users';
import * as ac from './action.creators';

const initialState: Array<UserI> = [];

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionCreator, (_state, action) => action.payload);
    builder.addCase(ac.addActionCreator, (state, action) => [
        ...state,
        action.payload,
    ]);
    builder.addCase(ac.updateActionCreator, (state, action) =>
        state.map((item) =>
            item.id === action.payload.id ? action.payload : item
        )
    );
    builder.addDefaultCase((state) => state);
});
