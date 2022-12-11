import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../../store/store';
import HomePage from './home.page';

describe('Given Home page', () => {
    describe('When we render the page', () => {
        test('Then it should display "tratamientos disponibles"', () => {
            render(
                <>
                    <Router>
                        <Provider store={appStore}>
                            <HomePage />
                        </Provider>
                    </Router>
                </>
            );
            const element = screen.getByText(/tratamientos disponibles/i);
            expect(element).toBeInTheDocument();
        });
    });
});
