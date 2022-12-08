import { userReducer } from './reducer.users';
import { actionTypes } from './action.types';
import { UserI } from '../../models/users';

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
    let state: {
        user: UserI | null;
        token: string | null;
        isLogged: boolean;
        isLogging: boolean;
        role: 'admin' | 'user' | null;
    };
    describe('When the action is login', () => {
        test('Then the returned state should be the action payload', () => {
            action = {
                type: actionTypes.login,
                payload: [userMock],
            };
            state = {
                user: null,
                token: null,
                isLogged: false,
                isLogging: true,
                role: null,
            };

            const result = userReducer(state, action);
            expect(result.isLogging).toBe(true);
        });
    });
    describe('When the action is logged', () => {
        test('Then the returned state should include the action payload', () => {
            action = {
                type: actionTypes.logged,
                payload: {
                    user: userMock,
                    token: 'token',
                    isLogged: true,
                    isLogging: false,
                    role: 'user',
                },
            };
            state = {
                user: null,
                token: null,
                isLogged: false,
                isLogging: true,
                role: 'user',
            };
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
    describe('When the action is logout', () => {
        test('Then the returned state should include the action payload', () => {
            action = {
                type: actionTypes.logout,
                payload: {
                    user: null,
                    token: null,
                    isLogged: false,
                    isLogging: false,
                    role: null,
                },
            };
            state = {
                user: userMock,
                isLogged: false,
                isLogging: false,
                token: 'token',
                role: null,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe('When the action is addAppointment', () => {
        test('Then the returned state should include the action payload', () => {
            action = {
                type: actionTypes.addAppointment,
                payload: {
                    user: {
                        ...userMock,
                        appointments: [{ treatmentId: '' }],
                    },
                },
            };
            state = {
                user: userMock,
                token: 'token',
                isLogged: true,
                isLogging: false,
                role: 'admin',
            };
            const result = userReducer(state, action);
            expect(result.user).toEqual(action.payload);
        });
    });
});
