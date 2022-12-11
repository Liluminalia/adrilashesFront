import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../../../infrastructure/store/store';
import { UserI } from '../../models/users';
import { UserRepository } from '../../services/user.repository';
import { useUsers } from './useUsers';

jest.mock('../../services/user.repository');

const mock2 = {
    id: 'string',
    name: 'pepe',
    email: 'string',
    phone: 'string',
    role: 'user',
    isVip: true,
    appointments: [],
};

describe('Given the hook', () => {
    let result: {
        current: {
            user: {
                isLogged: boolean;
                isLogging: boolean;
                user: UserI | null;
                token: string | null;
            };
            handleLogin: (user: Partial<UserI>) => void;
            handleAddAppointment: (userId: string) => void;
        };
    };

    beforeEach(() => {
        UserRepository.prototype.login = jest.fn().mockResolvedValue(mock2);
        UserRepository.prototype.addUserAppointment = jest
            .fn()
            .mockResolvedValue(mock2);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        // eslint-disable-next-line testing-library/no-render-in-setup
        ({ result } = renderHook(() => useUsers(), { wrapper }));
    });

    test.skip('if we use HandleLogin should add a new item to the array of users', async () => {
        const mockLog = {
            name: 'pepe',
            password: 'perejil',
        };
        await waitFor(() => {
            result.current.handleLogin(mockLog);
            expect(UserRepository.prototype.login).toHaveBeenCalled();
        });
    });
    test.skip('if we use HandleAddAppointment should change the appointment of a user from the array of users', async () => {
        await waitFor(() => {
            result.current.handleAddAppointment(mock2.id);
            expect(
                UserRepository.prototype.addUserAppointment
            ).toHaveBeenCalled();
        });
    });
});
