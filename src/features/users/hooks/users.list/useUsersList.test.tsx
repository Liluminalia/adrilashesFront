import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../../../infrastructure/store/store';
import { UserI } from '../../models/users';
import { UserRepository } from '../../services/user.repository';
import { useUsersList } from './useUsersList';

jest.mock('../../services/user.repository');

const mockAppointment = {
    treatmentId: [
        {
            id: 'string',
            title: 'string',
            img: 'string',
            description: 'string',
            price: 23,
            time: 23,
        },
    ],
    discount: '50',
};

const mockUser = {
    id: 'string',
    name: 'pepe',
    email: 'string',
    phone: 'string',
    role: 'user',
    isVip: true,
    appointments: [],
};
const mockUserAppointment = {
    id: 'string',
    name: 'pepe',
    email: 'string',
    phone: 'string',
    role: 'user',
    isVip: true,
    appointments: [mockAppointment],
};
describe('Given the hook', () => {
    let result: {
        current: {
            users: UserI[];
            handleDiscount: (
                treatmentId: string,
                userId: string,
                discount: string
            ) => void;
            handleDeleteAppointment: (
                treatmentId: string,
                userId: string
            ) => void;
        };
    };

    beforeEach(() => {
        UserRepository.prototype.getAllUsers = jest
            .fn()
            .mockResolvedValue([mockUser]);
        UserRepository.prototype.updateUserAppointment = jest
            .fn()
            .mockResolvedValue(mockUserAppointment.appointments);
        UserRepository.prototype.deleteUserAppointment = jest
            .fn()
            .mockResolvedValue([]);
        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        // eslint-disable-next-line testing-library/no-render-in-setup
        ({ result } = renderHook(() => useUsersList(), { wrapper }));
    });
    test('if we use HandleDiscount should change the appointment of a user from the array of users', async () => {
        await waitFor(() => {
            result.current.handleDiscount(
                mockAppointment.treatmentId[0].id,
                mockUser.id,
                mockAppointment.discount
            );
            expect(
                UserRepository.prototype.updateUserAppointment
            ).toHaveBeenCalled();
        });
    });
    test('if we use HandleDeleteAppointment should change the appointment of a user from the array of users', async () => {
        await waitFor(() => {
            result.current.handleDeleteAppointment(
                mockAppointment.treatmentId[0].id,
                mockUser.id
            );
            expect(
                UserRepository.prototype.deleteUserAppointment
            ).toHaveBeenCalled();
        });
    });
});
