import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useUsers } from '../../../../features/users/hooks/users/useUsers';
import { UserI } from '../../../../features/users/models/users';
import { appStore } from '../../../../infrastructure/store/store';

const mock2 = {
    id: 'string',
    name: 'pepe',
    email: 'string',
    phone: 'string',
    role: 'user',
    isVip: true,
    appointments: [],
};

describe('Given the route', () => {
    let result: {
        current: {
            user: {
                isLogged: boolean;
                isLogging: boolean;
                user: UserI | null;
                token: string | null;
            };
        };
    };

    beforeEach(() => {
        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        // eslint-disable-next-line testing-library/no-render-in-setup
        ({ result } = renderHook(() => useUsers(), { wrapper }));
    });

    test.skip('if we are logged should go to MakeAppointment page', async () => {
        result.current.user.isLogged = true;
    });
    test.skip('if we use HandleAddAppointment should change the appointment of a user from the array of users', async () => {
        //
    });
});
