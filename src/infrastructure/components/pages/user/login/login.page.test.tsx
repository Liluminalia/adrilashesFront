import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import LoginPage from './login.page';

describe('Given Login page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Login page"', () => {
            render(
                <>
                    <Router>
                        <LoginPage />
                    </Router>
                </>
            );
            const element = screen.getByText(/Login page/i);
            expect(element).toBeInTheDocument();
        });
    });
});
