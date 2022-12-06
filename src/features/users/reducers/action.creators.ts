import { createAction } from '@reduxjs/toolkit';
import { UserI } from '../models/users';
import { actionTypes } from './action.types';

export const loadActionCreator = createAction<Array<UserI>>(actionTypes.load);

export const addActionCreator = createAction<UserI>(actionTypes.add);

export const updateActionCreator = createAction<UserI>(actionTypes.update);
