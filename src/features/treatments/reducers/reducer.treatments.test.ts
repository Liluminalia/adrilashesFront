import { treatmentReducer } from './reducer.treatments';
import { actionTypes } from './action.types';
import { TreatmentI } from '../models/treatments';

describe('Given the function treatmentReducer', () => {
    const treatmentMock: TreatmentI = {
        id: '111',
        title: 'aaa',
        img: 'aaa',
        price: 34,
        description: 'aaa',
        time: 65,
    };

    let action: { type: string; payload: unknown };
    let state: Array<TreatmentI>;
    describe('When the action is getAll', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.getAll,
                payload: [treatmentMock],
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = treatmentReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is add', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.add,
                payload: treatmentMock,
            };
            state = [];
        });
        test('Then the returned state should include the action payload', () => {
            const result = treatmentReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...treatmentMock, title: 'Update treatment' },
            };
            state = [treatmentMock];
        });
        test('Then the returned state should include the action payload', () => {
            const result = treatmentReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: {
                    ...treatmentMock,
                    id: '2',
                    title: 'Update treatment',
                },
            };
            state = [treatmentMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = treatmentReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is delete', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: treatmentMock,
            };
            state = [treatmentMock];
        });
        test('Then the returned state should not include the action payload', () => {
            const result = treatmentReducer(state, action);
            expect(result).toEqual([]);
        });
    });

    describe('When the action is delete and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: { ...treatmentMock, id: '2' },
            };
            state = [treatmentMock];
        });
        test('Then the returned state should should be the original state', () => {
            const result = treatmentReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When the action is any other', () => {
        beforeEach(() => {
            action = {
                type: '',
                payload: null,
            };
            state = [treatmentMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = treatmentReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
