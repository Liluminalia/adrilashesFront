import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStoreAdmin } from '../../mockStore/mockStore';
import { mockStoreUserRole } from '../../mockStore/mockStoreUserRole';
import { appStore } from '../../store/store';
import { Header } from './header';

describe('Given Header component', () => {
    describe('When we render the component', () => {
        test('if we are not logged Then it should display the alt text "logo adri lashes"', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <Header />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/adri lashes/i);
            const element2 = screen.getAllByAltText(/logo adri lashes/i);

            expect(element).toBeInTheDocument();
            expect(element2[0]).toBeInTheDocument();
        });
        test('if we are logged Then it should display the alt text "logout adri lashes"', () => {
            render(
                <>
                    <Router>
                        <Provider store={mockStoreAdmin}>
                            <Header />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/adri lashes/i);
            const element2 = screen.getAllByAltText(/logout adri lashes/i);

            expect(element).toBeInTheDocument();
            expect(element2[0]).toBeInTheDocument();
        });
        test('if we are logged and the admin, Then it should display the alt text "logout adri lashes"', () => {
            render(
                <>
                    <Router>
                        <Provider store={mockStoreUserRole}>
                            <Header />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/adri lashes/i);
            const element2 = screen.getAllByAltText(/logout adri lashes/i);

            expect(element).toBeInTheDocument();
            expect(element2[0]).toBeInTheDocument();
        });
    });
});
