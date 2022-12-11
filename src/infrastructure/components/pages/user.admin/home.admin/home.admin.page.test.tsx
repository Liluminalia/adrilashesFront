import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import HomeAdminPage from './home.admin.page';

describe('Given Home Admin page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Home Admin page"', () => {
            render(
                <>
                    <Router>
                        <HomeAdminPage />
                    </Router>
                </>
            );
            const element = screen.getByText(/Home Admin page/i);
            expect(element).toBeInTheDocument();
        });
    });
});
