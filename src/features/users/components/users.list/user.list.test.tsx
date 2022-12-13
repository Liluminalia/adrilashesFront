import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import {
    mockStoreAdmin,
    userMock,
} from '../../../../infrastructure/mockStore/mockStore';
import { RoleI } from '../../models/users';
import { UserList } from './user.list';
describe('Given TreatmentAdminList component', () => {
    describe('When we render the component', () => {
        test('Then it should display the name of any in the list', async () => {
            render(
                <Router>
                    <Provider store={mockStoreAdmin}>
                        <UserList item={[userMock]} />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/manicura/i);
            expect(element).toBeInTheDocument();
        });
        test('Then if the array length is less than 0 it should display nothing', async () => {
            const emptyUserMock = {
                name: 'vicentin',
                id: '654',
                role: 'user' as RoleI,
                isVip: true,
                phone: '666666666',
                email: 'uhah@gmail',
                appointments: [],
            };
            render(
                <Router>
                    <Provider store={mockStoreAdmin}>
                        <UserList item={[emptyUserMock]} />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/Citar/i);
            expect(element).toBeInTheDocument();
        });
    });
});
