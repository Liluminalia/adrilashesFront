import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import AppointmentsPage from './appointments.page';

describe('Given Appointments page', () => {
    describe('When we render the page', () => {
        test('Then it should display "Appointments page"', () => {
            render(
                <>
                    <Router>
                        <AppointmentsPage />
                    </Router>
                </>
            );
            const element = screen.getByText(/Appointments page/i);
            expect(element).toBeInTheDocument();
        });
    });
});
