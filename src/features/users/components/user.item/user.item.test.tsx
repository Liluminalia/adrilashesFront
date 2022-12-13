import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import {
    mockStoreAdmin,
    userMock,
} from '../../../../infrastructure/mockStore/mockStore';
import { UserItem } from './user.item';

describe('Given UserAdminItem component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Precio"', () => {
            render(
                <Router>
                    <Provider store={mockStoreAdmin}>
                        <UserItem item={userMock} />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/Precio/i);
            expect(element).toBeInTheDocument();
        });
    });
});
