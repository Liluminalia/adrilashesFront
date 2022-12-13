import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router, Navigate } from 'react-router-dom';
import { AdminRoute } from './admin.route';
import { mockStoreAdmin } from '../../../mockStore/mockStore';
import { mockStoreUnlogged } from '../../../mockStore/mockStoreUnlogged';
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: jest.fn(),
}));
describe('Given the route', () => {
    test('if we are logged should go to patatas', async () => {
        render(
            <>
                <Router>
                    <Provider store={mockStoreAdmin}>
                        <AdminRoute>
                            <p>patatas</p>
                        </AdminRoute>
                    </Provider>
                </Router>
            </>
        );
        const title = new RegExp('patatas', 'i');
        const element = screen.getByText(title);
        expect(element).toBeInTheDocument();
    });
    test('if we are not logged should go to home', async () => {
        render(
            <>
                <Router initialEntries={['/home']} initialIndex={1}>
                    <Provider store={mockStoreUnlogged}>
                        <AdminRoute>
                            <p>patatas</p>
                        </AdminRoute>
                    </Provider>
                </Router>
            </>
        );
        const title = new RegExp('patatas', 'i');
        const element = screen.queryByText(title);
        expect(element).toBe(null);
        expect(Navigate).toHaveBeenCalled();
    });
});
