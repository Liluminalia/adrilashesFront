import { userReducer } from './reducer.users';
import { actionTypes } from './action.types';
import { UserI } from '../models/users';

describe('Given the function userReducer', () => {
    const userMock: UserI = {
        id: '111',
        name: 'aaa',
        email: 'aaa',
        password: '34',
        phone: 'aaa',
        role: 'user',
        isVip: true,
        appointments: [],
    };

    let action: { type: string; payload: unknown };
    let state: Array<UserI>;
    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.load,
                payload: [userMock],
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is add', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.add,
                payload: userMock,
            };
            state = [];
        });
        test('Then the returned state should include the action payload', () => {
            const result = userReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...userMock, title: 'Update user' },
            };
            state = [userMock];
        });
        test('Then the returned state should include the action payload', () => {
            const result = userReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });

    describe('When the action is update and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: {
                    ...userMock,
                    id: '2',
                    title: 'Update user',
                },
            };
            state = [userMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = userReducer(state, action);
            expect(result).toEqual(state);
        });
    });
    describe('When the action is any other', () => {
        beforeEach(() => {
            action = {
                type: '',
                payload: null,
            };
            state = [userMock];
        });
        test('Then the returned state should be the original state', () => {
            const result = userReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
