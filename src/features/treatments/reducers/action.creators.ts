import { createAction } from '@reduxjs/toolkit';
import { TreatmentI } from '../models/treatments';
import { actionTypes } from './action.types';

export const loadActionCreator = createAction<Array<TreatmentI>>(
    actionTypes.load
);
export const addActionCreator = createAction<TreatmentI>(actionTypes.add);
export const updateActionCreator = createAction<TreatmentI>(actionTypes.update);
export const deleteActionCreator = createAction<TreatmentI>(actionTypes.delete);
