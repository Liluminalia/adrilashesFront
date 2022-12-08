import { userReducer } from './reducer.users.list';
import { actionTypes } from './action.types';
import { UserI } from '../../models/users';

const userMock: UserI = {
    id: '111',
    name: 'aaa',
    email: 'aaa',

    phone: 'aaa',
    role: 'user',
    isVip: true,
    appointments: [],
};
let action: { type: string; payload: unknown };
let state: Array<UserI>;
describe('When the action is getAllUsers', () => {
    test('Then the returned state should include the action payload', () => {
        action = {
            type: actionTypes.getAllUsers,
            payload: [userMock],
        };
        state = [];
        const result = userReducer(state, action);
        expect(result).toEqual(action.payload);
    });
});
describe('When the action is updateAppointment', () => {
    test('Then the returned state should include the action payload', () => {
        const updatedMock = {
            id: '111',
            name: 'aaa',
            email: 'aaa',
            phone: 'aaa',
            role: 'user',
            isVip: true,
            appointments: ['appointment updated'],
        };
        action = {
            type: actionTypes.updateAppointment,
            payload: updatedMock,
        };
        state = [userMock];
        const result = userReducer(state, action);
        expect(result[0]).toEqual(action.payload);
    });
    test('Then if is not the same id, the returned state should include the user not updated', () => {
        const updatedMock = {
            id: '222',
            name: 'aaa',
            email: 'aaa',
            phone: 'aaa',
            role: 'user',
            isVip: true,
            appointments: ['appointment updated'],
        };
        action = {
            type: actionTypes.updateAppointment,
            payload: updatedMock,
        };
        state = [userMock];
        const result = userReducer(state, action);
        expect(result[0]).toEqual(state[0]);
    });
});
describe('When the action is deleteAppointment', () => {
    test('Then the returned state should include the action payload', () => {
        action = {
            type: actionTypes.deleteAppointment,
            payload: userMock.id,
        };
        state = [userMock];
        const result = userReducer(state, action);
        expect(result).toStrictEqual([]);
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
    test('Then the returned state should be ...', () => {
        const result = userReducer(state, action);
        expect(result).toEqual(state);
    });
});
