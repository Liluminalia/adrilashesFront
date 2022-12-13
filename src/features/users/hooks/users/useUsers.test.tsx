import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
    appointmentMock,
    mockStoreAdmin,
    userMock,
    userMockAdmin,
} from '../../../../infrastructure/mockStore/mockStore';
import { MemoryRouter as Router } from 'react-router-dom';
import { RoleI, UserI } from '../../models/users';
import { UserRepository } from '../../services/user.repository';
import { useUsers } from './useUsers';
const mockNavigate = jest.fn();
jest.mock('../../services/user.repository');
jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as jest.Mock),
    useNavigate: () => mockNavigate,
}));
let result: {
    current: {
        user: {
            isLogged: boolean;
            isLogging: boolean;
            user: UserI | null;
            token: string | null;
            role: RoleI | null;
        };
        handleLogin: (user: Partial<UserI>) => void;
        handleLogout: () => void;
        handleAddAppointment: (userId: string) => void;
    };
};
let spyDispatch: jest.SpyInstance;
describe('Given the hook', () => {
    beforeEach(() => {
        UserRepository.prototype.login = jest.fn().mockResolvedValue({
            user: userMockAdmin,
            token: 'string',
        });
        UserRepository.prototype.addUserAppointment = jest
            .fn()
            .mockResolvedValue(userMock);
        spyDispatch = jest.spyOn(mockStoreAdmin, 'dispatch');
        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Router>
                <Provider store={mockStoreAdmin}>{children}</Provider>
            </Router>
        );

        // eslint-disable-next-line testing-library/no-render-in-setup
        ({ result } = renderHook(() => useUsers(), { wrapper }));
    });

    test('if we use HandleLogin and we are admin, it should return to home admin page', async () => {
        const mockLog = {
            name: 'pepe',
            password: 'perejil',
        };

        await waitFor(() => {
            result.current.handleLogin(mockLog);
        });
        expect(UserRepository.prototype.login).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalled();
    });
    test('if we use HandleAddAppointment should change the appointment of a user from the array of users', async () => {
        await waitFor(() => {
            result.current.handleAddAppointment(appointmentMock._id.id);
        });
        expect(UserRepository.prototype.addUserAppointment).toHaveBeenCalled();
    });
    test('if we use HandleLogout should delete de token and go to home page', async () => {
        await waitFor(() => {
            result.current.handleLogout();
        });
        expect(spyDispatch).toHaveBeenCalled();
    });
});
describe('if we use HandleLogin and we are a user', () => {
    test('it should return to make appointment page', async () => {
        UserRepository.prototype.login = jest.fn().mockResolvedValue({
            user: userMock,
            token: 'string',
        });
        spyDispatch = jest.spyOn(mockStoreAdmin, 'dispatch');
        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Router>
                <Provider store={mockStoreAdmin}>{children}</Provider>
            </Router>
        );

        // eslint-disable-next-line testing-library/no-render-in-setup
        ({ result } = renderHook(() => useUsers(), { wrapper }));
        const mock = {
            name: 'pepe',
            password: 'perejil',
        };
        await waitFor(() => {
            result.current.handleLogin(mock);
        });
        expect(mockNavigate).toHaveBeenCalled();
    });
});
