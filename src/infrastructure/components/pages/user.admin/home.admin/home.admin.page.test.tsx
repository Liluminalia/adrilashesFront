import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../store/store';
import HomeAdminPage from './home.admin.page';

describe('Given Home Admin page', () => {
    describe('When we render the page', () => {
        test('Then it should display "gestionar tratamientos"', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <HomeAdminPage />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/gestionar tratamientos/i);
            expect(element).toBeInTheDocument();
        });
    });
});
