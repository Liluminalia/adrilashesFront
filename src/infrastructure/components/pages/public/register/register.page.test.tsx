import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../store/store';
import { RegisterPage } from './register.page';

describe('Given Register page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Registrarse"', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <RegisterPage />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/Registrarse/i);
            expect(element).toBeInTheDocument();
        });
    });
});
