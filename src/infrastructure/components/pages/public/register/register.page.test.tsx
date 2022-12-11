import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { RegisterPage } from './register.page';

describe('Given Register page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Register page"', () => {
            render(
                <>
                    <Router>
                        <RegisterPage />
                    </Router>
                </>
            );
            const element = screen.getByText(/Register page/i);
            expect(element).toBeInTheDocument();
        });
    });
});
