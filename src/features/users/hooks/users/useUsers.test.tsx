import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
    appointmentMock,
    mockStoreAdmin,
    userMock,
} from '../../../../infrastructure/mockStore/mockStore';
import { RoleI, UserI } from '../../models/users';
import { UserRepository } from '../../services/user.repository';
import { useUsers } from './useUsers';

jest.mock('../../services/user.repository');

describe('Given the hook', () => {
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
            handleAddAppointment: (userId: string) => void;
        };
    };

    beforeEach(() => {
        UserRepository.prototype.login = jest.fn().mockResolvedValue('token');
        UserRepository.prototype.addUserAppointment = jest
            .fn()
            .mockResolvedValue(userMock);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={mockStoreAdmin}>{children}</Provider>
        );

        // eslint-disable-next-line testing-library/no-render-in-setup
        ({ result } = renderHook(() => useUsers(), { wrapper }));
    });

    test('if we use HandleLogin should add a new item to the array of users', async () => {
        const mockLog = {
            name: 'pepe',
            password: 'perejil',
        };
        await waitFor(() => {
            result.current.handleLogin(mockLog);
            expect(UserRepository.prototype.login).toHaveBeenCalled();
        });
    });
    test('if we use HandleAddAppointment should change the appointment of a user from the array of users', async () => {
        await waitFor(() => {
            result.current.handleAddAppointment(appointmentMock._id.id);
            expect(
                UserRepository.prototype.addUserAppointment
            ).toHaveBeenCalled();
        });
    });
});
